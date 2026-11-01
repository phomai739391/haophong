# Hao Phong V6.2 — QA

## Changes checked

- Source remains a two-page website, with `index.html`, `menu.html`, `styles.css`, `script.js`, `menu-data.js` and `site-config.js` at ZIP root.
- Eight photos matched visually to the listed Hao Phong dishes using real Uber Eats thumbnails indexed by the menu listing. Each has distinct source URL and named local destination.
- New photo data are separate from the restaurant's original 24 images and original menu data; prices are untouched.
- New image loader first attempts the expected local JPEG, then the exact official Uber CDN URL, then displays a neutral placeholder if both fail.
- `scripts/fetch_uber_photos.py` validates filename, URL allowlist, content type and JPEG signature. It is executed by GitHub Actions on deploy, not by a backend.

## Limitations

- External internet/DNS from the execution container is disabled. Running the downloader here failed with DNS-resolution errors for all eight images. No JPG files have been silently substituted or generated. The ZIP is **not yet offline-complete for the eight newly added Uber images**.
- The source thumbnails were visually inspected on the public listing, but the new local files and a real GitHub Pages upload have not been tested until the download workflow runs on a networked runner.
- Google Maps iframe, Google Fonts, optional Places UI Kit, actual DNS and delivery-image CDN availability require final testing on the deployed public site.

## Executed offline Chromium QA · 1 November 2026

Ran Chromium via Playwright with inlined local-image thumbnails and CSS/JS (the runtime blocks normal file/HTTP navigation). This is an **offline interaction test**, not a live CDN test. Results:

| Width | Chef cards | Gallery entries | Review cards | Horizontal overflow | JS exceptions |
|---|---:|---:|---:|---|---|
| 375px | 13 | 24 | 10 | none | none |
| 768px | 13 | 24 | 10 | none | none |
| 1440px | 13 | 24 | 10 | none | none |

Verified Chef and Reviews carousel next navigation, mobile nav, category selection and global search for `bo luc lac`, `phở`, and Chinese `香葉牛肉`. Exact source `menu-data.js` matched V6.1 byte-for-byte; 24 original WebP images still present.

JavaScript syntax checked with `node --check`; downloader compiled successfully with Python. The eight new photographs' content was inspected using the linked Uber Eats image previews, but they were **not loaded in this Chromium test**. The container cannot resolve external hosts, so their download attempt returned DNS errors. An online GitHub Actions deploy must verify `Summary: saved 8 of 8` and inspect images visually before production signoff.
