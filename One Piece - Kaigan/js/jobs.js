window.JobLibrary = {
    "Cook": {
        jp: "料理長 (Ryoricho)",
        desc: "A chef in the One Piece world is often skilled in creating elaborate, flavorful, and nutritious meals. Food is highly valued not just for sustenance but also as a source of joy and morale for a crew.",
        tiers: [
            { 
                name: "Kitchen Hand", 
                perks: ["[GREAT TASTE]: Boosting Progress Log Gains by 10%", "[EMPOWERING SNACK]: 10% boost in stat based off ingredient", "[USEFUL LEFTOVERS]: Make two meals out of one ingredient"] 
            },
            { 
                name: "Great Chef", 
                perks: ["[SUPER TASTE]: Boosting Progress Log Gains by 20%", "[SOUL-BRAISE]: 20% boost in stat based off ingredient", "[IMPORTANT REMAINS]: Make three meals out of one ingredient", "[MEDICAL MEALS]: Speed up Doctor Recovery/Healing by 2x"] 
            },
            { 
                name: "Sous Chef", 
                perks: ["[MEDICAL MEALS]: Speed up Doctor Recovery/Healing by 2x", "[DIVINE DELICACY]: Boosting Progress Log Gains by 40%", "[SACRED FLAVOR]: 30% boost in stat based off ingredient"] 
            },
            { 
                name: "Gourmet Chef", 
                perks: ["[USABLE SCRAPS]: Make four meals out of one ingredient", "[FEAST FIGHTER]: Halves all Technique Cooldowns once per 5 turns", "[MEMORY MEAL]: Permanent +1 Willpower or Emotionally Move an NPC"] 
            },
            { 
                name: "God Chef", 
                perks: ["[???]: Locked", "[???]: Locked", "[???]: Locked"] 
            }
        ]
    },
    "Entertainer": {
        jp: "エンターテイナー",
        desc: "Specialists in performing arts, using skills to bring joy, boost morale, or sway public opinion. While not traditionally combatants, they hold significant social influence.",
        tiers: [
            { 
                name: "Performer", 
                perks: ["[UP AND COMING]: Can entertain crowds to create Mobs", "[INTERVIEWED]: Form Emotional Connections with NPCs", "[HOTTEST SINGLE]: Friendly NPCs/Crew 10% Stronger and Faster"] 
            },
            { 
                name: "Minstrel", 
                perks: ["[UNDERRATED PICK]: Create a Following of Fans", "[IDOL'S LIES]: Spread rumors to influence Political Power", "[VOCAL WILL]: Give temporary +1 Mastery to Allies"] 
            },
            { 
                name: "Virtuoso", 
                perks: ["[CHARISMATIC]: Easier time diffusing situations (d20)", "[SHINING STAR]: Create Cult-Like Followings", "[BEAUTIFUL HYMMS]: Give temporary +2 Mastery to Allies"] 
            },
            { 
                name: "Maestro", 
                perks: ["[AWARD WINNER]: Allies 20% Stronger & Faster", "[WORDS OF A STAR]: Convince OCs via d20 or talking", "[DRUMS OF LIBERATION]: Awaken knocked out Allies"] 
            },
            { 
                name: "Prophet", 
                perks: ["[???]: Locked", "[???]: Locked", "[???]: Locked"] 
            }
        ]
    },
    "Navigator": {
        jp: "航海士 (Kōkaishi)",
        desc: "A navigator is responsible for planning the journey, advising the captain, and ensuring that hazards from both climatic and geomatics are avoided.",
        tiers: [
            {
                name: "Cartographer",
                perks: ["[STARGAZER]: Basic Cartography allows them to Locate & Navigate with ease.", "[CURRENTSEEKER]: Reduces all Travel Times by Half.", "[DEAD RECKONING]: Can effectively Locate Treasure Maps."]
            },
            {
                name: "Seafarer",
                perks: ["[LOGSEEKER]: Learns usage of Log-Pose/Eternal Pose, allowing effective Navigation in Paradise.", "[WEATHERWATCH]: Travel Times are further Reduced by Half.", "[CLIMATEDANCER]: Can effectively Predict Weather and avoid such Harmful Routes."]
            },
            {
                name: "Voyager",
                perks: ["[PATHMAKER]: Can Fast-Travel among the Island Maps they Possess.", "[SEABREAKER]: Travel Times are further Reduced by Half.", "[LAST LINE]: Instantly plots an Escape Route when cornered by danger."]
            },
            {
                name: "Stormdancer",
                perks: ["[OMNISEEKER]: Learns usage of Multi-Pose/Eternal Pose, allowing effective Navigation in New World.", "[STORMDANCER]: Can effectively Break Storms and get out unscathed.", "[WORLDEYE]: Knows how to read ancient/lost sea routes, granting access to Secret Locations."]
            },
            {
                name: "VOID",
                perks: ["[???]: Locked", "[???]: Locked", "[???]: Locked"]
            }
        ]
    },
    "Archaeologist": {
        jp: "考古学者 (Kōkogakusha)",
        desc: "Someone who studies the past to identify items of worth and uncover hidden secrets lost in the river of time. Critical for uncovering the mysteries of the Void Century, ancient weapons, and the true history suppressed by the World Government .",
        tools: ["Ancient Scripts", "Relics", "Poneglyphs"],
        tiers: [
            { 
                name: "Researcher", 
                desc: "A beginner learning the basics of research and exploration .", 
                perks: [
                    "[𝐇𝐈𝐒𝐓𝐎𝐑𝐈𝐂 𝐅𝐋𝐀𝐈𝐑]: Uncover minor historical truths/lost civilizations ",
                    "[𝐅𝐎𝐑𝐓𝐔𝐍𝐄'𝐒 𝐓𝐑𝐀𝐈𝐋]: +10% Treasure Finding chance; locate maps ",
                    "[𝐑𝐔𝐍𝐄𝐖𝐇𝐈𝐒𝐏𝐄𝐑]: Interpret basic symbols/inscriptions and Meitos/Devil Fruits "
                ] 
            },
            { 
                name: "Scholar", 
                desc: "Fieldwork experience; capable of deciphering languages .", 
                perks: [
                    "[𝐆𝐋𝐘𝐏𝐇𝐒𝐏𝐄𝐀𝐊𝐄𝐑]: Decipher Poneglyphs and ancient texts ",
                    "[𝐓𝐑𝐄𝐀𝐒𝐔𝐑𝐄𝐒𝐄𝐄𝐊𝐄𝐑]: +20% Treasure Finding chance; locate maps ",
                    "[𝐓𝐑𝐀𝐂𝐄𝐑 𝐎𝐅 𝐋𝐄𝐆𝐄𝐍𝐃𝐒]: Map out lost locations and hidden cities "
                ] 
            },
            { 
                name: "Historian", 
                desc: "Expert renowned for uncovering significant secrets. Requires Knowledge from Ohara .", 
                perks: [
                    "[𝐏𝐑𝐈𝐌𝐄𝐕𝐀𝐋 𝐓𝐎𝐍𝐆𝐔𝐄]: Decipher Void Century Poneglyphs; uncover 'True History' ",
                    "[𝐆𝐋𝐈𝐍𝐓 𝐒𝐄𝐍𝐒𝐄]: +30% Treasure Finding chance; locate maps ",
                    "[𝐘𝐎𝐑𝐄]: Uncover mythical events and legendary figures "
                ] 
            },
            { 
                name: "Chronicler", 
                desc: "Advanced level capable of fact-checking world myths .", 
                perks: [
                    "[𝐌𝐘𝐓𝐇 𝐒𝐄𝐄𝐊𝐄𝐑]: Easily locate and read Road Poneglyphs ",
                    "[𝐆𝐎𝐋𝐃 𝐌𝐈𝐍𝐃]: +40% Treasure Finding chance; locate maps ",
                    "[𝐋𝐎𝐑𝐄 𝐖𝐄𝐀𝐕𝐄𝐑]: Influence how history is viewed via world-shaking secrets "
                ] 
            }
        ]
    }
};