/* --- KAIGAN STATS & MASTERY ENGINE v1.8 --- */

let fruitLangJP = false; 
window.toggleFruitLang = function() {
    fruitLangJP = !fruitLangJP;
    window.renderRadar(); 
};

function getActiveChar() {
    const charId = document.body.getAttribute('data-char-id');
    return window.KaiganDatabase ? window.KaiganDatabase[charId] : null;
}

window.calculateFinalStats = function(char) {
    const tribe = window.TribeLibrary[char.tribe];
    if (!tribe) return null;

    let stats = {};

    // 1. Auto-discover base stats from TribeLibrary (e.g., baseStrength -> strength)
    Object.keys(tribe).forEach(key => {
        if (key.startsWith("base")) {
            const statName = key.replace("base", "").toLowerCase();
            stats[statName] = tribe[key];
        }
    });

    // 2. Apply Trait bonuses (The logic we perfected yesterday)
    const allTraitIds = [
        ...(char.minkTraits || []), 
        ...(char.traits || []), 
        ...(char.pTrait ? [char.pTrait] : []), 
        ...(char.sTrait ? [char.sTrait] : [])
    ];

    allTraitIds.forEach(tid => {
        const trait = window.TraitLibrary[tid];
        if (trait && trait.bonuses) {
            trait.bonuses.forEach(b => {
                // Now works for ANY stat defined in your tribe library
                if (stats[b.stat] !== undefined) {
                    if (b.op === "add") stats[b.stat] += b.val;
                    if (b.op === "mult") stats[b.stat] *= b.val;
                }
            });
        }
    });

    return stats;
};

function buildBlockBar(level, color = "#BB86FC", max = 5) {
    let blocks = "";
    for (let i = 1; i <= max; i++) blocks += (i <= level) ? "▰" : "▱";
    return `<span style="color: ${color}; letter-spacing: 2px;">${blocks}</span>`;
}

