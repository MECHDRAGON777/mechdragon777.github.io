/* --- KAIGAN CHARACTER & DOSSIER ENGINE v1.4 --- */

/**
 * 1. INITIALIZATION: Runs on DOM load to setup the character state
 */
document.addEventListener("DOMContentLoaded", () => {
    const charId = document.body.getAttribute('data-char-id');
    const char = window.KaiganDatabase ? window.KaiganDatabase[charId] : null;

    if (!char) {
        console.error("Kaigan Engine: Character ID '" + charId + "' not found.");
        return;
    }

    // --- DYNAMIC ACCENT COLOR ---
    // Grabs the color from database.js and applies it to the CSS variables
    if (char.color) {
        document.documentElement.style.setProperty('--accent-color', char.color);
    }

    // 1.1 Populate Bio Data
    const bioMap = {
        'inject-age': char.age,
        'inject-race': char.race,
        'inject-origin': char.origin,
        'inject-status': char.status,
        'inject-occupation': char.occupation,
        'inject-affiliation': char.crew
    };

    for (const [id, value] of Object.entries(bioMap)) {
        const el = document.getElementById(id);
        if (el && value) el.innerText = value;
    }

    // 1.2 Handle Navigation & Deep-Linking
    const hash = window.location.hash.replace('#', '');
    const subToTabMap = {
        'Demographics': 'Bio', 'Appearance': 'Bio', 'Relationships': 'Bio',
        'PersonalDetails': 'Bio', 'Affiliation': 'Bio', 'Backstory': 'Bio',
        'Trivia': 'Bio', 'Gallery': 'Bio',
        'Profession': 'Stats', 'FightingStyle': 'Stats', 'Techniques': 'Stats',
        'Inventory': 'Stats', 'Statistics': 'Stats', 'TribalPerks': 'Stats',
        'DF-Documentation': 'DF', 'DF-Progression': 'DF', 'DF-Techniques-Header': 'DF',
        'S1GL': 'Songs', 'S2SU': 'Songs', 'tab-Songs': 'Songs'
    };

    let targetTab = 'Bio';
    if (['Bio', 'Stats', 'Songs', 'DF'].includes(hash)) {
        targetTab = hash;
    } else if (subToTabMap[hash]) {
        targetTab = subToTabMap[hash];
    }

    window.showTab(targetTab);

    // 1.3 Smooth Anchor Logic
    if (hash) {
        const targetElement = document.getElementById(hash);
        if (targetElement) {
            document.querySelectorAll('details').forEach(det => det.open = false);
            if (targetElement.tagName === 'DETAILS') targetElement.open = true;
            const parentDetail = targetElement.closest('details');
            if (parentDetail) parentDetail.open = true;

            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 150);
        }
    }
});

/**
 * 2. NAVIGATION: Handles switching between main dossier tabs
 */
window.showTab = function(tabName) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-buttons button').forEach(b => b.classList.remove('active'));
    
    const target = document.getElementById('tab-' + tabName);
    const btn = document.getElementById('btn-' + tabName);
    
    if (target) target.classList.add('active');
    if (btn) btn.classList.add('active');
    
    if (tabName === 'Stats' && typeof window.renderRadar === 'function') {
        window.renderRadar();
    }
};

/**
 * 3. SONG REPERTOIRE: Handles clipboard copy for lyrics
 */
window.copySong = function(id) {
    const lyricsContainer = document.getElementById('lyrics-' + id);
    
    if (!lyricsContainer) {
        console.warn("Kaigan OS: No lyrics container found for ID " + id);
        return;
    }
    
    const lyricsText = lyricsContainer.innerText;
    
    navigator.clipboard.writeText(lyricsText).then(() => {
        alert("Kaigan Handbook: Song [" + id + "] lyrics copied to clipboard!");
    }).catch(err => {
        console.error('Kaigan OS: Failed to copy lyrics: ', err);
    });
};