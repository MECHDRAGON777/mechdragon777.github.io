/**
 * KAIGAN TRIBE LIBRARY
 * Centralized database for all Tribes (Races).
 * Architecture: Data-driven stats using {{PLACEHOLDERS}} for dynamic calculation.
 */

window.TribeLibrary = {
    // --- MAIN TRIBES ---
    "Mink": {
        name: "MINK TRIBE (ミンク)",
        kanji: "ミンク",
        romaji: "Minku",
        type: "Main",
        limited: false,
        desc: "Fur-covered mammalian humanoids from Zou. Prideful and naturally gifted combatants possessing the traits of their specific animal lineage. Their fur, which they also refer to as 'mink', is considered their pride and joy.",
        
        // Metadata for Engine Math
        baseTraitSlots: 1,
        expansionTrait: "Demon of Mokomo",
        expandedTraitSlots: 2,
        baseElectro: 1.25,
        baseSulong: 2.0,
        
        // Specific trait hooks to modify values
        bonuses: {
            "Demon of Mokomo": { electro: 1.5, animalSlots: 1 },
            "Knight of the Forest": { electro: 1.25, sulong: 1.0 }
        },

        coreAbilities: [
            {
                name: "Electro (エレクトロ)",
                color: "#BB86FC",
                desc: "Produce high-voltage electric shocks. <br>⊢ <span style='color: #4CAF50;'>[Base]:</span> +{{ELECTRO}}x Strength to Electro-enhanced attacks."
            },
            {
                name: "Sulong (スロン)",
                color: "#F44336",
                desc: "<strong>Condition:</strong> Exposure to the Full Moon.<br>⊢ <span style='color: #4CAF50;'>[Apex Form]:</span> +{{SULONG}}x Doriki boost."
            },
            {
                name: "Animal Passive (動物パッシブ)",
                color: "#03DAC6",
                desc: "Inherited traits based on animal lineage. Choose Utility or +1.25x to one stat.",
                hiddenInStats: true // Handled dynamically by minkTraits loop
            }
        ]
    },

    "Giant": {
        name: "GIANT TRIBE (ジャイアンツ)",
        kanji: "ジャイアンツ",
        romaji: "Jaiantsu",
        type: "Main",
        limited: false,
        desc: "Humanoids that vastly overshadow other tribes in size, originating from Elbaph, Ancient Giant lineages, or the Giant Yeti tribe.",
        baseStrength: 2.0,
        baseDurability: 2.0,
        basePride: 0.10, // 10%
        
        bonuses: {
            "Knight of the Land": { strength: 0.5, durability: 0.5 },
            "Demon of Warland": { pride: 0.10 }
        },

        coreAbilities: [
            {
                name: "Herculean Body (剛体ボディ)",
                desc: "⊢ <span style='color: #4CAF50;'>[Passive]:</span> {{STRENGTH}}x Strength & {{DURABILITY}}x Durability at cost of -1.5x Speed."
            },
            {
                name: "Weapon Mastery (武器マスタリー)",
                desc: "Weapon power is increased by a Grade in Strength."
            },
            {
                name: "Elbaf Pride (エルバフプライド)",
                desc: "Passive {{PRIDE}}% gain to Doriki every turn during combat."
            }
        ]
    },

    "Skylander": {
        name: "SKYLANDER TRIBE (空の者)",
        kanji: "空の者",
        romaji: "Sora no Mono",
        type: "Main",
        limited: false,
        desc: "Winged humanoids from the Moon. Includes Skypieans, Shandia, and Birkans.",
        baseDialScale: 1.5,
        baseDialSlots: 3,
        
        bonuses: {
            "Demon of Shandora": { dialScale: 1.5 },
            "Knight of the Sky": { professionTiers: 2 }
        },

        coreAbilities: [
            {
                name: "Sky Warfare (貝殻)",
                desc: "Utilize Dials as weapons (+{{DIALSLOTS}} Slots). Dials scale to {{DIALSCALE}}x Doriki. Includes wings for gliding."
            },
            {
                name: "Mantra (心綱マントラ)",
                desc: "All requirements for Observation Haki acquisition and mastery are halved."
            }
        ]
    },

    "Fishman": {
        name: "FISHMAN TRIBE (魚人)",
        type: "Main",
        limited: false,
        desc: "Hybrids between humans and sea creatures, possessing human legs and aquatic features.",
        baseHydration: 2.0,
        
        bonuses: {
            "Knight of the Sea": { hydration: 0.5 },
            "Demon of Ryugyu": { hydration: 1.0, fishTraits: 2 }
        },

        coreAbilities: [
            {
                name: "Fishman Jujutsu",
                desc: "+1 Fishman Jujutsu/Karate Mastery Tier."
            },
            {
                name: "Hydrated Power-Up",
                desc: "[{{HYDRATION}}x] Doriki Gain when fighting Underwater."
            }
        ]
    },

    "Human": {
        name: "HUMAN TRIBE (人間)",
        type: "Main",
        limited: false,
        desc: "The dominant race known for rapid learning and technological advancement.",
        baseWillpower: 1.25,
        
        coreAbilities: [
            {
                name: "Increased Willpower",
                desc: "Gain {{WILLPOWER}}x Doriki while on the verge of Crucial Battles for 5 turns."
            },
            {
                name: "Technique Master",
                desc: "+3 Technique Slots."
            }
        ]
    },

    "Lunarian": {
        name: "LUNARIAN TRIBE (ルナーリア族)",
        type: "Main",
        limited: true,
        desc: "A near-extinct race known for mastery over flame and incredible physical durability.",
        baseFlame: 1.25,
        
        coreAbilities: [
            {
                name: "GOD'S WILL (高いスタミナ)",
                desc: "Trade off Speed & Durability. Trade -2x of one to buff the other by 2x."
            },
            {
                name: "Flaming Body (炎の体)",
                desc: "[+{{FLAME}}% Doriki to Flame-Based Techniques]"
            }
        ]
    },

    "Oni": {
        name: "ONI TRIBE (鬼)",
        type: "Main",
        limited: true,
        desc: "Mysterious race with powerful builds, horns, and incredible endurance.",
        baseProgress: 1.25,
        
        coreAbilities: [
            {
                name: "Ogre Wrath",
                desc: "Wrathful state multiplies Doriki by [2x] for up to 5 Turns."
            },
            {
                name: "Pure Progress",
                desc: "All training gains are multiplied by [{{PROGRESS}}x]."
            }
        ]
    },

    // --- SUB TRIBES ---
    "Cyborg": {
        name: "CYBORG TRIBE (サイボーグ)",
        type: "Sub",
        limited: false,
        baseDurability: 1.5,
        
        coreAbilities: [
            {
                name: "Energy Source",
                desc: "Recharge energy twice per battle via Cola, Air, etc."
            },
            {
                name: "Armored Body",
                desc: "{{DURABILITY}}x Durability with a hardened body."
            }
        ]
    },

    "Modified Human": {
        name: "MODIFIED HUMAN TRIBE",
        type: "Sub",
        limited: true,
        baseDurability: 1.5,
        
        coreAbilities: [
            {
                name: "Exoskeleton",
                desc: "{{DURABILITY}}x Innate Durability. Can fix broken bones mid-battle."
            }
        ]
    },

    "Automata": {
        name: "AUTOMATA TRIBE",
        type: "Artificial",
        limited: false,
        baseMastery: 2,
        
        coreAbilities: [
            {
                name: "Obedience Core",
                desc: "Must follow master commands. Gains +{{MASTERY}} Mastery Points."
            }
        ]
    }
};