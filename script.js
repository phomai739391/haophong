"use strict";
/* Hao Phong V6.2 · restaurant data remains in menu-data.js; delivery photographs are mapped separately. */
const $ = (selector, root=document) => root.querySelector(selector);
const MENU = Array.isArray(window.HAO_MENU) ? window.HAO_MENU : [];
const esc = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[ch]);
const searchNorm = value => String(value ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/gi,"d").toLowerCase().trim();
const slug = value => value === "Chef's Specials" ? "chef-specials" : searchNorm(value).replace(/['’]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const price = value => { const s=String(value ?? "").trim(); return /^\d+(\.\d+)?$/.test(s) ? "$"+s : s; };
const imageURL = file => "images/" + String(file).split("/").map(encodeURIComponent).join("/");
const UBER_PHOTOS = Array.isArray(window.HAO_CONFIG?.uberPhotos) ? window.HAO_CONFIG.uberPhotos.filter(x => x && typeof x.file === "string" && /^uber\/[a-z0-9-]+\.jpg$/.test(x.file) && typeof x.url === "string" && x.url.startsWith("https://tb-static.uber.com/prod/image-proc/") && typeof x.alt === "string") : [];
const chefUberPhoto = name => UBER_PHOTOS.find(x => x.placement === "chef" && x.menuName === name);
const uberRemoteURL = file => UBER_PHOTOS.find(x => x.file === file)?.url || "";
const photoAttributes = (file,alt) => `src="${imageURL(file)}" alt="${esc(alt)}"${uberRemoteURL(file) ? ` data-remote-fallback="${esc(uberRemoteURL(file))}" referrerpolicy="no-referrer"` : ""} loading="lazy" decoding="async"`;
const CHEF_IMAGES = {
 "Bun cha":"Bun Cha.webp",
 "Pipi":"Pipi (clams), served with Chinese donut.webp",
 "Barramundi ( Hấp/ Rang muối)":"Steamed Barramundi in Ginger and Shallot.webp",
 "Lobster tail and noodle in XO sauce":"Lobster tail and noodle in XO sauce.webp",
 "Combo Lau Canh Chua Ca Kho":"Combo Sour Fish Soup Hot Pot + Braised Fish Clay Pot.webp"
};
const GALLERY = [
 ["Grilled pork chop with broken rice", "Grilled Pork Chop, Fried Egg, Pork Loaf & Shredded Pork on Broken Rice.webp"],
 ["Honey chicken with sesame", "Honey Chicken (in batter) with Sesame Seed Topping.webp"],
 ["Mongolian beef on a sizzling plate", "Mongolian Beef (Sizzling).webp"],
 ["Rare beef rice noodle soup", "Rare Beef Rice Noodle Soup.webp"],
 ["Sugar cane prawn with fine rice vermicelli", "Sugar Cane Prawn with Fine Rice Vermicelli.webp"],
 ["Braised duck with egg noodle soup", "Braised Duck with Egg Noodle Soup.webp"],
 ["Chicken rice noodle soup", "Chicken Rice Noodle Soup.webp"],
 ["Crispy skin chicken on tomato rice", "Crispy Skin Chicken on Tomato Rice.webp"],
 ["Diced beef cube on tomato rice", "Diced Beef Cube on Tomato Rice.webp"],
 ["Grilled chicken on rice", "Grilled Chicken on Rice.webp"],
 ["Grilled pork rice vermicelli", "Grilled Pork Rice Vermicelli.webp"],
 ["Grilled pork with coleslaw", "Grilled Pork with Coleslaw.webp"],
 ["Pork spring rolls", "Pork Spring Rolls.webp"],
 ["Prawn stuffed eggplant, capsicum and beancurd clay pot rice", "Prawn Meat Stuffed Eggplant, Capsicum & Beancurd Clay Pot Rice.webp"],
 ["Sweet and sour chicken", "Sweet & Sour Chicken (in Batter).webp"],
 ["Beef in black bean sauce clay pot rice", "Beef in Black Bean Sauce Clay Pot Rice.webp"],
 ["Chicken coleslaw with prawn crackers", "Chicken Coleslaw (with prawn crackers).webp"],
 ["Phở đặc biệt", "Pho Dac Biet.webp"]
];
// Public review summaries (NOT verbatim quotations). Sources checked in Nov 2026.
// For reviews where the overall star rating could not be independently confirmed, use null.
const REVIEWS = [
 {name:"Trinh Thuy Linh",stars:5,summary:"Enjoyed the Bún Chả portion, meat, vegetables and accompanying sauce.",source:"https://restaurantguru.com/Hao-Phong-Footscray",site:"Google · via Restaurant Guru"},
 {name:"Damon R",stars:5,summary:"Described the food as good, fast to arrive, and reliably satisfying.",source:"https://restaurantguru.com/Hao-Phong-Footscray",site:"Google · via Restaurant Guru"},
 {name:"Campbell Harper",stars:5,summary:"Praised the Vietnamese and Chinese variety, fresh flavours and efficient service.",source:"https://restaurantguru.com/Hao-Phong-Footscray",site:"Google · via Restaurant Guru"},
 {name:"Rodelle Lee",stars:5,summary:"Highlighted generous portions, well-grilled pork, crispy tofu and good value.",source:"https://aus.beautihost.com/vic/food/?q=hao+phong",site:"Google · via Beautihost"},
 {name:"Chao tesque",stars:5,summary:"Recommended the grilled pork vermicelli for its tender pork and fresh balance.",source:"https://aus.beautihost.com/vic/food/?q=hao+phong",site:"Google · via Beautihost"},
 {name:"Jason",stars:4,summary:"Enjoyed the grilled pork and Hanoi vermicelli, with mixed opinions on sides.",source:"https://aus.beautihost.com/vic/food/?q=hao+phong",site:"Google · via Beautihost"},
 {name:"Elodie S.",stars:null,summary:"Enjoyed the spring rolls and the generous sides, sauces and herbs that came with them.",source:"https://www.ubereats.com/au/store/hao-phong/3FVxYAN7X6yBj5SUnU7rew",site:"Uber Eats · 9 Mar 2024"},
 {name:"SARA F.",stars:null,summary:"Especially liked the spring rolls and fried rice, describing the meal enthusiastically.",source:"https://www.ubereats.com/au/store/hao-phong/3FVxYAN7X6yBj5SUnU7rew",site:"Uber Eats · 16 Sep 2024"},
 {name:"Naomi M.",stars:null,summary:"Appreciated the flavours, crisp texture and a lighter, less oily preparation.",source:"https://www.ubereats.com/au/store/hao-phong/3FVxYAN7X6yBj5SUnU7rew",site:"Uber Eats · 23 Aug 2024"},
 {name:"Fengning Z.",stars:null,summary:"Mentioned consistently generous portions and particularly liked the grilled chicken.",source:"https://www.ubereats.com/au/store/hao-phong/3FVxYAN7X6yBj5SUnU7rew",site:"Uber Eats · 16 May 2023"}
];
function placeholder() { return '<div class="photo-placeholder"><span class="placeholder-symbol" aria-hidden="true">✳</span><span>HAO PHONG</span><small>PHOTO TO COME</small></div>'; }
function onImageError(img) {
 // Prefer locally stored GitHub Pages asset; use the exact Uber CDN photo only
 // if it has not yet been downloaded. Never substitute another restaurant.
 img.addEventListener("error", () => {
  const remote = img.dataset.remoteFallback;
  if(remote && !img.dataset.remoteAttempted){
   img.dataset.remoteAttempted="1";
   img.src=remote;
   return;
  }
  const photo = img.parentElement;
  if(photo) photo.innerHTML = placeholder();
 });
}
function initNavigation(){
 const btn=$("#mobileToggle"), nav=$("#mainNav"); if(!btn || !nav)return;
 const close=()=>{nav.classList.remove("open");btn.setAttribute("aria-expanded","false");btn.setAttribute("aria-label","Open navigation");};
 btn.addEventListener("click",()=>{const open=nav.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));btn.setAttribute("aria-label",open?"Close navigation":"Open navigation");});
 nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",close));
 document.addEventListener("keydown",e=>{if(e.key==="Escape")close();});
 document.addEventListener("click",e=>{if(!nav.contains(e.target)&&!btn.contains(e.target))close();});
 window.addEventListener("resize",()=>{if(innerWidth>900)close();});
}
function getChefItems(){
 const group = MENU.find(g=>g.name==="Chef's Specials"); if(!group)return [];
 return [...group.items].sort((a,b)=>Number(Boolean(CHEF_IMAGES[b.en]||chefUberPhoto(b.en)))-Number(Boolean(CHEF_IMAGES[a.en]||chefUberPhoto(a.en))));
}
function renderChef(){
 const track=$("#chefTrack");if(!track)return;
 track.innerHTML=getChefItems().map((item,i)=>{
  const uber = chefUberPhoto(item.en);
  const file=CHEF_IMAGES[item.en] || uber?.file;
  const visual=file?`<img ${photoAttributes(file,uber?.alt||item.en)} width="900" height="700">`:placeholder();
  return `<article class="chef-card"><div class="chef-photo">${visual}</div><div class="chef-detail"><div><p class="dish-index">CHEF'S SPECIAL · ${String(i+1).padStart(2,"0")}</p><h3>${esc(item.en)}</h3></div><strong class="chef-price">${esc(price(item.price))}</strong></div></article>`;
 }).join("");
 track.querySelectorAll("img").forEach(onImageError);
}
function renderGallery(){
 const grid=$("#galleryGrid");if(!grid)return;
 const approved=Array.isArray(window.HAO_CONFIG?.approvedGallery) ? window.HAO_CONFIG.approvedGallery.filter(entry => entry && typeof entry.file==="string" && /^[\w .()\-]+\.webp$/i.test(entry.file) && typeof entry.alt==="string" && entry.alt.trim()) : [];
 const galleryUber=UBER_PHOTOS.filter(x=>x.placement === "gallery" && !GALLERY.some(([label]) => searchNorm(label)===searchNorm(x.alt)));
 const entries=[...GALLERY.map(([label,file])=>({label,alt:label,file})),...galleryUber.map(x=>({label:x.title||x.alt,alt:x.alt,file:x.file})),...approved.map(x=>({label:x.alt,alt:x.alt,file:"approved/"+x.file}))];
 const totalLabel=$("#galleryTotal"); if(totalLabel)totalLabel.textContent=`${GALLERY.length} ORIGINAL PHOTOS · ${galleryUber.length+approved.length} ADDITIONAL RESTAURANT PHOTOS`;
 grid.innerHTML=entries.map(({label,alt,file},index)=>`<figure class="gallery-item"><div class="gallery-photo"><img ${photoAttributes(file,alt)}></div><figcaption><span>${String(index+1).padStart(2,"0")}</span>${esc(label)}</figcaption></figure>`).join("");
 grid.querySelectorAll("img").forEach(onImageError);
}
function renderReviews(){
 const track=$("#reviewTrack");if(!track)return;
 track.innerHTML=REVIEWS.map((review,i)=>`<article class="review-card"><div class="review-top"><span>${String(i+1).padStart(2,"0")} / GUEST NOTES</span>${review.stars ? `<span class="review-stars" aria-label="${review.stars} out of 5 stars">${"★".repeat(review.stars)}${"☆".repeat(5-review.stars)}</span>`:""}</div><p class="review-summary">${esc(review.summary)}</p><div class="review-bottom"><div><strong>${esc(review.name)}</strong><small>${esc(review.site)}</small></div><a href="${esc(review.source)}" rel="noopener noreferrer" target="_blank" aria-label="View source for review by ${esc(review.name)}">View source ↗</a></div></article>`).join("");
}
/* Optional live Google Place Reviews. Static summaries always work without a key. */
function initGoogleReviews(){
 const button=$("#liveReviewsToggle"), panel=$("#googleLiveReviews"), staticArea=$("#staticReviews"), controls=$("#reviewControls");
 const key=String(window.HAO_CONFIG?.googleMapsApiKey||"").trim();
 if(!key||!button||!panel||!staticArea) return;
 button.hidden=false;
 let active=false;
 let loaded=false;
 function showStatic(){active=false;staticArea.hidden=false;panel.hidden=true;if(controls)controls.hidden=false;button.textContent="View live Google reviews ↗";button.disabled=false;}
 function loadMaps(){
  if(loaded) return Promise.resolve();
  return new Promise((resolve,reject)=>{
   if(window.google?.maps?.importLibrary){loaded=true;resolve();return;}
   let done=false;
   const timeout=setTimeout(()=>finish(new Error("Google Maps did not respond")),14000);
   function finish(error){if(done)return;done=true;clearTimeout(timeout);delete window.haoPlacesReady;error?reject(error):resolve();}
   window.haoPlacesReady=()=>{loaded=true;finish(null);};
   const script=document.createElement("script");
   script.src="https://maps.googleapis.com/maps/api/js?key="+encodeURIComponent(key)+"&v=weekly&loading=async&libraries=places&callback=haoPlacesReady";
   script.async=true;script.onerror=()=>finish(new Error("Google Maps script is blocked"));
   document.head.append(script);
  });
 }
 button.addEventListener("click",async()=>{
  if(active){showStatic();return;}
  button.disabled=true;button.textContent="Loading Google reviews…";
  try{
   await loadMaps();
   await google.maps.importLibrary("places");
   if(!window.customElements)throw new Error("Place Details is unsupported in this browser");
   panel.innerHTML=`<gmp-place-details class="google-place-widget"><gmp-place-details-place-request place="ChIJSXFuHJJd1moR5nXdBhNjEos"></gmp-place-details-place-request><gmp-place-name></gmp-place-name><gmp-place-rating></gmp-place-rating><gmp-place-reviews></gmp-place-reviews><gmp-place-attribution></gmp-place-attribution></gmp-place-details>`;
   await Promise.race([customElements.whenDefined("gmp-place-details"),new Promise((_,reject)=>setTimeout(()=>reject(new Error("Google Place Details unavailable")),11000))]);
   active=true;panel.hidden=false;staticArea.hidden=true;if(controls)controls.hidden=true;
   button.textContent="View selected guest notes ↗";button.disabled=false;
  }catch(err){showStatic();console.warn("Official Google review integration unavailable:",err);panel.innerHTML='<p class="google-widget-error">Live Google reviews could not be loaded. The verified guest notes remain available above. <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/?q=place_id:ChIJSXFuHJJd1moR5nXdBhNjEos">Read reviews on Google Maps ↗</a></p>';panel.hidden=false;}
 });
}

