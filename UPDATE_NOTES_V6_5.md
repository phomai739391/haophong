# V6.5 – Correction: wordmark only

This revision responds to the request to change the editable text **HAO PHONG.** to visually match the geometric, monoline HP symbol, as in the V6.2 logo layout. Do not use the low-resolution screenshot as the site logo.

- Header/footer: restores the original V6.2 composition (crisp `assets/hao-phong-mark.svg` beside real HTML text).
- **Only** the HAO PHONG wordmark uses a condensed geometric sans-serif (Barlow Condensed, with robust sans-serif fallbacks). The stylized HP monogram is a custom vector drawing, not an identifiable commercial font, so an exact font match is not guaranteed.
- Restores the V6.2 original site typography: Playfair Display in editorial headings, Be Vietnam Pro in body/UI, Noto Sans SC where appropriate.
- Retains the V6.3 corrections: `Canh Chua Ca`, `Ca Kho` and the removal of the two selected gallery photos.
- Menu data, prices, site configuration, JavaScript and other pictures were not modified from V6.3.
- The small PNG screenshot of the reference logo is removed from the deployable assets; both pages rely on the SVG and live text.

## QA

Chromium/Playwright offline test using inlined project resources at 375, 768 and 1440 px: no JavaScript errors, no horizontal overflow, logo SVG loaded, 13 chef cards, 22 gallery entries and 13 displayed chef menu items. Other 24-category/193-entry data was not modified. See `QA_RESULTS_V6_5.json`. Font snapshots use the fallback because remote Google Fonts are not accessible in the test environment.