window.renderTechniques = function() {
    const charId = document.body.getAttribute('data-char-id');
    const char = getActiveChar(); 
    const container = document.getElementById('tech-list-container');
    const library = window.TechLibrary;
    
    // Safety check: Exit if core components are missing
    if (!char || !container || !library || !library[charId]) {
        if (container) container.innerHTML = "<p style='color:#444; text-align:center;'>[ NO DATA CONNECTED ]</p>";
        return;
    }

    const charTechData = library[charId];
    
    // AUTO-SYNC: Grab from database array, or pull all from library branch
    const techKeys = (char.techniques && char.techniques.length > 0) 
        ? char.techniques 
        : Object.keys(charTechData);

    // MAP & SORT: Convert keys to data objects and sort by numerical id
    const sortedTechs = techKeys
        .map(key => charTechData[key])
        .filter(t => t !== undefined)
        .sort((a, b) => (parseFloat(a.id) || 99) - (parseFloat(b.id) || 99));

    let html = "";
    sortedTechs.forEach(tech => {
        const themeColor = char.color || "var(--accent-color)";
        const hasLyrics = !!tech.lyrics;
        // Define the mapping
        const rankMap = { 'F': 0, 'D': 1, 'C': 2, 'B': 3, 'A': 4, 'S': 5 };

        // Use the map to set the count, defaulting to 3 if the rank isn't found
        const blockCount = rankMap[tech.rank] || 0;
        const ratio = tech.aspect || "16/9";

        html += `
        <div class="tech-row" style="display: flex; align-items: stretch; border: 1px solid #222; background: #111; margin-bottom: 12px; overflow: hidden; width: 100%; min-height: 180px;">
            
            <div style="flex: 0 0 auto; height: auto; aspect-ratio: ${ratio}; background: #000; border-right: 1px solid #222; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;">
                ${tech.gif ? 
                    `<img src="${tech.gif}" style="width:100%; height:100%; object-fit:cover;">` : 
                    `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0.2;">
                        <div style="font-size: 1.5em; margin-bottom: 5px;">📡</div>
                        <div style="font-family: 'Special Elite'; font-size: 0.55em; letter-spacing: 2px;">NO SIGNAL [${ratio.replace('/',':')}]</div>
                    </div>`
                }
                <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03)); background-size: 100% 2px, 3px 100%; pointer-events: none;"></div>
            </div>
            
            <div style="flex: 1; padding: 20px; display: flex; flex-direction: column; justify-content: center; min-width: 250px;">
                <div style="text-align: center; margin-bottom: 8px;">
                    <div style="font-family: 'Special Elite'; font-size: 1.4em; color: #fff; margin-bottom: 2px;">${tech.name || ''}</div>
                    
                    <div style="font-family: 'Special Elite'; font-size: 0.9em; color: #666; letter-spacing: 2px;">[ ${tech.jpName} ]</div>
                    
                    <div style="font-size: 0.65em; color: #FFFFFF55; text-transform: uppercase; letter-spacing: 3px; margin-top: 5px;">⚓ ${tech.type} ⚓</div>
                </div>
                
                <p style="font-size: 0.85em; color: #aaa; text-align: center; line-height: 1.5; margin: 8px 0; font-family: sans-serif;">${tech.desc}</p>
                
                <div style="text-align: center; font-family: 'Special Elite'; margin-top: 8px;">
                    ${typeof buildBlockBar === 'function' ? buildBlockBar(blockCount, themeColor) : '▰▰▰'} 
                    <span style="color: var(--accent-color); font-weight: bold;">[${tech.rank}] [${tech.multiplier}]</span><br>
                    <div style="color: #555; font-size: 0.75em; letter-spacing: 1px; margin-top: 4px;">[ ${tech.tags ? tech.tags.join(' , ') : ''} ]</div>
                </div>
            </div>

            ${hasLyrics ? `
            <div style="flex: 0 0 auto; min-width: 150px; border-left: 2px solid var(--accent-color); background: #080808; padding: 15px; display: flex; flex-direction: column; justify-content: center; font-family: 'Special Elite'; line-height: 1.1;">
                ${tech.lyrics.runes.map((rune, i) => `
                    <div style="margin-bottom: 10px; text-align: right; white-space: nowrap;">
                        <div style="color: #444; font-size: 0.55em; text-transform: uppercase;">${tech.lyrics.pronunciation[i]}</div>
                        <div style="color: var(--accent-color); font-size: 1em; margin: 1px 0;">${rune}</div>
                        <div style="color: #666; font-size: 0.65em; font-style: italic;">${tech.lyrics.translation[i]}</div>
                    </div>
                `).join('')}
            </div>` : ''}
        </div>`;
    });

    container.innerHTML = html;
};

