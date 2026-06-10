// Define your theme colors in one place
const C = {
    pos: "#4CAF50", // Green
    neg: "#F44336", // Red
    txt: "#FFFFFF"
};

window.TraitLibrary = {
    "Demon of Mokomo": {
        name: "DEMON OF MOKOMO",
        kanji: "百獣の鬼",
        romaji: "Hyakujū no Oni",
        description: "The 'Demon of Mokomo' is a rare and feared title among the Mink Tribe, given to those who awaken their most feral instincts and push their Electro and combat prowess to near-mythical levels. These Minks exhibit terrifying ferocity, lightning-fast reflexes, and an unrelenting will to dominate any battlefield.",
        type: "Primary",
        characteristics: {
            positive: [
                "<strong>Electro Overload</strong> – Their Electro power erupts uncontrollably in battle, striking with a force and speed beyond normal Minks, leaving enemies paralyzed with fear and pain.",
                "<strong>Primal Dominance</strong> – Heightened senses, reflexes, and predatory instincts make them apex combatants, able to anticipate and counter even the most skilled foes.",
                "<strong>Feral Resilience</strong> – Even grievous injuries rarely slow them down; their determination and survival instinct allow them to fight beyond ordinary limits."
            ],
            negative: [
                "<strong>Bloodlust</strong> – Their uncontrollable ferocity can lead to reckless aggression, putting allies and objectives at risk if left unchecked.",
                "<strong>Isolation</strong> – The fear they inspire often alienates them from their tribe, leaving them to walk a lonely path of power and infamy."
            ]
        },
        perks: [
            { title: "<strong>+1.5x Electro Power</strong>", desc: "Amplifies all Electro-based attacks, making them extremely potent." },
            { title: "<strong>Extra Characteristics</strong>", desc: "Allows the User to have upto 2 Animal Characteristics/Ability" }
        ],
        
        // Math Engine Keys
        bonuses: [
            { stat: "electro", op: "add", val: 1.5 },
            { stat: "slots", op: "add", val: 1 }
        ]
    },

    "Knight of the Forest": {
        name: "KNIGHT OF THE FOREST",
        kanji: "親の七光り",
        romaji: "Oya no Nanahikari",
        description: "The 'Knight of the Forest' is a title bestowed upon prodigious warriors of the Mink Tribe, those born with an unparalleled connection to the wilderness and a natural affinity for battle. These individuals possess heightened instincts, superior agility, and an innate mastery over Electro from an early age.",
        type: "Primary",
        characteristics: {
            positive: [
                "<strong>Electro Mastery</strong> – Unlike regular Minks who develop their Electro abilities through training, Knights of the Forest wield it instinctively.",
                "<strong>Apex Predator</strong> – Enhanced senses and natural agility grant them unparalleled combat awareness.",
                "<strong>Lunar Power</strong> – The light of the full moon amplifies their strength beyond normal Mink capabilities."
            ],
            negative: [
                "<strong>Primal Instinct</strong> – Their deep connection to their primal nature can make controlling their emotions in battle difficult."
            ]
        },
        perks: [
            { title: "+1.25x Electro Based Abilities", desc: "" },
            { title: "Apex Sulong Transformation", desc: "The user gets a 3x Sulong Transformation as KoF is the apex of it's kind." }
        ],
        // Math Engine
        bonuses: [
            { stat: "electro", op: "add", val: 1.25 },
            { stat: "sulong",  op: "add", val: 1 }
        ]
    },
    "Liar of All Liars": {
        name: "LIAR OF ALL LIARS",
        kanji: "万嘘",
        romaji: "Manuso",
        description: "The Liar of All Liars is a man whose honesty is so extraordinary that it is constantly questioned by the world. Though he speaks only truth, the absurdity, improbability, or audacity of his claims brands him a liar in the eyes of others. He endures scorn, disbelief, and ridicule, yet remains steadfast, proving that conviction and integrity can exist even when the world rejects it [1, 2].",
        type: "Primary",
        characteristics: {
            positive: [
                "<strong>Unwavering Honesty</strong> – Always tells the truth, even when it is inconvenient or dangerous; integrity cannot be shaken .",
                "<strong>Legend of the Impossible</strong> – Tales of your deeds are often dismissed as impossible or exaggerated, enhancing your mythos in unintended ways ."
            ],
            negative: [
                "<strong>Branded Outcast</strong> – Society, allies, or enemies may mistrust or ridicule you despite your honesty, often leading to unique social challenges .",
                "<strong>Persistence Against Doubt</strong> – Must endure skepticism and disbelief, yet these trials strengthen resolve and moral conviction ."
            ]
        },
        perks: [
            { 
                title: "<strong>Truth’s Resolve</strong>", 
                desc: "Gains access to one Hidden Knowledge or secret fact that can influence events, but nobody believes it, forcing the user to act creatively to prove its validity ." 
            },
            { 
                title: "<strong>Improbable Legend</strong>", 
                desc: "If they prove its validity, they can ask for a Special Perk of Choice ." 
            }
        ],
        bonuses: [] // Primarily narrative effects based on the sources.
    },
    "The Oracle": {
        name: "THE ORACLE",
        kanji: "未来の預言者",
        romaji: "Mirai no Yogen-sha",
        description: "Oracle of the Future is a prestigious title bestowed on an individual with the innate ability to foresee the future. This ability of clairvoyance has been noted to be a generational phenomenon that occurs once every century, regarding it as a blessing from the Gods. Those with this inherit gift have the capacity to see further events, allowing them to either change or welcome the future to their desire .",
        type: "Secondary",
        characteristics: {
            positive: [
                "<strong>Future Knowledge</strong> – Possessing the knowledge of the future, the Oracle is able to instinctively predict future events and conflicts, particularly worldly occurrences and their reasoning .",
                "<strong>Future Sense</strong> – A sixth sense that allows them to sense emotions, such as the feeling of impending danger, to warn the caster ."
            ],
            negative: [
                "<strong>Sought out Oracle</strong> – Due to their precognition, the user is highly sought after by powerful figures such as Celestial Dragons. They are likely to be kidnapped for personal gain ."
            ]
        },
        perks: [
            { 
                title: "<strong>Foreseeing Future Events</strong>", 
                desc: "Allows the user to foresee future events once per arc ." 
            }
        ],
        bonuses: [] // Primarily narrative and sensory-based effects.
    }
};

window.AnimalPassiveLibrary = {
    "Barometric Instinct": {
        name: "Barometric Instinct",
        description: "Refined through 14 years of exposure to Weatheria's volatile climate, the user's nervous system has adapted to act as a hyper-sensitive biological weather station.",
        bullets: [
            { key: "Meteorological Synthesis", val: "Predicts local atmospheric shifts (lightning, weather) via pressure and electrical potential." }
        ]
    },
    "Leporidae": {
        name: "Leporidae (Rabbit)",
        description: "Enhanced leg strength and agility.",
        type: "stat",
        bonuses: [
            { stat: "agility", op: "add", val: 0.25 }
        ]
    },
    "Feline Grace": {
        name: "Feline Grace",
        description: "Due to her cat-like features, Pepper is capable of surviving drops from twice as high up as others of her strength might while landing on her feet.",
        bullets: [
            { key: "Impact Mitigation", val: "Survives falls from 2x the standard height threshold." },
            { key: "Righting Reflex", val: "Automatically lands on feet when falling." }
        ]
    }
};