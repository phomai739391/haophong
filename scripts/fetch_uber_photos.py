#!/usr/bin/env python3
"""Fetch the eight specifically matched Hao Phong menu photos, as approved by the restaurant.
Run: python scripts/fetch_uber_photos.py
Use --strict to treat any missing photo as a build failure. No external dependencies.
"""
from pathlib import Path
import json, re, sys, urllib.request, argparse
ROOT=Path(__file__).resolve().parent.parent
content=(ROOT/'site-config.js').read_text(encoding='utf8')
match=re.search(r'window\.HAO_CONFIG\s*=\s*(\{[\s\S]*?\})\s*;\s*$',content)
if not match: raise SystemExit('Cannot parse site-config.js')
data=json.loads(match.group(1))
strict=argparse.ArgumentParser()
strict.add_argument('--strict',action='store_true')
args=strict.parse_args()
failed=[]
for item in data['uberPhotos']:
    name=item['id']; url=item['url']; path=ROOT/'images'/item['file']
    if not re.fullmatch(r'[a-z0-9-]+',name) or not re.fullmatch(r'uber/[a-z0-9-]+\.jpg',item['file']):
        raise SystemExit('Unsafe image file naming')
    if not url.startswith('https://tb-static.uber.com/prod/image-proc/processed_images/'):
        raise SystemExit('Unexpected image source for '+name)
    path.parent.mkdir(parents=True,exist_ok=True)
    if path.exists() and path.stat().st_size>1000:
        print('Already downloaded:',name);continue
    try:
        req=urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0 (compatible; HaoPhongRestaurantAssetImport/1.0)','Accept':'image/jpeg,image/*;q=0.8'})
        with urllib.request.urlopen(req,timeout=20) as resp:
            if not resp.headers.get('Content-Type','').lower().startswith('image/'):
                raise RuntimeError('Unexpected content type')
            content=resp.read(5_000_001)
        if len(content)>5_000_000 or len(content)<1500 or not content.startswith(b'\xff\xd8\xff'):
            raise RuntimeError('Invalid JPEG content')
        path.write_bytes(content)
        print('Downloaded:',name, len(content),'bytes')
    except Exception as exc:
        failed.append(name)
        print('Not downloaded:',name,'-',str(exc),file=sys.stderr)
print('Summary: saved',len(data['uberPhotos'])-len(failed),'of',len(data['uberPhotos']))
if args.strict and failed:sys.exit(1)
