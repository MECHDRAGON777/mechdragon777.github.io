/* --- HELPER FUNCTIONS --- */

function copyTemplate() {
    const templateText = `# ⸻【 EXAMPLE 】⸻ 

**Participant(s):** <@USER>  

**Previous Log:**
-# **Link the reward log message link**

**Log:** 1/2
-# **Always mention any travels from Island to Island.**

**Type of Progression:**
-# Techniques learned, doriki training, profession work, etc  

**Channel Location:**
-# Link channels in the same order as your timeline  

**Items Used:**
-# Shop items or resources used  

**Items Crafted:**
-# Anything you created  

**Doriki:** ✪ OLD ✪ :Levelup: ✪ NEW ✪  

**Summary:**
-# ⦿ Clear, short summary of what happened`;

    navigator.clipboard.writeText(templateText).then(() => {
        const btn = document.getElementById('copy-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = "✓ COPIED!";
        btn.style.background = "#6D9E73";
        btn.style.color = "#000"; // Makes the checkmark easier to see
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "#222";
            btn.style.color = "#6D9E73";
        }, 1500);
    });
}