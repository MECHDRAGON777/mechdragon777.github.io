/* --- KAIGAN BOUNTY ENGINE --- */

function initPoster() {
    const posterTarget = document.getElementById('smart-poster-inject');
    const emptyFramePath = `${root}bounty_poster/empty.png`;
    const charId = document.body.getAttribute('data-char-id');
    if (!posterTarget || !charId || !KaiganDatabase[charId]) return;

    const data = KaiganDatabase[charId];
    renderSinglePoster(posterTarget, data);
}

function renderSinglePoster(target, data) {
    let rawBounty = data.bounty.replace(/'/g, '');
    let numericBounty = parseInt(rawBounty, 10);
    let displayBounty = (isNaN(numericBounty) ? "0" : numericBounty).toLocaleString('en-US') + "-";

    let nameHTML = data.name.split('').map(char => {
        if (char === ' ') {
            return `<span style="min-width: 14px; display: inline-block;">&nbsp;</span>`;
        }
        return `<span>${char}</span>`;
    }).join('');

    let bountyHTML = displayBounty.split('').map(char => `<span>${char}</span>`).join('');
    const bellyPath = `${paths.posterBase.replace('base.png', 'belly.png')}`;

    target.innerHTML = `
        <div class="bounty-poster-container" style="background-image: url('${paths.posterBase}')">
            <div class="poster-portrait" style="background-image: url('${root}${data.portrait}')"></div>
            <div class="poster-name-text">${nameHTML}</div>
            <div class="poster-reward-text">
                <img src="${bellyPath}" class="belly-symbol-img">
                ${bountyHTML}
            </div>
        </div>
    `;

    const nameBox = target.querySelector('.poster-name-text');
    const rewardBox = target.querySelector('.poster-reward-text');

    if (data.name.length >= 10) {
        nameBox.style.justifyContent = "space-between";
        if (data.name.length > 20) {
            nameBox.style.fontSize = "24px";
            nameBox.style.letterSpacing = "-2.5px";
        } else if (data.name.length > 15) {
            nameBox.style.fontSize = "30px";
            nameBox.style.letterSpacing = "-1.5px";
        } else {
            nameBox.style.fontSize = "38px";
            nameBox.style.letterSpacing = "-0.5px";
        }
    } else {
        nameBox.style.justifyContent = "center";
        nameBox.style.fontSize = "42px";
        nameBox.querySelectorAll('span').forEach(s => s.style.margin = "0 3px");
    }

    nameBox.querySelectorAll('span').forEach(span => {
        span.style.display = "inline-block";
        span.style.transform = "scaleY(2.2)"; 
        span.style.transformOrigin = "center";
        span.style.flexShrink = "1"; 
        span.style.flexBasis = "auto";
    });

    if (displayBounty.length >= 10) { 
        rewardBox.style.justifyContent = "space-between";
    } else {
        rewardBox.style.justifyContent = "center";
        rewardBox.querySelectorAll('span').forEach(s => s.style.margin = "0 2px");
    }

    rewardBox.querySelectorAll('span').forEach(span => {
        span.style.display = "inline-block";
        span.style.transform = "scaleY(1.8)";
    });
}

function generateGallery() {
    const galleryTarget = document.getElementById('bounty-gallery-grid');
    if (!galleryTarget) return;
    galleryTarget.innerHTML = '';

    const sortedChars = Object.values(KaiganDatabase).sort((a, b) => {
        const valA = parseInt(a.bounty.replace(/'/g, ''), 10) || 0;
        const valB = parseInt(b.bounty.replace(/'/g, ''), 10) || 0;
        return valB - valA;
    });

    sortedChars.forEach(char => {
        const div = document.createElement('div');
        div.className = 'poster-item-container';
        galleryTarget.appendChild(div);
        renderSinglePoster(div, char);
    });
}

async function exportBountyPoster(mode = 'color') {
    const poster = document.getElementById('export-wrapper');
    if (!poster) return;

    const options = {
        useCORS: true, scale: 2, width: 386, height: 577,
        windowWidth: 386, windowHeight: 577, backgroundColor: null
    };

    try {
        const canvas = await html2canvas(poster, options);
        const ctx = canvas.getContext('2d');
        if (mode === 'bw') {
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = imageData.data;
            for (let i = 0; i < d.length; i += 4) {
                const avg = (d[i] * 0.3 + d[i+1] * 0.59 + d[i+2] * 0.11);
                d[i] = d[i+1] = d[i+2] = avg;
            }
            ctx.putImageData(imageData, 0, 0);
        }
        const link = document.createElement('a');
        link.download = `wanted_${mode}.png`;
        link.href = canvas.toDataURL("image/png");
        link.click();
    } catch (err) { console.error(err); }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('smart-poster-inject')) initPoster();
    if (document.getElementById('bounty-gallery-grid')) generateGallery();
});