/* --- KAIGAN FRUIT REPOSITORY & ENGINE v3.6 --- */

/**
 * 1. GLOBAL SETTINGS & SAFETY
 * Attaching to window prevents 'already declared' errors if scripts reload.
 */
if (typeof window.useJapanese === 'undefined') { window.useJapanese = true; }
if (typeof window.FRUIT_PLACEHOLDER === 'undefined') { window.FRUIT_PLACEHOLDER = "images/sing.png"; }

/**
 * 2. FRUIT DATA REPOSITORY
 * Classified by World Government standards.
 * Paths assume the HTML is in /devil_fruits/ and previews are in /devil_fruits/previews/
 */
const fruitDataRepository = {
    mythicalZoan: [
        { en: "Horse-Horse Fruit ~ Mythic Model: Bakotsu", jp: "Uma-Uma no Mi ~ Mythic Model: Bakotsu", link: "encyclopedia_bakotsu.html", img: "previews/bakotsu.gif" },
        { en: "Dog-Dog Fruit ~ Mythic Model: Fengxi", jp: "Inu-Inu no Mi ~ Mythic Model: Fengxi", link: "encyclopedia_fengxi.html", img: "previews/fengxi.gif" },
        { en: "Spider-Spider Fruit ~ Mythic Model: Gyuki", jp: "Kumo-Kumo no Mi ~ Mythic Model: Gyuki", link: "encyclopedia_gyuki.html", img: "previews/gyuki.gif" },
        { en: "Bird-Bird Fruit ~ Mythic Model: Itsumade", jp: "Tori-Tori no Mi ~ Mythic Model: Itsumade", link: "encyclopedia_itsumade.html", img: "previews/itsumade.gif" },
        { en: "Human-Human Fruit ~ Mythic Model: Sandworm", jp: "Hito-Hito no Mi ~ Mythic Model: Sandworm", link: "encyclopedia_sandworm.html", img: "previews/sandworm.gif" }
    ],
    ancientZoan: [
        { en: "Elephant-Elephant Fruit ~ Ancient Model: Mammoth", jp: "Zou-Zou no Mi ~ Ancient Model: Manmosu", link: "encyclopedia_mammoth.html", img: "previews/mammoth.gif" }
    ],
    logia: [
        { en: "Sand-Sand Fruit", jp: "Suna-Suna no Mi", link: "encyclopedia_sand.html", img: "previews/sand.gif" },
        { en: "Woods-Woods Fruit", jp: "Mori-Mori no Mi", link: "encyclopedia_woods.html", img: "previews/woods.gif" },
        { en: "Snow-Snow Fruit", jp: "Yuki-Yuki no Mi", link: "encyclopedia_snow.html", img: "previews/snow.gif" }
    ],
    parameciaBody: [
        { en: "Dice-Dice Fruit", jp: "Supa-Supa no Mi", link: "encyclopedia_dice.html", img: "previews/dice.gif" },
        { en: "Shadow-Shadow Fruit", jp: "Kage-Kage no Mi", link: "encyclopedia_shadow.html", img: "previews/shadow.gif" }
    ],
    parameciaSubstance: [
        { en: "Wax-Wax Fruit", jp: "Doru-Doru no Mi", link: "encyclopedia_wax.html", img: "previews/wax.gif" },
        { en: "Venom-Venom Fruit", jp: "Doku-Doku no Mi", link: "encyclopedia_venom.html", img: "previews/venom.gif" }
    ],
    parameciaEnv: [
        { en: "Mirror-Mirror Fruit", jp: "Mira-Mira no Mi", link: "encyclopedia_mirror.html", img: "previews/mirror.gif" },
        { en: "Op-Op Fruit", jp: "Ope-Ope no Mi", link: "encyclopedia_op.html", img: "previews/op.gif" }
    ],
    special: [
        { en: "Sing-Sing Fruit", jp: "Uta-Uta no Mi", link: "encyclopedia_sing.html", img: "previews/sing.gif" },
        { en: "Mochi-Mochi Fruit", jp: "Mochi-Mochi no Mi", link: "encyclopedia_mochi.html", img: "previews/mochi.gif" },
        { en: "Dark-Dark Fruit", jp: "Yami-Yami no Mi", link: "encyclopedia_dark.html", img: "previews/dark.gif" }
    ]
};

