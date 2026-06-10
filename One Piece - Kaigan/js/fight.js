window.FightingLibrary = {
    "Bladesmanship": {
        jp: "剣士 (Kenshi)",
        color: "#6D9E73",
        desc: "Due to the prominence of swords in the series, particularly saber and katanas, nearly every crew and organization has a swordsman in it. A skilled swordsman is a valuable asset to a crew, and swordsmen are often found in positions of high respect, such as a first mate or officer, or even the captain. Swordsmen from Wano Country are referred to as 'samurai' (侍, samurai). Participants of Corrida Colosseum are known as 'gladiators' (剣闘士, kentōshi), overall swordsmen in the One Piece universe are very prominent. As for Kaigan, there exists a sword religion called Bushido. It is a code that most swordsmen should honor to.",
        skills: [
            { name: "Robust Blade", effect: "Attacks are Heavy and can force break Defenses", mod: "[+1.25x Strength]" },
            { name: "Gentle Blade", effect: "Attacks are Fast and can force an Opening", mod: "[+1.25x Speed]" },
            { name: "Iai", effect: "Sheathing and resheathing with speed enough to be unseen", mod: "[Once Per 3 Turns] [Slight advantage in Equal Scaling]" },
            { name: "Tobu Zangeki", effect: "Powerful pressure in the form of a compressed air blade", mod: "[+1.25x Strength on Range Attacks]" },
            { name: "Equilibrium", effect: "A perfect balance between Robust & Gentle Blades", mod: "[1.5x Strength or Speed]" },
            { name: "Soul Extension", effect: "Reach conditions for Black Blade status", mod: "[Under heightened situations]" }
        ],
        tiers: [
            { 
                name: "Novice", 
                desc: "The user has acquired the knowledge of Bladesmanship, there is still a long way for them to go for complete mastery.",
                choice_type: "one_of", 
                options: ["Robust Blade", "Gentle Blade"], 
                perks: ["All techniques scale to D-Rank (1.5x)"] 
            },
            { 
                name: "Apprentice", 
                desc: "You now understand some of the underlying principles, but you still lack practical application or real mastery.",
                choice_type: "one_of", 
                options: ["Iai", "Tobu Zangeki"], 
                perks: ["All techniques scale to C-Rank (2x)", "-1 Cooldown on all Sword techniques"] 
            },
            { 
                name: "Intermediate", 
                desc: "You have a solid grasp of the techniques, and your skills have significantly improved.",
                choice_type: "one_of", 
                options: ["Iai", "Tobu Zangeki"], 
                perks: ["All techniques scale to B-Rank (3x)"] 
            },
            { 
                name: "Advanced", 
                desc: "You are beginning to reach the peak of your power. You can utilize your techniques with efficiency.",
                perks: ["Access to Equilibrium (1.5x Strength or Speed)", "All techniques scale to A-Rank (4x)", "-2 Cooldown on all Sword Based techniques"] 
            },
            { 
                name: "Master", 
                desc: "You’ve reached the pinnacle of your craft. You can perform every technique at its most refined form.",
                perks: ["Access to Soul-Bind (Black-Blade Prerequisite)", "All techniques scale to S-Rank (5x)"] 
            }
        ]
    },
    "Weathermancy": {
        jp: "天候術 (Tenko Jutsu)",
        color: "#BB86FC",
        desc: "The exceptional ability to manipulate weather using various tools and techniques. While largely dependent on the use of the Climatact, a true weather user leverages an innate and skilled understanding of meteorology to turn the environment into a versatile battlefield asset.",
        tools: ["Climatact", "Perfect Climatact", "Sorcery Climatact", "Sentient Climatact"],
        tiers: [
            {
                name: "Novice",
                desc: "Acquired basic knowledge; allows judging weather to avoid storms.",
                perks: ["Access to Art of Weather", "All techniques scale to D-Rank (1.5x)"]
            },
            {
                name: "Apprentice",
                desc: "Understanding underlying principles; requires Tier 1 Inventor.",
                perks: ["Efficiency with the Climatact", "All techniques scale to C-Rank (2x)", "-1 Cooldown on all Weather techniques"]
            },
            {
                name: "Intermediate",
                desc: "Skills significantly improved; requires Tier 2 Inventor.",
                perks: ["Efficiency with the Perfect Climatact", "All techniques scale to B-Rank (3x)"]
            },
            {
                name: "Advanced",
                desc: "Reaching the peak of efficiency; requires Tier 3 Inventor.",
                perks: ["Efficiency with the Sorcery Climatact", "All techniques scale to A-Rank (4x)", "-2 Cooldown on all Weather Based techniques"]
            },
            {
                name: "Master",
                desc: "The pinnacle of the craft; requires Homie Race assistance.",
                perks: ["Mastery of the Sentient Climatact", "All techniques scale to S-Rank (5x)"]
            }
        ]
    },
    "SixPowers": {
        jp: "六式 (Rokushiki)",
        color: "#4A235A",
        desc: "Rokushiki is a special, superhuman martial arts style. In Kaigan it is used by many World Government officials and has passed down even to the ranks of Marines. Rokushiki consists of six basic techniques and a secret seventh technique that only a true master of Rokushiki can achieve. Furthermore, most of the users have displayed their own variations and derived techniques, allowing them to increase their versatility and originality.",
        skills: [
            { name: "Shave (Soru)", effect: "Rapid movement at incredible speeds, teleporting short distances", mod: "[Once Per 4 Turns] [Slight advantage in Equal Scaling]" },
            { name: "Moonwalk (Geppo)", effect: "Walk in the air by kicking the air beneath with force", mod: "[1.25x Speed]" },
            { name: "Tempest Kick (Rankyaku)", effect: "Launches a cutting wind that can slice through objects", mod: "[+1.25x Attack]" },
            { name: "Iron Body (Tekkai)", effect: "Hardens the body to become as tough as iron", mod: "[+1.25x Durability]" },
            { name: "Paper Art (Kami-e)", effect: "Makes the body limp and flexible to avoid attacks", mod: "[+1.25x Perception]" },
            { name: "Finger Gun (Shigan)", effect: "Thrusts finger forward for piercing speed", mod: "[+1.25x Spd & Perc] [Stuns the Enemy]" }
        ],
        tiers: [
            { 
                name: "Novice", 
                desc: "The user has acquired the knowledge of Rokushiki, there is still a long way for them to go for complete mastery.",
                choice_type: "one_of", 
                options: ["Shave", "Moonwalk", "Tempest Kick", "Iron Body", "Paper Art"], 
                perks: ["All techniques scale to D-Rank (1.5x)"] 
            },
            { 
                name: "Apprentice", 
                desc: "You now understand some of the underlying principles, but you still lack practical application or real mastery.",
                choice_type: "two_of", 
                options: ["Shave", "Moonwalk", "Tempest Kick", "Iron Body", "Paper Art"], 
                perks: ["All techniques scale to C-Rank (2x)", "-1 Cooldown on all Rokushiki techniques"] 
            },
            { 
                name: "Intermediate", 
                desc: "You have a solid grasp of the techniques, and your skills have significantly improved.",
                choice_type: "all_of", 
                options: ["Shave", "Moonwalk", "Tempest Kick", "Iron Body", "Paper Art"], 
                perks: ["All techniques scale to B-Rank (3x)"] 
            },
            { 
                name: "Advanced", 
                desc: "You are beginning to reach the peak of your power. You can utilize your techniques with efficiency.",
                perks: ["Access to Shigan", "All techniques scale to A-Rank (4x)", "-2 Cooldown on all Rokushiki techniques"] 
            },
            { 
                name: "Master", 
                desc: "You’ve reached the pinnacle of your craft. You can perform every technique at its most refined form.",
                perks: ["Access to Rokuogan", "All techniques scale to S-Rank (5x)"] 
            }
        ]
    },
    "Dragon Claw Fist": {
        jp: "龍爪拳 (Ryūzōken)",
        desc: "A martial art that focuses on channeling immense strength through the hands, shaping them into claw-like forms to crush, tear, and strike with precise, devastating force. This style blends brutal close-combat techniques, allowing users to shatter defenses and cause internal damage. A critical aspect of this style is focusing on the 'core' (核, kaku) of the target; by exerting force on the core of structures or opponents, it is possible to easily destroy them with a single blow .",
        tools: ["Three-fingered claw hand strike"],
        skills: [
            "Dragon's Talon: 1.25x Attack (Crushes Add-On Defenses) ",
            "Claw Crush: Disables Targeted Limb for 3 Turns ",
            "Sky Ripper: 1.25x Projectile Strength ",
            "Dragon Coil: 1.25x Doriki (1.5x on Counters) ",
            "Corebreaker: 1.5x Doriki (Omni-directional core shattering) "
        ],
        tiers: [
            { 
                name: "Novice", 
                desc: "The user is a novice, getting a hang of Dragon's Talon .", 
                perks: ["Skill: Dragon's Talon", "Techniques scale to D-Rank (1.5x) "] 
            },
            { 
                name: "Apprentice", 
                desc: "Growing mastery over underlying principles .", 
                perks: ["Skill: Claw Crush", "Techniques scale to C-Rank (2x) ", "-1 Cooldown on all techniques "] 
            },
            { 
                name: "Intermediate", 
                desc: "Solid grasp; prowess extends beyond simple strikes .", 
                perks: ["Skill: Sky Ripper", "Techniques scale to B-Rank (3x) "] 
            },
            { 
                name: "Advanced", 
                desc: "Reaching the peak; combat strategies become more advanced .", 
                perks: ["Skill: Dragon Coil (Defensive/Counter)", "Techniques scale to A-Rank (4x) ", "-2 Cooldown on all techniques "] 
            },
            { 
                name: "Master", 
                desc: "The pinnacle of the craft; most refined form .", 
                perks: ["Skill: Corebreaker", "Techniques scale to S-Rank (5x) "] 
            }
        ]
    }
};