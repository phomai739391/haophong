# Hao Phong V6.3 — QA report (2 November 2026)

## Verified source amendments

- Updated **Chua 1 con → Canh Chua Ca** and **Kho 1 con → Ca Kho** in `menu-data.js`, keeping both prices at **AUD $95**.
- Removed the two expressly rejected Gallery images (**Prawn Wontons** and **King Prawn & Sliced Pork Noodles**) from `site-config.js`. The image downloader also purges old JPG copies when present. The food/menu records were not deleted.
- Displayed the exact supplied Hao Phong wordmark screenshot (cropped from `image(20261102-121253).png`) in both HTML headers and footers. This is a screenshot-derived PNG, not an original vector logo.
- The workflow downloads only six approved Uber photos before deploying, although six JPEG bytes are still **not included** in this ZIP because external CDN download is unavailable in this environment. A CDN fallback/placeholder is present.
- Existing 24 source WebP image bytes are unchanged.

## Executed test

`node --check` passed for `script.js`, `menu-data.js`, `site-config.js`; Python compile passed for the photo downloader. Chromium/Playwright tests used HTML with locally embedded CSS, JS and local WebP assets, because ordinary file/http browser navigation is blocked in this environment. This tests front-end behavior, not the live network or deployed domain.

| Viewport | Chef items | Gallery photos | Reviews | Categories | Menu items | JS exceptions | Overflow |
|---:|---:|---:|---:|---:|---:|---:|---|
| 375px | 13 | 22 | 10 | 24 | 193 | 0 | no |
| 768px | 13 | 22 | 10 | 24 | 193 | 0 | no |
| 1440px | 13 | 22 | 10 | 24 | 193 | 0 | no |

At all three viewports: the supplied wordmark loaded; the Chef carousel next control advanced; the two names appeared in Chef and Menu; retained Chef prices were $95; the global accent-insensitive search for `bo luc lac` produced results. On mobile, the navigation toggle opened and closed. The two rejected pictures were absent from the generated Gallery.

## Not tested here / external dependencies

- Actual download of six Uber Eats JPG images and rendering from the CDN in a normal internet-connected browser; verify the GitHub Actions log (`Summary: saved 6 of 6`) and manually inspect the resulting deployment.
- Live Google Maps iframe, optional paid Google Places UI Kit, domain DNS and public server routing.
- Full accessibility audit, third-party browser compatibility, source high-resolution logo fidelity.

