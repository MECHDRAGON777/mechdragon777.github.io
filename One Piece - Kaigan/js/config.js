/* --- KAIGAN GLOBAL CONFIGURATION v1.6 --- */

// 1. Root & Path Calculation
const path = window.location.pathname;
const segments = path.split('/').filter(Boolean);

// Determine depth based on the folder structure from the file itself
let depth = 0;
if (segments.length > 0) {
    // If the file is inside a subfolder directory (characters, devil_fruits, items)
    if (path.includes('/characters/') || path.includes('/devil_fruits/') || path.includes('/items/') || path.includes('/previews/')) {
        depth = 1;
    } else if (path.includes('/bounty_posters/')) {
        depth = 1;
    }
}

// Enforce a maximum fallback check to ensure it never throws more than one parent jump block
const root = depth === 1 ? "../" : "./";

const paths = {
    database: `${root}Kaigan Database.html`,
    characters: `${root}characters/`,
    fruits: `${root}devil_fruits/`,
    items: `${root}items/`,
    previews: `${root}previews/`,
    posters: `${root}bounty_posters/`,
    posterBase: `${root}bounty_posters/base.png` 
};

/**
 * SYSTEM UTILITY: Identify Active Character
 */
function getActiveChar() {
    const charId = document.body.getAttribute('data-char-id');
    if (!charId || !window.KaiganDatabase) return null;
    return window.KaiganDatabase[charId];
}

/**
 * AFFILIATION ENGINE: Faction-Aware UI
 */
function injectAffiliationData() {
    const container = document.getElementById('dynamic-affiliation-inject');
    const char = getActiveChar();
    
    if (!container || !char) return;

    const themeColor = char.color || "#BB86FC";
    const factionArr = Array.isArray(char.faction) ? char.faction : [char.faction];
    const isMarine = factionArr.includes("Marine");
    const isRev = factionArr.includes("Revolutionary");

    let bountyHTML = "";
    if (!isMarine || isRev) {
        const myBounty = parseInt(char.bounty) || 0;
        let crewBountyTotal = 0;
        if (char.crew && char.crew !== "n/a") {
            const crewMembers = Object.entries(window.KaiganDatabase).filter(([k, c]) => c.crew === char.crew);
            crewBountyTotal = crewMembers.reduce((sum, [k, m]) => sum + (parseInt(m.bounty) || 0), 0);
        }
        const contributionPercent = crewBountyTotal > 0 ? (myBounty / crewBountyTotal) * 100 : 0;
        const formatBounty = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
        bountyHTML = `
            <p><strong>Bounty:</strong> 𝕭 ${formatBounty(myBounty)}</p>
            <div class="bounty-bar-bg">
                <div class="bounty-bar-fill" style="width: ${contributionPercent}%; background: ${themeColor}; box-shadow: 0 0 10px ${themeColor}66;"></div>
            </div>
            <p style="font-size: 0.7em; color: #666; margin-top: -10px;">Crew Contribution: ${contributionPercent.toFixed(1)}%</p>
        `;
    }

    let rankHTML = (isMarine || isRev) ? `<p><strong>Faction Rank:</strong> ${char.rank || "Unassigned"}</p>` : "";
    let occDisp = char.role || "Member";
    if (char.profession && Array.isArray(char.profession) && char.profession.length > 0) {
        const jobNames = char.profession.map(p => p[0]).join('/');
        occDisp = (char.role && char.role !== "Member") ? `${char.role} | ${jobNames}` : jobNames;
    }

    let crewListHTML = "";
    if (char.crew && char.crew !== "n/a") {
        const crewMembers = Object.entries(window.KaiganDatabase).filter(([k, c]) => c.crew === char.crew);
        const listLabel = isMarine ? "Division Members:" : "Crew Members:";
        crewListHTML = `<p><strong>${listLabel}</strong></p><ol>`;
        crewMembers.forEach(([key, member]) => {
            const isSelf = member.name === char.name ? `style="color: ${themeColor}; font-weight: bold;"` : '';
            const mRole = Array.isArray(member.role) ? member.role.join(', ') : (member.role || 'Member');
            crewListHTML += `<li><a href="${key}.html" ${isSelf}>${member.name}</a> ~ ${mRole}</li>`;
        });
        crewListHTML += `</ol>`;
    }

    container.innerHTML = `
        <details id="Affiliation" open>
            <summary style="color: ${themeColor}">[ Affiliation ]</summary>
            <p><strong>Aliases:</strong> ${char.alias || 'N/A'}</p>
            ${rankHTML}
            <p><strong>Faction:</strong> ${factionArr.join('/')}</p>
            ${bountyHTML}
            <p><strong>Occupation:</strong> ${occDisp}</p>
            <p><strong>Alignment:</strong> ${char.alignment || 'TBD'}</p>
            <hr style="border-color: ${themeColor}33">
            <p><strong>${isMarine ? 'Unit:' : 'Crew Name:'}</strong> <a href="../crews/${char.crew.toLowerCase().replace(/ /g, '_')}.html" style="color: ${themeColor}">${char.crew}</a></p>
            ${crewListHTML}
        </details>
    `;
}