// Flattening logic for the carousel engine
const fruitData = [
    ...fruitDataRepository.mythicalZoan,
    ...fruitDataRepository.ancientZoan,
    ...fruitDataRepository.logia,
    ...fruitDataRepository.parameciaBody,
    ...fruitDataRepository.parameciaSubstance,
    ...fruitDataRepository.parameciaEnv,
    ...fruitDataRepository.special
];

/**
 * 3. INJECTION ENGINE
 * Builds the Infinite Arc Carousel at the top of the page.
 */
function injectFruitCarousel() {
    const container = document.getElementById('fruit-carousel-inject');
    if (!container) return;

    let carouselHTML = `<div class="fruit-carousel"><div class="carousel-track">`;
    const infiniteList = [...fruitData, ...fruitData]; 

    infiniteList.forEach(fruit => {
        const displayName = window.useJapanese ? fruit.jp : fruit.en;
        
        carouselHTML += `
            <a href="${fruit.link}" class="fruit-card">
                <img src="${fruit.img}" 
                     alt="${displayName}" 
                     onerror="this.onerror=null;this.src='${window.FRUIT_PLACEHOLDER}';">
                <span>${displayName}</span>
            </a>`;
    });

    carouselHTML += `</div></div>`;
    container.innerHTML = carouselHTML;

    if (typeof setupArcScrolling === "function") {
        setupArcScrolling();
    }
}

/**
 * 4. SYNC ENGINE (THE SCANNER)
 * Smart keyword matching for owner detection.
 * Works with arrays like ["Snow-Snow", "Yuki-Yuki"]
 */
function syncFruitOwner(fruitKey) {
    const display = document.getElementById('fruit-owner');
    const prefixDisplay = document.getElementById('acquisition-prefix');
    if (!display) return;

    const searchKey = fruitKey.toLowerCase().replace(/ fruit/gi, "").trim();

    const scanInterval = setInterval(() => {
        if (window.KaiganDatabase) {
            clearInterval(scanInterval);
            
            const owner = Object.values(window.KaiganDatabase).find(char => {
                if (!char.fruit || char.fruit === "n/a") return false;
                const dbFruits = Array.isArray(char.fruit) ? char.fruit.join("|").toLowerCase() : char.fruit.toLowerCase();
                return dbFruits.includes(searchKey) || searchKey.includes(dbFruits);
            });

            if (owner) {
                // Determine Prefix and Styling
                let prefix = "Eaten by:";
                const method = (owner.acquisition || "Eaten").toLowerCase();

                // Reset styles
                display.classList.remove('force-fed-glitch');
                
                if (method === "force-fed") {
                    prefix = "Force Fed to:";
                    display.classList.add('force-fed-glitch');
                } else if (method === "possession") {
                    prefix = "In Possession from:";
                }

                if (prefixDisplay) prefixDisplay.innerText = prefix;
                display.innerText = owner.name;
                display.style.opacity = "1";
            } else {
                if (prefixDisplay) prefixDisplay.innerText = "STATUS:";
                display.innerText = window.useJapanese ? "流通中 (In circulation)" : "In circulation";
                display.style.opacity = "0.5";
            }
        }
    }, 100); 
}

/**
 * 5. SCROLL ENGINE
 * Perspective-based horizontal wheel and infinite snapping.
 */
function setupArcScrolling() {
    const carousel = document.querySelector('.fruit-carousel');
    if (!carousel) return;

    carousel.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        carousel.scrollLeft += evt.deltaY * 1.5;
    });

    carousel.addEventListener('scroll', () => {
        const halfWidth = carousel.scrollWidth / 2;
        if (carousel.scrollLeft >= halfWidth) {
            carousel.scrollLeft = 1; 
        } else if (carousel.scrollLeft <= 0) {
            carousel.scrollLeft = halfWidth - 1;
        }
    });
}

// Initial Launch
window.addEventListener('DOMContentLoaded', injectFruitCarousel);