window.renderRadar = function() {
    const char = getActiveChar();
    const container = document.getElementById('radar-container');
    if (!char || !container) return;

    // Trigger the technique render alongside the radar
    window.renderTechniques();

    // 1. RADAR CHART
    if (container.innerHTML === '') {
        const targetCrew = char.crew || "Mellow Pirates";
        const data = Object.values(window.KaiganDatabase)
            .filter(c => c.crew === targetCrew)
            .map(c => ({ x: c.name, value: parseInt(c.dki) || 0 }));

        const chart = anychart.radar();
        chart.data(data);
        const maxCrewDKI = Math.max(...data.map(d => d.value));
        const ceiling = Math.ceil(maxCrewDKI / 500) * 500 || 2500;
        chart.yScale().minimum(0).maximum(ceiling).ticks({'interval': ceiling / 5});
        chart.container('radar-container').draw();
    }

    const themeColor = char.color || "#BB86FC";
    const currentDKI = parseInt(char.dki) || 0;
    const dkiDisplay = document.getElementById('display-doriki');
    if (dkiDisplay) dkiDisplay.innerText = currentDKI.toLocaleString().replace(/,/g, "'");

    // --- RANK LOGIC (F1 to S5) ---
    let min = 0, max = 10, rank = "F1";
    if (currentDKI >= 4000001)      { min = 4000001; max = 5000000; rank = "S5"; }
    else if (currentDKI >= 3000001) { min = 3000001; max = 4000000; rank = "S4"; }
    else if (currentDKI >= 2000001) { min = 2000001; max = 3000000; rank = "S3"; }
    else if (currentDKI >= 1000001) { min = 1000001; max = 2000000; rank = "S2"; }
    else if (currentDKI >= 500001)  { min = 500001;  max = 1000000; rank = "S1"; }
    else if (currentDKI >= 400001)  { min = 400001;  max = 500000;  rank = "A5"; }
    else if (currentDKI >= 300001)  { min = 300001;  max = 400000;  rank = "A4"; }
    else if (currentDKI >= 200001)  { min = 200001;  max = 300000;  rank = "A3"; }
    else if (currentDKI >= 100001)  { min = 100001;  max = 200000;  rank = "A2"; }
    else if (currentDKI >= 50001)   { min = 50001;   max = 100000;  rank = "A1"; }
    else if (currentDKI >= 40001)   { min = 40001;   max = 50000;   rank = "B5"; }
    else if (currentDKI >= 30001)   { min = 30001;   max = 40000;   rank = "B4"; }
    else if (currentDKI >= 20001)   { min = 20001;   max = 30000;   rank = "B3"; }
    else if (currentDKI >= 10001)   { min = 10001;   max = 20000;   rank = "B2"; }
    else if (currentDKI >= 5001)    { min = 5001;    max = 10000;   rank = "B1"; }
    else if (currentDKI >= 4001)    { min = 4001;    max = 5000;    rank = "C5"; }
    else if (currentDKI >= 3001)    { min = 3001;    max = 4000;    rank = "C4"; }
    else if (currentDKI >= 2001)    { min = 2001;    max = 3000;    rank = "C3"; }
    else if (currentDKI >= 1001)    { min = 1001;    max = 2000;    rank = "C2"; }
    else if (currentDKI >= 501)     { min = 501;     max = 1000;    rank = "C1"; }
    else if (currentDKI >= 401)     { min = 401;     max = 500;     rank = "D5"; }
    else if (currentDKI >= 301)     { min = 301;     max = 400;     rank = "D4"; }
    else if (currentDKI >= 201)     { min = 201;     max = 300;     rank = "D3"; }
    else if (currentDKI >= 101)     { min = 101;     max = 200;     rank = "D2"; }
    else if (currentDKI >= 51)      { min = 51;      max = 100;     rank = "D1"; }
    else if (currentDKI >= 41)      { min = 41;      max = 50;      rank = "F5"; }
    else if (currentDKI >= 31)      { min = 31;      max = 40;      rank = "F4"; }
    else if (currentDKI >= 21)      { min = 21;      max = 30;      rank = "F3"; }
    else if (currentDKI >= 11)      { min = 11;      max = 20;      rank = "F2"; }
    else                            { min = 1;       max = 10;      rank = "F1"; }

    const rankLabel = document.getElementById('display-tier');
    if (rankLabel) rankLabel.innerText = rank;
    
    const progressBar = document.getElementById('tier-progress-fill');
    if (progressBar) {
        const progress = ((currentDKI - min) / (max - min)) * 100;
        progressBar.style.width = Math.min(progress, 100) + "%";
        progressBar.style.background = themeColor;
    }

    // 3.3 Mastery & Haki Injection
    const masteryList = document.getElementById('dynamic-mastery-list');
    if (masteryList) {
        let html = `<div id="mastery-haki-wrapper" style="display: flex; flex-wrap: wrap; gap: 20px; width: 100%; align-items: flex-start;">`;

        // --- TOP-LEFT: MASTERIES ---
        html += `<div class="mastery-column" style="flex: 1; min-width: 250px;">`;
        const combined = [
            ...(Array.isArray(char.profession) ? char.profession : []),
            ...(Array.isArray(char.fighting_style) ? char.fighting_style : [])
        ];

        combined.slice(0, 4).forEach(([name, tier]) => {
            html += `<div style="margin-bottom: 12px;"><span style="color: #FFFFFF55; font-size: 0.8em; text-transform: uppercase;">Mastery Slot</span><br><span style="color: #fff;">${name}:</span> ${buildBlockBar(tier, themeColor)}</div>`;
        });

        for (let i = 0; i < (4 - combined.length); i++) {
            html += `<div style="margin-bottom: 12px; opacity: 0.3;"><span style="color: #FFFFFF55; font-size: 0.8em; text-transform: uppercase;">Open Mastery Slot</span><br><span style="color: #666;">[ EMPTY ]</span> ${buildBlockBar(0, "#444")}</div>`;
        }
        html += `</div>`; // Close Mastery Column

        // --- TOP-RIGHT: HAKI ---
        const haki = char.haki || { armament: 0, observation: 0, conquerors: 0 };
        html += `<div class="haki-column" style="flex: 1; min-width: 200px; border-left: 1px solid #333; padding-left: 20px;">`;
        const hList = [["Armament Haki", haki.armament], ["Observation Haki", haki.observation], ["Conqueror's Haki", haki.conquerors]];
        hList.forEach(([label, val]) => {
            html += `<div style="margin-bottom: 15px;"><span style="color: #FFFFFF55; font-size: 0.8em; text-transform: uppercase;">${label}</span><br>${buildBlockBar(val, themeColor)}</div>`;
        });
        html += `</div>`; // Close Haki Column

        // --- BOTTOM: DEVIL FRUIT (Full Width) ---
        html += `<div class="fruit-full-width" style="flex: 0 0 100%; margin-top: 20px; padding-top: 15px; border-top: 1px dashed #444;">`;
        if (char.fruit && char.fruit !== "n/a") {
            const isArray = Array.isArray(char.fruit);
            const fruitName = isArray ? (fruitLangJP ? char.fruit[1] : char.fruit[0]) : char.fruit;
            const suffix = fruitLangJP ? " no Mi" : " Fruit";
            const fruitTier = char.fruit_tier || 0;
            const desire = char.fruit_desire || 0;
            
            html += `
                <div style="margin-bottom: 10px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: #FFFFFF55; font-size: 0.8em; text-transform: uppercase;">Devil Fruit Connection</span>
                        <button onclick="toggleFruitLang()" style="background:none; border:1px solid #444; color:#666; font-size:0.55em; cursor:pointer; padding:1px 4px; border-radius:2px;">EN/JP</button>
                    </div>
                    <span style="color: #fff; display:block; margin-top:5px;">${fruitName}${suffix}:</span> ${buildBlockBar(fruitTier, themeColor)}
                    <div style="width: 100%; height: 4px; background: #000; margin-top: 10px; border-radius: 2px;">
                        <div style="width: ${desire}%; height: 100%; background: ${themeColor}; box-shadow: 0 0 10px ${themeColor};"></div>
                    </div>
                    <div style="font-size: 0.7em; color: ${themeColor}; margin-top: 6px; text-align: right;">DESIRE: ${desire}%</div>
                </div>`;
        } else {
            html += `<div style="opacity: 0.3;"><span style="color: #FFFFFF55; font-size: 0.8em; text-transform: uppercase;">Devil Fruit Slot</span><br><span style="color: #666;">[ NO ABILITY DETECTED ]</span></div>`;
        }
        html += `</div>`; // Close Fruit Row

        html += `</div>`; // Close Flex Wrapper
        masteryList.innerHTML = html;
    }
};