function setupCarousel(trackID,prevID,nextID,statusID){
 const track=document.getElementById(trackID),prev=document.getElementById(prevID),next=document.getElementById(nextID),status=document.getElementById(statusID);
 if(!track||!prev||!next)return;
 const step=()=>{if(track.children.length<2)return track.firstElementChild?.getBoundingClientRect().width||0;return track.children[1].offsetLeft-track.children[0].offsetLeft;};
 const update=()=>{
  const max=Math.max(0,track.scrollWidth-track.clientWidth);
  prev.disabled=track.scrollLeft<=2;next.disabled=track.scrollLeft>=max-2;
  const perView=window.innerWidth<=640?1:window.innerWidth<=1050?2:3;
  const i=step()?Math.round(track.scrollLeft/step()):0;
  if(status)status.textContent=`${String(Math.min(i+1,track.children.length)).padStart(2,"0")}–${String(Math.min(i+perView,track.children.length)).padStart(2,"0")} / ${String(track.children.length).padStart(2,"0")}`;
 };
 const move=(dir)=>{const width=step();if(width)track.scrollBy({left:dir*width,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});};
 prev.addEventListener("click",()=>move(-1));next.addEventListener("click",()=>move(1));
 track.addEventListener("scroll",update,{passive:true});window.addEventListener("resize",update);
 track.addEventListener("keydown",e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();move(e.key==="ArrowRight"?1:-1);}});
 requestAnimationFrame(update);
}
function initMenuPage(){
 const tabs=$("#menuCategories"),search=$("#menuSearch"),results=$("#menuItems"),heading=$("#selectedCategoryTitle"),eyebrow=$("#categoryEyebrow"),count=$("#menuItemCount"),catCount=$("#menuTotalCategories"),itemCount=$("#menuTotalItems"),empty=$("#menuEmpty"),clear=$("#clearSearch");
 if(!tabs||!search||!results)return;
 if(!MENU.length){heading.textContent="Menu unavailable";results.textContent="Unable to load menu-data.js. Please contact the restaurant.";catCount.textContent="Data unavailable";return;}
 catCount.textContent=`${MENU.length} categories`;itemCount.textContent=`${MENU.reduce((n,g)=>n+g.items.length,0)} items`;
 const fromHash=()=>{let hash="";try{hash=decodeURIComponent(location.hash.slice(1));}catch{hash=location.hash.slice(1);}return MENU.find(g=>slug(g.name)===hash||((hash==="chef-specials"||hash==="chef-s-specials")&&g.name==="Chef's Specials"));};
 let selected=fromHash()?.name||"Chef's Specials";
 if(!MENU.some(g=>g.name===selected))selected=MENU[0].name;
 function drawTabs(){
  tabs.innerHTML=MENU.map(g=>`<button type="button" class="${g.name===selected?"active":""}" data-category="${esc(g.name)}" aria-pressed="${g.name===selected}" >${esc(g.name)}</button>`).join("");
  tabs.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{selected=b.dataset.category;search.value="";history.replaceState(null,"",location.pathname+location.search+"#"+slug(selected));drawTabs();drawItems();scrollTab(false); }));
 }
 function scrollTab(initial){const active=tabs.querySelector(".active");if(active){active.scrollIntoView({block:"nearest",inline:"nearest",behavior:initial?"instant":"smooth"});}}
 function itemHTML(item,category,showCategory){
  return `<article class="menu-item"><div class="menu-item-main"><strong>${item.number!=null?`<span class="item-number">${esc(item.number)}.</span> `:""}${esc(item.en||item.vi)}</strong>${item.vi?`<small lang="vi">${esc(item.vi)}</small>`:""}${item.zh?`<small lang="zh-Hant" class="chinese-name">${esc(item.zh)}</small>`:""}${showCategory?`<small class="search-category">${esc(category)}</small>`:""}</div><span class="menu-price">${esc(price(item.price))}</span></article>`;
 }
 function drawItems(){
  const q=searchNorm(search.value);const found=[];
  if(q){MENU.forEach(g=>g.items.forEach(item=>{if(searchNorm([item.number,item.en,item.vi,item.zh,g.name].join(" ")).includes(q))found.push({item,category:g.name});}));}
  else MENU.find(g=>g.name===selected)?.items.forEach(item=>found.push({item,category:selected}));
  heading.textContent=q?"Search results":selected;eyebrow.textContent=q?"SEARCHING ALL CATEGORIES":"OUR SELECTION";
  count.textContent=`${found.length} ${found.length===1?"item":"items"}`;
  results.innerHTML=found.map(({item,category})=>itemHTML(item,category,Boolean(q))).join("");
  empty.hidden=found.length>0;
 }
 search.addEventListener("input",drawItems);
 clear?.addEventListener("click",()=>{search.value="";drawItems();search.focus();});
 window.addEventListener("hashchange",()=>{const match=fromHash();if(match){selected=match.name;search.value="";drawTabs();drawItems();requestAnimationFrame(()=>scrollTab(true));}});
 drawTabs();drawItems();requestAnimationFrame(()=>scrollTab(true));
}
function start(){
 initNavigation();
 if(document.body.dataset.page==="home"){
  renderChef();renderGallery();renderReviews();initGoogleReviews();
  setupCarousel("chefTrack","chefPrev","chefNext","chefPosition");
  setupCarousel("reviewTrack","reviewPrev","reviewNext","reviewPosition");
 }
 if(document.body.dataset.page==="menu")initMenuPage();
 const total=MENU.reduce((n,g)=>n+g.items.length,0);
 if(MENU.length!==24||total!==193||getChefItems().length!==13){console.error("Menu integrity check failed",{categories:MENU.length,items:total,specials:getChefItems().length});}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start);else start();
