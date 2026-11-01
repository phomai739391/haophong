# Hao Phong Restaurant — V6.2 · Additional Uber Eats photography

**1 November 2026** · Vietnamese & Chinese Restaurant · 136 Hopkins Street, Footscray VIC 3011

This is the same two-page HTML/CSS/vanilla JS website as V6.1, with **eight more food photographs matched to the correct Hao Phong items from its Uber Eats listing**. The user representing the restaurant confirmed the reuse permission in this conversation. Restaurant photos already present in the original ZIP have been preserved. The site works without a database or paid API service.

## Photo update: what is included and how it loads

Images were visually checked on the Hao Phong Uber Eats menu or its linked photo thumbnails. The eight additions and their precise source URLs are recorded in `site-config.js`. We **could not download the JPEG bytes in this execution environment** because its network blocks external host/DNS requests, so the ZIP contains photo mappings and an executable downloader, **not the new eight JPG files**. The real photo files are downloaded on the GitHub Pages runner (which normally has internet access). Until then the website attempts the same *exact* Uber Eats CDN URLs in the browser. If both fail, an accessible photo placeholder appears instead of a broken-image icon. No other restaurant's photos are used.

- **Chef's Specials**: new photos of *Soft shell crab* and *Chicken Farm Rice Noodle Soup*. There are still 13 menu items. Seven now have photo mappings (five original locally, two additional approved URLs), six retain honest placeholders. All prices unchanged.
- **Food Gallery**: six additional dishes — Combination Fried Rice; Seafood Char Kway Teow; Seafood Congee; Prawn & Pork Rice Paper Rolls; Prawn Dumplings/Wontons; King Prawn & Sliced Pork Noodles. 18 original photos plus 6 additional = **24 entries** with no photo reused between Chef's Specials and Gallery.
- *Lobster tail and noodle in XO sauce* retains the corrected image, label and **$95** from the original menu.

### Deploy with GitHub Pages (recommended)

1. Extract the ZIP into the **root of** `phomai739391/haophong` or your chosen repository; commit and push to `main`.
2. Settings → Pages → Source: **GitHub Actions**. The included `.github/workflows/static.yml` runs `python3 scripts/fetch_uber_photos.py` before uploading the website. Downloaded files are then served locally in the Pages artifact and will be available at `/haophong/images/uber/...`.
3. Check the Actions log for `Downloaded:` and `Summary: saved 8 of 8`. If fewer than eight are downloaded, the site has an external CDN fallback; re-run the workflow after the CDN recovers. Do not claim the photos are locally hosted until the deploy log confirms them.
4. Open the deployed site and verify both the Chef section and Gallery visually on desktop/mobile. Confirm phone number, opening hours and Google Map iframe as these are externally sourced.
5. Only add a CNAME and configure DNS for `haophong.com.au` when the owner controls the domain. See GitHub's current Pages custom-domain docs.

### Download the photos before GitHub deployment

On an internet-connected computer, in the extracted directory run:

```bash
python3 scripts/fetch_uber_photos.py --strict
```

A successful run places eight JPEGs in `images/uber/`; ZIP them together with the site to make the archive genuinely self-contained. The command uses Python's standard library, checks file naming and JPEG magic bytes, and never changes the menu data.

### Sources and naming

- [Hao Phong Uber Eats menu](https://www.ubereats.com/au/store/hao-phong/3FVxYAN7X6yBj5SUnU7rew) — photo links and item identity verified individually.
- Original 24 WebP assets supplied by the restaurant and preserved, including the hero file `a.webp`.
- `site-config.js` is the photo source/alt-text/placement manifest; it also supports optional `approvedGallery` local WebP additions.

**Important:** some Uber Eats JPEGs are customer-style photographs with varying lighting and angles, not the professional white-background originals. This is intentional: preserving authenticity is more important than falsely presenting the dish.

## Original menu and other functions (unchanged)

**24 categories, 193 menu items and 13 Chef's Specials**, all original listing prices, bilingual / Chinese names, tab filtering and accent-insensitive Vietnamese search. The homepage includes a carousel of Chef's Specials, separate Food Gallery, 10 review summaries with source links, a map and full contact information. The entire site is responsive without backend dependencies.

Hours listed: 10:30 am–9:30 pm on Monday–Tuesday / Thursday–Sunday; closed Wednesdays. Uber Eats ordering times are different. Owners should confirm holiday hours. Address: 136 Hopkins Street, Footscray VIC 3011. Phone: (03) 9689 8373.

Google review UI Kit remains **optional** and requires a restricted browser key, relevant enabled Google Maps APIs and billing. Without it the ten sourced reviews still render.

Brand icon `assets/hao-phong-mark.svg` remains a provisional original HP monogram because no official logo file has been supplied.

## QA status

See `QA_REPORT.md` for test results and limitations. This session could **not** validate CDN images inside Chromium against the live site, because browser and container have no external network access. The verified source photographs were viewed through the web search service. The downloader has only been tested for error handling in this environment, not for successful remote transfer. Do not assume successful image download until the workflow confirms it.