window.onload = function() {
    const charId = document.body.getAttribute('data-char-id');

    // 1. Data/Physiology Engine First (Must be ready before UI components)
    if (typeof loadPhysiologyModule === "function") loadPhysiologyModule();
    if (typeof window.injectPhysiologyUnified === "function") window.injectPhysiologyUnified();

    // 2. UI Components Second (These depend on the data above)
    if (typeof injectBio === "function") injectBio();
    if (typeof window.renderRadar === "function") window.renderRadar();
    if (typeof window.renderTechniques === "function") window.renderTechniques();
    if (typeof injectInventory === "function") injectInventory();

    // 3. Fighting Style (The most likely to fail due to timing)
    if (typeof injectFightingStyle === "function" && charId) {
        // We use a tiny delay (50ms) to ensure the container is fully rendered by the DOM
        setTimeout(() => {
            try {
                injectFightingStyle(charId);
            } catch (e) {
                console.error("Fighting Style failed to load:", e);
            }
        }, 50);
    }
};

window.injectFightingStyle = function() {
    const fightContainer = document.getElementById('dynamic-fight-inject');
    const char = getActiveChar();
    
    if (!fightContainer || !char || !char.fighting_style) return;

    // 1. Normalize data to support single-bracket AND double-bracket formats
    let styles = Array.isArray(char.fighting_style) ? char.fighting_style : [];
    
    let finalHTML = "";
    
    styles.forEach((entry) => {
        // This line handles the data format: works for ["Name", 3] and [["Name", 3]]
        const [name, tier] = (Array.isArray(entry) && Array.isArray(entry[0])) ? entry[0] : (Array.isArray(entry) ? entry : [entry, 0]);
        
        const info = window.FightingLibrary ? window.FightingLibrary[name] : null;
        if (!info) return;

        // 2. Build the full data display
        finalHTML += `
            <div style="background: #1A1A1A; border: 1px solid #2C2C2C; padding: 25px; border-radius: 4px; margin-bottom: 20px;">
                <h1 style="font-family: 'Special Elite'; color: #BB86FC; border-bottom: 2px solid #BB86FC; padding-bottom: 10px;">
                    ⬤ ${name.toUpperCase()}
                </h1>
                <p style="text-align: right; font-style: italic; color: #FFFFFF55;">(${info.jp || 'N/A'})</p>
                <div style="background: #121212; border-left: 4px solid #BB86FC; padding: 15px; margin: 20px 0;">
                    <p>${info.desc || 'No description available.'}</p>
                </div>
                <h2 style="font-family: 'Special Elite'; color: #fff; text-decoration: underline;">𝐓𝐎𝐎𝐋𝐒</h2>
                <ul style="list-style:none; padding-left:0;">
                    ${info.tools ? info.tools.map(t => `<li style="color:#BB86FC;">◇ ${t}</li>`).join('') : '<li>No tools listed.</li>'}
                </ul>
                <h2 style="font-family: 'Special Elite'; color: #fff; text-decoration: underline; margin-top:20px;">𝐓𝐈𝐄𝐑 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒𝐈𝐎𝐍</h2>
                <div style="font-size: 0.9em; line-height: 1.8;">
                    ${info.tiers ? info.tiers.map((t, i) => `
                        <p><strong style="color: ${i+1 <= tier ? '#BB86FC' : '#666'}">${i+1 <= tier ? '◈' : '◇'} Tier ${i+1} (${t.name}):</strong> 
                        <br><span style="color: #FFFFFF55; padding-left: 20px;">${t.desc || ''}</span>
                        ${t.perks ? t.perks.map(p => `<br><span style="color: #FFFFFF55; padding-left: 20px;">↳ ${p}</span>`).join('') : ''}
                        </p>
                    `).join('') : 'No tier data.'}
                </div>
            </div>`;
    });

    fightContainer.innerHTML = finalHTML;
};

