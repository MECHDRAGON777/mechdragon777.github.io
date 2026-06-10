window.InventoryLibrary = {
    "penancers": {
        category: "WEAPON",
        name: "ᛊᚻᛟᚲᚢᛉᚨᛁ (𝐏𝐄𝐍𝐀𝐍𝐂𝐄𝐑𝐒)",
        type: "Graded Famous Blade",
        img: "images/maka-albarn-soul-eater.gif",
        abilityName: "𝐒𝐔𝐏𝐄𝐑𝐒𝐓𝐀𝐑",
        desc: "A Microphone Stand that houses a Scythe that can extend to a Grim/Farm Scythe or War-Scythe and retract back into the stand hilt easily.",
        customStats: "Power: ▰▰▰▱▱ (D3) | Handling: ▰▰▱▱▱ (T2) | Durability: ▰▰▰▰▰ (D5)"
    },
    "hairpin": {
        category: "INVENTIONS",
        name: "Lineage Factor Limiting Hairpin",
        type: "Suppression Device",
        img: "images/LFLHP.webp",
        desc: "Scientific device used to regulate her innate Lunarian lineage factor and stabilize thermal output."
    },
    "Gsnail": {
        category: "ITEMS",
        name: "Gray Transponder Snail",
        type: "Secure Comms",
        img: "images/snail-visual.gif",
        desc: "A covert communication device used for secure, encrypted transmissions.",
    },
    "climatact": {
        category: "INVENTIONS",
        name: "Clima-Tact",
        type: "Weather-Based Staff",
        img: `../items/climatact.webp`,
        desc: "Condenses weather-reactive compounds into a staff that 'distorts the user's weather wavelength' to amplify and evolve climate phenomena.",
        subClass: "Climatact",
        // Keeping the mechanics here for easy reference in battle
        abilities: {
            conditions: ["Heat Ball", "Cool Ball", "Thunder Ball"],
            tempos: [
                { name: "Cyclone Tempo", effect: "+20% Attack Power" },
                { name: "Mirage Tempo", effect: "Once Per Battle | Avoids attack within 2x difference" },
                { name: "Thunderbolt Tempo", effect: "20% Stun | Imbued 1 turn paralysis if hit twice in a row" },
                { name: "Tornado Tempo", effect: "Once Per Battle | Redirects enemy or attack within 2x difference" },
                { name: "Fog Tempo", effect: "Causes 20% Perception loss" }
            ]
        },
        customStats: "Tier: N/A"
    }
};