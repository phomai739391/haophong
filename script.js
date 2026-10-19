
"use strict";

/* ==============================
   HAO PHONG — V5 FIX
============================== */

const $ = s => document.querySelector(s);

const MENU = Array.isArray(window.HAO_MENU)
  ? window.HAO_MENU
  : [];

const esc = value => String(value ?? "").replace(
  /[&<>"']/g,
  char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]
);

const norm = value => String(value ?? "")
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .replace(/đ/gi, "d")
  .toLowerCase()
  .trim();

const price = value => {
  const p = String(value ?? "").trim();
  if (!p) return "";
  return /^\d+(\.\d+)?$/.test(p) ? "$" + p : p;
};

const slug = value => norm(value)
  .replace(/['’]/g, "")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const imageURL = file =>
  "images/" + encodeURIComponent(file);

/* ==============================
   13 CHEF SPECIALS

   Fallback when menu-data.js
   has failed or is unavailable.
============================== */

const FALLBACK_CHEF = [
  ["Bun cha", "22"],
  ["Pipi", "37"],
  ["Oyster", "15.8"],
  ["Barramundi ( Hấp/ Rang muối)", "85"],
  ["Lobster tail with noodles", "95"],
  ["Soft shell crab", "23"],
  ["Combo Lau Canh Chua Ca Kho", "109"],
  ["Chua 1 con", "95"],
  ["Kho 1 con", "95"],
  ["Chicken Farm Rice Noodle Soup", "20.5"],
  ["Chicken Farm on Rice", "20.5"],
  ["Chopped Chicken Farm ( Half)", "30"],
  ["Chopped Chicken Farm ( Whole)", "58"]
].map(([en, value]) => ({
  en, price: value
}));

const CHEF_IMAGES = {
  "Bun cha":
    "Bun Cha.webp",

  "Pipi":
    "Pipi (clams), served with Chinese donut.webp",

  "Barramundi ( Hấp/ Rang muối)":
    "Steamed Barramundi in Ginger and Shallot.webp",

  "Lobster tail with noodles":
    "Lobster Tail with Noodles.webp",

  "Combo Lau Canh Chua Ca Kho":
    "Combo Sour Fish Soup Hot Pot + Braised Fish Clay Pot.webp"
};

/* ==============================
   IMAGE ERROR HANDLING

   Try WebP, JPG, JPEG, PNG.
============================== */

function installImageRecovery(img, finalError) {
  if (!img || img.dataset.recovery === "ready") return;

  img.dataset.recovery = "ready";

  const original = img.getAttribute("src") || "";
  const attempts = [];

  if (/\.webp$/i.test(original)) {
    attempts.push(
      original.replace(/\.webp$/i, ".jpg"),
      original.replace(/\.webp$/i, ".jpeg"),
      original.replace(/\.webp$/i, ".png")
    );
  }

  let index = 0;

  img.addEventListener("error", () => {
    if (index < attempts.length) {
      img.src = attempts[index++];
      return;
    }

    if (typeof finalError === "function") {
      finalError(img);
    } else {
      img.style.visibility = "hidden";
    }
  });
}

/* ==============================
   NAVIGATION
============================== */

function initNavigation() {
  const toggle = $("#mobileToggle");
  const nav = $("#mainNav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const opened = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(opened));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ==============================
   CHEF CAROUSEL
============================== */

function getChefItems() {
  const group = MENU.find(
    section => norm(section.name) === norm("Chef's Specials")
  );

  const items = group && Array.isArray(group.items)
    ? group.items
    : FALLBACK_CHEF;

  // Photographed items appear first.
  // Every unphotographed dish remains in the slider.
  return [...items].sort(
    (a, b) =>
      Number(Boolean(CHEF_IMAGES[b.en])) -
      Number(Boolean(CHEF_IMAGES[a.en]))
  );
}

function renderChefSpecials() {
  const track = $("#chefTrack");
  if (!track) return;

  const items = getChefItems();

  track.innerHTML = items.map(item => {
    const filename = CHEF_IMAGES[item.en];

    return `
      <article class="chef-card">
        <div class="chef-photo">
          ${
            filename
              ? `<img
                   src="${imageURL(filename)}"
                   alt="${esc(item.en)}"
                   loading="lazy"
                   decoding="async"
                 >`
              : `<div class="placeholder">
                   <span>HAO PHONG</span>
                   <small>PHOTO COMING SOON</small>
                 </div>`
          }
        </div>

        <div class="chef-card-info">
          <div>
            <h3>${esc(item.en)}</h3>
            <p>Chef's special</p>
          </div>
          <strong class="chef-price">
            ${esc(price(item.price))}
          </strong>
        </div>
      </article>
    `;
  }).join("");

  track.querySelectorAll("img").forEach(img => {
    installImageRecovery(img, broken => {
      broken.parentElement.innerHTML = `
        <div class="placeholder">
          <span>HAO PHONG</span>
          <small>PHOTO COMING SOON</small>
        </div>
      `;
    });
  });
}

/* ==============================
   GALLERY — 18 DIFFERENT PHOTOS
============================== */

const GALLERY = [
  ["Grilled Pork Chop & Fried Egg",
    "Grilled Pork Chop, Fried Egg, Pork Loaf & Shredded Pork on Broken Rice.webp"],
  ["Honey Chicken",
    "Honey Chicken (in batter) with Sesame Seed Topping.webp"],
  ["Mongolian Beef",
    "Mongolian Beef (Sizzling).webp"],
  ["Rare Beef Rice Noodle Soup",
    "Rare Beef Rice Noodle Soup.webp"],
  ["Sugar Cane Prawn",
    "Sugar Cane Prawn with Fine Rice Vermicelli.webp"],
  ["Braised Duck Noodle Soup",
    "Braised Duck with Egg Noodle Soup.webp"],
  ["Chicken Rice Noodle Soup",
    "Chicken Rice Noodle Soup.webp"],
  ["Crispy Skin Chicken",
    "Crispy Skin Chicken on Tomato Rice.webp"],
  ["Diced Beef on Tomato Rice",
    "Diced Beef Cube on Tomato Rice.webp"],
  ["Grilled Chicken on Rice",
    "Grilled Chicken on Rice.webp"],
  ["Grilled Pork Rice Vermicelli",
    "Grilled Pork Rice Vermicelli.webp"],
  ["Grilled Pork Coleslaw",
    "Grilled Pork with Coleslaw.webp"],
  ["Pork Spring Rolls",
    "Pork Spring Rolls.webp"],
  ["Prawn Stuffed Eggplant & Beancurd",
    "Prawn Meat Stuffed Eggplant, Capsicum & Beancurd Clay Pot Rice.webp"],
  ["Sweet & Sour Chicken",
    "Sweet & Sour Chicken (in Batter).webp"],
  ["Black Bean Beef Clay Pot Rice",
    "Beef in Black Bean Sauce Clay Pot Rice.webp"],
  ["Chicken Coleslaw",
    "Chicken Coleslaw (with prawn crackers).webp"],
  ["Phở Đặc Biệt",
    "Pho Dac Biet.webp"]
];

function renderGallery() {
  const grid = $("#galleryGrid");
  if (!grid) return;

  grid.innerHTML = GALLERY.map(([name, file]) => `
    <figure class="gallery-item">
      <div class="gallery-photo">
        <img
          src="${imageURL(file)}"
          alt="${esc(name)}"
          loading="lazy"
          decoding="async"
        >
      </div>
      <figcaption>${esc(name)}</figcaption>
    </figure>
  `).join("");

  grid.querySelectorAll("img").forEach(img => {
    installImageRecovery(img, broken => {
      console.warn("Missing gallery image:", broken.src);
      broken.closest(".gallery-item")?.remove();
    });
  });
}

/* ==============================
   SOURCED REVIEW SUMMARIES
   Not quotations or live Google data.
============================== */

const GURU =
  "https://restaurantguru.com/Hao-Phong-Footscray";

const WANDERLOG =
  "https://wanderlog.com/place/details/3199639/hao-phong";

const BEAUTIHOST =
  "https://vic.beautihost.com/food/?q=hao+phong";

const REVIEWS = [
  ["Trinh Thuy Linh", 5,
   "Enjoyed the Bún Chả, its generous portions and the accompanying sauce.", GURU],
  ["Damon R", 5,
   "Praised the food and the restaurant as a reliable choice for a quick meal.", GURU],
  ["Campbell Harper", 5,
   "Appreciated the variety of Vietnamese and Chinese dishes and efficient service.", GURU],
  ["Rodelle Lee", 5,
   "Highlighted flavourful grilled pork, generous portions and value for money.", BEAUTIHOST],
  ["Chao tesque", 5,
   "Recommended the grilled pork vermicelli and the combination of meat and vegetables.", BEAUTIHOST],
  ["Jason", 4,
   "Liked the grilled pork but had some reservations about the accompaniments.", BEAUTIHOST],
  ["Linh N", 5,
   "Enjoyed dining with friends and appreciated the food and welcoming service.", WANDERLOG],
  ["Catherine K", 5,
   "Enjoyed the pork chop on broken rice and the prawn spring rolls.", WANDERLOG],
  ["Hunter A", 4,
   "Liked the grilled chicken on rice while noting some inconsistency in service.", WANDERLOG]
];

function renderReviews() {
  const track = $("#reviewTrack");
  if (!track) return;

  track.innerHTML = REVIEWS.map(([name, rating, summary, source]) => `
    <article class="review-card">
      <div class="review-stars" aria-label="${rating} of 5 stars">
        ${"★".repeat(rating)}${"☆".repeat(5-rating)}
      </div>

      <p class="review-summary">
        ${esc(summary)}
      </p>

      <div class="review-meta">
        <div>
          <strong>${esc(name)}</strong>
          <small>Public review summary</small>
        </div>
        <a href="${source}" target="_blank"
           rel="noopener noreferrer">Source ↗</a>
      </div>
    </article>
  `).join("");
}

/* ==============================
   GENERIC CAROUSEL

   Width is measured from actual cards,
   instead of assuming CSS percentages.
============================== */

function setupCarousel(trackId, prevId, nextId, positionId) {
  const track = document.getElementById(trackId);
  const prev = document.getElementById(prevId);
  const next = document.getElementById(nextId);
  const status = document.getElementById(positionId);

  if (!track || !prev || !next) return;

  function getStep() {
    const children = track.children;
    if (!children.length) return 0;

    if (children.length > 1) {
      return children[1].offsetLeft - children[0].offsetLeft;
    }

    return children[0].getBoundingClientRect().width;
  }

  function update() {
    const count = track.children.length;
    const step = getStep();

    const first = step
      ? Math.round(track.scrollLeft / step)
      : 0;

    const visible = Math.min(
      window.innerWidth <= 760 ? 1 :
      window.innerWidth <= 1080 ? 2 : 3,
      count
    );

    prev.disabled = track.scrollLeft <= 2;

    next.disabled =
      track.scrollLeft + track.clientWidth >=
      track.scrollWidth - 2;

    if (status && count) {
      const start = Math.min(first + 1, count);
      const end = Math.min(first + visible, count);

      status.textContent =
        `${String(start).padStart(2, "0")} — ` +
        `${String(end).padStart(2, "0")} / ` +
        String(count).padStart(2, "0");
    }
  }

  function move(direction) {
    const step = getStep();
    if (!step) return;

    track.scrollBy({
      left: direction * step,
      behavior: window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches ? "instant" : "smooth"
    });
  }

  prev.addEventListener("click", () => move(-1));
  next.addEventListener("click", () => move(1));

  track.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  track.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
  });

  requestAnimationFrame(update);
}

/* ==============================
   MENU.HTML — SINGLE CATEGORY VIEW
============================== */

function initMenuPage() {
  const tabs = $("#menuCategories");
  const search = $("#menuSearch");
  const results = $("#menuItems");
  const heading = $("#selectedCategoryTitle");
  const eyebrow = $("#categoryEyebrow");
  const count = $("#menuItemCount");
  const categoriesCount = $("#menuTotalCategories");
  const empty = $("#menuEmpty");
  const clear = $("#clearSearch");

  if (!tabs || !results) return;

  // Do not display a blank menu silently.
  if (!MENU.length) {
    heading.textContent = "Menu unavailable";
    results.innerHTML = `
      <p class="menu-error">
        Unable to load the menu.
        Check that menu-data.js is beside menu.html
        and is loaded before script.js.
      </p>
    `;
    categoriesCount.textContent = "Menu data not loaded";
    return;
  }

  categoriesCount.textContent =
    `${MENU.length} categories`;

  function findHashCategory() {
    const hash = decodeURIComponent(
      location.hash.slice(1)
    );

    return MENU.find(group =>
      slug(group.name) === hash ||
      (hash === "chef-specials" &&
       group.name === "Chef's Specials") ||
      (hash === "chef-s-specials" &&
       group.name === "Chef's Specials")
    );
  }

  let selected =
    findHashCategory()?.name ||
    "Chef's Specials";

  if (!MENU.some(g => g.name === selected)) {
    selected = MENU[0].name;
  }

  function drawTabs() {
    tabs.innerHTML = MENU.map(group => `
      <button
        type="button"
        class="${group.name === selected ? "active" : ""}"
        data-category="${esc(group.name)}"
        aria-pressed="${group.name === selected}">
        ${esc(group.name)}
      </button>
    `).join("");

    tabs.querySelectorAll("button").forEach(button => {
      button.addEventListener("click", () => {
        selected = button.dataset.category;
        search.value = "";

        history.replaceState(
          null,
          "",
          location.pathname + "#" + slug(selected)
        );

        drawTabs();
        drawItems();

        // Scroll the tabs, not the entire document.
        const scroller = tabs.parentElement;
        scroller.scrollTo({
          left: Math.max(0, button.offsetLeft - 30),
          behavior: "smooth"
        });
      });
    });
  }

  function itemHTML(item, category, showCategory) {
    return `
      <article class="menu-item">
        <div class="menu-item-main">
          <strong>
            ${item.number != null ? esc(item.number) + ". " : ""}
            ${esc(item.en || item.vi)}
          </strong>

          ${item.vi ? `<small lang="vi">${esc(item.vi)}</small>` : ""}
          ${item.zh ? `<small lang="zh">${esc(item.zh)}</small>` : ""}

          ${
            showCategory
              ? `<small class="search-category">${esc(category)}</small>`
              : ""
          }
        </div>

        <span class="menu-price">${esc(price(item.price))}</span>
      </article>
    `;
  }

  function drawItems() {
    const query = norm(search.value);
    const found = [];

    if (query) {
      // Searching includes every category.
      MENU.forEach(group => {
        group.items.forEach(item => {
          const searchable = norm([
            item.number,
            item.en,
            item.vi,
            item.zh,
            group.name
          ].join(" "));

          if (searchable.includes(query)) {
            found.push({ item, category: group.name });
          }
        });
      });
    } else {
      const group = MENU.find(g => g.name === selected);
      (group?.items || []).forEach(item => {
        found.push({ item, category: selected });
      });
    }

    heading.textContent = query
      ? "Search Results"
      : selected;

    eyebrow.textContent = query
      ? "SEARCHING ALL CATEGORIES"
      : "OUR SELECTION";

    count.textContent = `${found.length} ${
      found.length === 1 ? "item" : "items"
    }`;

    results.innerHTML = found.map(({item,category}) =>
      itemHTML(item, category, Boolean(query))
    ).join("");

    empty.hidden = found.length > 0;
  }

  search.addEventListener("input", drawItems);

  clear?.addEventListener("click", () => {
    search.value = "";
    drawItems();
    search.focus();
  });

  window.addEventListener("hashchange", () => {
    const match = findHashCategory();
    if (!match) return;

    selected = match.name;
    search.value = "";
    drawTabs();
    drawItems();
  });

  drawTabs();
  drawItems();

  // Show the selected tab on initial load.
  requestAnimationFrame(() => {
  const active = tabs.querySelector(".active");

  if (active) {
    const scroller = tabs.parentElement;
    scroller.scrollLeft = Math.max(
      0,
      active.offsetLeft - tabs.offsetLeft - 30
    );
  }
});
}

/* ==============================
   STARTUP + SELF-CHECK
============================== */

function start() {
  initNavigation();

  if (document.body.dataset.page === "home") {
    renderChefSpecials();
    renderGallery();
    renderReviews();

    setupCarousel(
      "chefTrack", "chefPrev", "chefNext", "chefPosition"
    );

    setupCarousel(
      "reviewTrack", "reviewPrev", "reviewNext", "reviewPosition"
    );

    const hero = document.querySelector(".hero-image img");
    if (hero) installImageRecovery(hero);
  }

  if (document.body.dataset.page === "menu") {
    initMenuPage();
  }

  const groupCount = MENU.length;
  const itemCount = MENU.reduce(
    (sum, group) => sum + group.items.length, 0
  );

  console.info("Hao Phong website check:", {
    page: document.body.dataset.page,
    categories: groupCount,
    items: itemCount,
    chefSpecials: getChefItems().length
  });

  if (groupCount && (groupCount !== 24 || itemCount !== 193)) {
    console.warn(
      "Expected 24 menu categories and 193 items. " +
      "Please check menu-data.js."
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