function injectInventory() {
    const charId = document.body.getAttribute('data-char-id');
    const char = window.KaiganDatabase[charId];
    const container = document.getElementById('dynamic-inventory-inject');
    
    if (!char || !char.inventory || !container) return;

    const groupedItems = {};
    char.inventory.forEach(invItem => {
        const itemId = typeof invItem === 'string' ? invItem : invItem.id;
        const item = window.InventoryLibrary[itemId];
        if (!item) return;
        
        if (!groupedItems[item.category]) groupedItems[item.category] = [];
        groupedItems[item.category].push({ ...item, ...invItem });
    });

    let html = '';
    for (const [category, items] of Object.entries(groupedItems)) {
        html += '<div style="background: #6D9E73; color: #fff; text-align: center; font-family: \'Special Elite\'; padding: 5px; letter-spacing: 5px; font-weight: bold; margin-bottom: 2px;">' + category.toUpperCase() + '</div>';
        
        items.forEach(item => {
            const isSnail = item.name.toLowerCase().includes("snail");
            
            html += `
            <table class="tech-table" style="width: 100%; border-collapse: collapse; background: #1A1A1A; border: 1px solid #2C2C2C; margin-bottom: 20px;">
                <tr>
                    <td style="width: 250px; height: 150px; background: #000 url('${item.img}') center / auto 100% no-repeat; border: 1px solid #2C2C2C;"></td>
                    <td style="padding: 15px; border: 1px solid #2C2C2C; vertical-align: top;">
                        <div style="text-align: center; margin-bottom: 10px;">
                            <span style="font-family: 'Special Elite'; font-size: 1.2em; color: #fff;">${item.name}</span><br>
                            <span style="color: #FFFFFF55; font-size: 0.8em;">⚓ (${item.type}) ⚓</span>
                        </div>
                        <p style="font-size: 0.85em; margin-left: 10px; line-height: 1.4;">${item.desc}</p>
                        ${item.customStats ? '<div style="text-align: center; margin-top: 10px;"><span style="color: #BB86FC; font-weight: bold;">' + item.customStats + '</span></div>' : ''}
                        ${isSnail && char.tsNumber ? '<div style="text-align: center; margin-top: 10px; font-family: \'Special Elite\'; color: #BB86FC;">ID: ' + char.tsNumber + '</div>' : ''}
                    </td>
                </tr>
            </table>`;
        });
    }
    container.innerHTML = html;
};