/**
 * MASTERY ENGINE: Tiered Skill Trees
 */
function injectMasteries() {
    const jobContainer = document.getElementById('dynamic-jobs-inject');
    const char = getActiveChar();
    
    if (!window.KaiganDatabase || !window.JobLibrary || !char) return;

    const buildBlock = (dataArray, library) => {
        // SAFEGUARD: Only proceed if dataArray is a valid array
        if (!dataArray || !Array.isArray(dataArray) || dataArray.length === 0) return "";
        
        let finalHTML = "";
        
        dataArray.forEach((entry) => {
            // Support both ["Name", tier] and raw strings ["Name"]
            const [name, tier] = Array.isArray(entry) ? entry : [entry, 0];
            const info = library[name];
            if (!info || !info.tiers) return;

            let tiersHTML = "";
            for (let i = 0; i < 5; i++) {
                const tierData = info.tiers[i];
                if (!tierData) continue; 

                const isUnlocked = (i + 1) <= tier;
                const icon = isUnlocked ? "◈" : "◇";
                const dotColor = isUnlocked ? (char.color || "#BB86FC") : "#6a6a6a";
                const textColor = isUnlocked ? "#fff" : "#666";
                const perkList = Array.isArray(tierData.perks) ? tierData.perks : ["Data Pending..."];

                tiersHTML += `
                    <div style="margin-bottom: 15px; color: ${textColor}">
                        <p style="margin:0;">${icon} <strong>Tier ${i + 1} (${tierData.name}):</strong></p>
                        ${perkList.map(p => `<span style="padding-left: 15px; display: block; color: ${dotColor}; font-size: 0.9em;">⦿ ${p}</span>`).join('')}
                    </div>`;
            }

            finalHTML += `
                <div style="background: #1A1A1A; border: 1px solid #442200; padding: 25px; border-radius: 4px; margin-bottom: 20px; position: relative; z-index: 5;">
                    <h2 style="font-family: 'Special Elite'; color: #fff; border-bottom: 2px solid ${char.color || '#BB86FC'}; padding-bottom: 10px; text-align: center; text-transform: uppercase; margin-top:0;">
                        ${name.toUpperCase()} (${info.jp})
                    </h2>
                    <p style="font-size: 0.85em; font-style: italic; color: #FFFFFFCC; text-align: center; margin-bottom: 20px;">${info.desc}</p>
                    <h3 style="font-family: 'Special Elite'; color: ${char.color || '#BB86FC'}; border-bottom: 1px solid #2C2C2C; font-size: 1em; margin-bottom: 15px;">𝐓𝐈𝐄𝐑 𝐏𝐑𝐎𝐆𝐑𝐄𝐒𝐒𝐈𝐎𝐍</h3>
                    ${tiersHTML}
                </div>`;
        });
        return finalHTML;
    };

    if (jobContainer) {
        jobContainer.innerHTML = buildBlock(char.profession, window.JobLibrary);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    injectAffiliationData();
    injectMasteries();
});