/**
 * Physiology Engine - Automated Tribe/Trait Injector
 * Handles Tribe Data, Mink Animal Passives, and General Traits.
 */

window.physiologyLoaded = false; // The lock

function loadPhysiologyModule() {
    // If it has already run, stop immediately!
    if (window.physiologyLoaded) return; 

    if (typeof window.injectPhysiologyUnified === "function") {
        window.injectPhysiologyUnified();
    }
    if (typeof window.injectTraitData === "function") {
        window.injectTraitData();
    }

    window.physiologyLoaded = true; // Lock the door so it can't run again
};

window.injectPhysiologyUnified = function() {
    const char = getActiveChar();
    const container = document.getElementById('unified-physiology-container');
    if (!char || !container || !window.TribeLibrary) return;

    const tribe = window.TribeLibrary[char.tribe];
    if (!tribe) return;

    // 1. Math Section: Initialize with Tribe base values
    let eMult = tribe.Electro || 1.25; 
    let sMult = tribe.Sulong || 2.0;
    let slots = tribe.baseTraitSlots || 1;

    // 2. Dynamic Trait Math Loop
    const allTraitIds = [
        ...(char.minkTraits || []), 
        ...(char.traits || []), 
        ...(char.pTrait ? [char.pTrait] : []), 
        ...(char.sTrait ? [char.sTrait] : [])
    ];

    allTraitIds.forEach(tid => {
        const trait = window.TraitLibrary[tid];
        if (trait && trait.bonuses) {
            trait.bonuses.forEach(b => {
                if (b.stat === "electro" && b.op === "add") eMult += b.val;
                if (b.stat === "sulong" && b.op === "mult") sMult *= b.val;
                if (b.stat === "slots" && b.op === "add") slots += b.val;
            });
        }
    });

    // 3. HTML Section: Header and Ability Core
    container.innerHTML = ''; 
    let html = `
        <h2 style="font-family: 'Special Elite'; color: #BB86FC;">${tribe.name}</h2>
        ${tribe.coreAbilities.filter(ab => !ab.hiddenInStats).map(ab => {
            let desc = ab.desc.replace("{{ELECTRO}}", eMult.toFixed(2)).replace("{{SULONG}}", sMult.toFixed(2));
            return `<p style="color: ${ab.color || '#BB86FC'}; font-weight: bold; margin-top: 15px;">⦿ ${ab.name}</p>
                    <div style="font-size: 0.9em; margin-left: 15px; border-left: 2px solid ${ab.color || '#BB86FC'}; padding-left: 10px;">${desc}</div>`;
        }).join('')}
    `;

    // 4. Animal Passives
    if (char.tribe === "Mink" && char.minkTraits) {
        // 1. First, create a unique list to prevent duplicates
        const uniqueMinkTraits = [...new Set(char.minkTraits)];
        
        // 2. Apply the slot limit using .slice()
        uniqueMinkTraits.slice(0, slots).forEach(tName => {
            const info = window.AnimalPassiveLibrary[tName];
            if (info) {
                html += `
                    <p style="color: #03DAC6; font-weight: bold; margin-top: 15px;">⦿ Animal Passive</p>
                    <div style="margin-left: 15px; border-left: 2px solid #03DAC6; padding-left: 10px;">
                        <strong style="color: #fff;">${info.name}</strong><br>
                        <p style="font-size: 0.9em; color: #ccc;">${info.description || "No description provided."}</p>
                        ${(info.bullets || []).map(b => `
                            <div style="font-size: 0.85em; color: #fff; margin-top: 5px;">
                                <strong style="color: #BB86FC;">${b.key}:</strong> ${b.val}
                            </div>
                        `).join('')}
                    </div>`;
            }
        });
    }

    // 5. Traits List
    allTraitIds.forEach(tid => {
        const t = window.TraitLibrary[tid];
        if (t) {
            html += `
                <div style="margin-top: 25px; padding: 15px; border: 1px dashed #BB86FC; background: rgba(187, 134, 252, 0.05);">
                    <p style="color: #BB86FC; font-weight: bold; text-transform: uppercase; margin: 0;">⦿ ${t.name}</p>
                    <p style="font-size: 0.85em; color: #FFFFFFCC; margin-top: 10px; line-height: 1.5;">${t.description}</p>
                    
                    ${t.characteristics ? `
                    <p style="color: #BB86FC; font-weight: bold; margin-top: 15px;">CHARACTERISTICS</p>
                    <ul style="list-style: none; padding-left: 0;">
                        ${t.characteristics.positive.map(p => `<li style="margin-bottom: 5px;"><span style="color: #4CAF50; margin-right: 8px;">●</span>${p}</li>`).join('')}
                        ${t.characteristics.negative.map(n => `<li style="margin-bottom: 5px;"><span style="color: #F44336; margin-right: 8px;">●</span>${n}</li>`).join('')}
                    </ul>` : ''}
                    
                    ${t.perks ? `
                    <p style="color: #BB86FC; font-weight: bold; margin-top: 15px;">PERKS</p>
                    <ul style="font-size: 0.85em; color: #FFFFFF99; padding-left: 20px;">
                        ${t.perks.map(p => `<li><strong>${p.title}:</strong> ${p.desc}</li>`).join('')}
                    </ul>` : ''}
                </div>`;
        }
    });

    container.innerHTML = html; // Inject the full built string
};

// Supporting UI functions
function renderBox(trait, isSpecial) {
    return `
    <div style="margin-top: 25px; padding: 15px; ${isSpecial ? 'border: 1px dashed #BB86FC; background: rgba(187, 134, 252, 0.05);' : 'background: #1A1A1A; border: 1px solid #2C2C2C; border-radius: 4px;'}">
        <p style="color: #BB86FC; font-weight: bold; text-transform: uppercase; margin: 0;">⦿ ${trait.name}</p>
        <p style="font-size: 0.85em; color: #FFFFFFCC; margin-top: 10px; line-height: 1.5;">${trait.description}</p>
        ${trait.bullets ? `
        <ul style="font-size: 0.85em; color: #FFFFFF99; padding-left: 20px; margin-top: 10px;">
            ${trait.bullets.map(b => `<li><span style="color: #BB86FC;">${b.key}:</span> ${b.val}</li>`).join('')}
        </ul>` : ''}
    </div>`;
}

/*
Bio data
*/

window.formatBirthday = function(birthdayStr, age) {
    if (!birthdayStr) return null;
    
    // If it's already a full string (e.g., "August 31st, 1122"), return as is
    if (typeof birthdayStr === 'string' && birthdayStr.includes(',')) return birthdayStr;

    // If it's "MM/DD" format
    if (typeof birthdayStr === 'string' && birthdayStr.includes('/')) {
        const [month, day] = birthdayStr.split('/');
        const monthNames = ["January", "February", "March", "April", "May", "June", 
                            "July", "August", "September", "October", "November", "December"];
        
        const d = parseInt(day);
        const getSuffix = (n) => {
            if (n > 3 && n < 21) return 'th';
            switch (n % 10) {
                case 1: return "st"; case 2: return "nd"; case 3: return "rd"; default: return "th";
            }
        };
        
        const birthYear = age ? (1140 - parseInt(age)) : "Unknown";
        return `${monthNames[parseInt(month) - 1]} ${d}${getSuffix(d)}, ${birthYear}`;
    }
    return birthdayStr;
};

window.injectBio = function() {
    const charId = document.body.getAttribute('data-char-id');
    const char = window.KaiganDatabase ? window.KaiganDatabase[charId] : null;
    
    // Safety Guard: Stop if no char exists
    if (!char) {
        console.warn("Kaigan Engine: Character not found.");
        return;
    }

    // --- Helpers ---
    const row = (l, d) => d ? `<tr><td class="label">${l}:</td><td class="data">${d}</td></tr>` : '';
    const p = (l, d) => d ? `<p><strong>${l}:</strong> ${d}</p>` : '';

    // --- Safe Format Birthday ---
    const formattedBirthday = window.formatBirthday ? window.formatBirthday(char.birthday, char.age) : char.birthday;
    const birthYear = char.age ? (1140 - parseInt(char.age)) : "Unknown";

    // --- 1. Infobox (Sidebar) ---
    // Safely check if elements exist before writing to them
    const nameEl = document.getElementById('bio-name');
    if (nameEl) nameEl.innerText = char.name;
    
    // Use a hardcoded fallback path if window.paths is missing to stop the crash
    const posterBase = (window.paths && window.paths.posters) ? window.paths.posters : "/bounty_posters/";
    const portraitPath = `${posterBase}${charId.split('_')[0]}.webp`;
    
    const portImg = document.getElementById('bio-portrait');
    const portLink = document.getElementById('bio-portrait-link');
    if (portImg) portImg.src = portraitPath;
    if (portLink) portLink.href = portraitPath;

    const demTable = document.getElementById('bio-demographics-table');
    if (demTable) demTable.innerHTML = row("Romanized Name", char.name) + row("Race", char.tribe || "Human");

    const physTable = document.getElementById('bio-physical-table');
    if (physTable) physTable.innerHTML = row("Age", char.age) + row("Height", char.height) + row("Weight", char.weight) + row("Blood Type", char.bloodType);

    const profTable = document.getElementById('bio-professional-table');
    if (profTable) {
        const factionData = Array.isArray(char.faction) ? char.faction.join(', ') : (char.faction || "N/A");
        profTable.innerHTML = row("Faction", factionData) + row("Bounty", `฿${parseInt(char.bounty || 0).toLocaleString()}`);
    }

    // --- 2. Details ---
    const demoText = document.getElementById('bio-demographics-text');
    if (demoText) {
        demoText.innerHTML = p("Name", char.name) + p("Age", char.age) + p("Birth Year", birthYear) + 
                             p("Race", char.tribe) + p("Birthday", formattedBirthday) + p("Homeland", char.homeland);
    }

    const physText = document.getElementById('bio-physical-text');
    if (physText) {
        physText.innerHTML = p("Height", char.height) + p("Weight", char.weight) + p("Blood Type", char.bloodType);
    }
};