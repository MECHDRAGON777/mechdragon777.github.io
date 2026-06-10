/* --- KAIGAN PROJECT: SIDEBAR SYSTEM v0.0.0.6 --- */
/* - Responsive Toggle Integration
    - Recursive Nesting Support
    - Uses Global config.js for Root/Paths
*/

// Logic begins - Root and Paths are pulled from config.js

const KaiganSidebar = {
    init() {
        this.render();
        this.applySavedState();
        this.addEventListeners();
    },

    render() {
        const sidebarHTML = `
            <div id="guide-sidebar">
                <div id="sidebar-toggle" title="Toggle Handbook Overlay">«</div>
                <div class="sidebar-inner">
                    <div class="sidebar-header">KAIGAN HANDBOOK</div>
                    
                    <a href="Kaigan Database.html" class="database-link" style="color: #6D9E73; border-color: #6D9E73; background: rgba(109, 158, 115, 0.1);">🏠 KAIGAN DATABASE</a>

                    <div class="super-tab">
                        <div class="super-tab-header">
                            <span class="tab-arrow">▶</span> 📂 CHARACTERS
                        </div>
                        <div class="super-tab-content">
                            <div class="sub-accordion">
                                <div class="sub-accordion-header">
                                    <span class="tab-arrow">▶</span> PIRATES
                                </div>
                                <div class="sub-accordion-content">
                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header">
                                            <span class="tab-arrow">▶</span> MELLOW PIRATES
                                        </div>
                                        <div class="sub-accordion-content">
                                            <!--<a href="${paths.characters}alva.html" class="nav-link">Alva</a>-->
                                            <a href="${paths.characters}aestella_fukuhara.html" class="nav-link">ᛖᛊᛏᛖᛚᚨ ᛞᛖᚠᚨ ᚠᚢᚲᚨᚺᚨᚱᚨ</a>
                                            <!--<a href="${paths.characters}zetsushi_sin.html" class="nav-link">Zetsushi Sin</a>-->
                                            <!--<a href="${paths.characters}tigress.html" class="nav-link">Tigress</a>-->
                                            <!--<a href="${paths.characters}lian.html" class="nav-link">Lián Huá</a>-->
                                            <a href="${paths.characters}kokone_fukuhara.html" class="nav-link">Kokone Fukuhara</a>
                                            <!--<a href="${paths.characters}sherya.html" class="nav-link">Sherya</a>-->
                                            <a href="${paths.characters}pepper.html" class="nav-link">Pepper</a>
                                            <!--<a href="${paths.characters}rexiama_ragnameil.html" class="nav-link">Rexiama Ragnameil</a>-->

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="sub-accordion">
                                <div class="sub-accordion-header">
                                    <span class="tab-arrow">▶</span> REVOLUTIONARY ARMY
                                </div>
                                <div class="sub-accordion-content">
                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header">
                                            <span class="tab-arrow">▶</span> COMMANDERS
                                        </div>
                                        <div class="sub-accordion-content">
                                            <a href="${paths.characters}rolina_yeunova.html" class="nav-link">Rolina Diana Yeunova</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="sub-accordion">
                                <div class="sub-accordion-header">
                                    <span class="tab-arrow">▶</span> MARINES
                                </div>
                                <div class="sub-accordion-content">
                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header">
                                            <span class="tab-arrow">▶</span> ???
                                        </div>
                                        <div class="sub-accordion-content">
                                            <!--<a href="${paths.characters}gorn.html" class="nav-link">Gorn</a>-->
                                            <!--<a href="${paths.characters}corvus.html" class="nav-link">Corvus</a>-->
                                            <!--<a href="${paths.characters}yeserin.html" class="nav-link">Yeserin Zeanenne Arya Xynophis</a>-->
                                            <!--<a href="${paths.characters}luck.html" class="nav-link">Luck</a>-->
                                        </div
                                    </div>
                                </div>
                            </div>
                        </div> </div> <div class="super-tab">
                        <div class="super-tab-header">
                            <span class="tab-arrow">▶</span> 📂 GUIDES
                        </div>
                        <div class="super-tab-content">
                            
                            <div class="sub-accordion">
                                <div class="sub-accordion-header">
                                    <span class="tab-arrow">▶</span> SUBMISSION GUIDES
                                </div>
                                <div class="sub-accordion-content">
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">World Requests</span>
                                        <a href="${root}guides.html#Bounty-Sub" class="nav-link">Bounty Request</a>
                                        <a href="${root}guides.html#Limit-Sub" class="nav-link">Limit Request</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Character & Growth</span>
                                        <a href="${root}guides.html#Character-Sub" class="nav-link">Character Submission</a>
                                        <a href="${root}guides.html#Progress-Log" class="nav-link">Progress Log Guide</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Mastery & Combat</span>
                                        <a href="${root}guides.html#DF-Sub" class="nav-link">Devil Fruit Submission</a>
                                        <a href="${root}guides.html#Style-Sub" class="nav-link">Fighting Style Submission</a>
                                        <a href="${root}guides.html#Tech-Sub" class="nav-link">Technique Submission</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Entities & Equipment</span>
                                        <a href="${root}guides.html#Weapon-Sub" class="nav-link">Weapon Submission</a>
                                        <a href="${root}guides.html#Craft-Sub" class="nav-link">Craft Submissions</a>
                                        <a href="${root}guides.html#Beast-Sub" class="nav-link">Beast Submissions</a>
                                        <a href="${root}guides.html#NPC-Sub" class="nav-link">NPC Submissions</a>
                                    </div>
                                </div>
                            </div>

                            <div class="sub-accordion">
                                <div class="sub-accordion-header">
                                    <span class="tab-arrow">▶</span> SYSTEM GUIDES
                                </div>
                                <div class="sub-accordion-content">
                                    
                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> COMBAT SYSTEM
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Progression" class="nav-link">Progression</a>
                                                <!--<a href="${root}systems_guide.html#Doriki" class="nav-link">Doriki</a>
                                                <a href="${root}systems_guide.html#Stacking-System" class="nav-link">Stacking System</a>
                                                <a href="${root}systems_guide.html#Power-Scaling" class="nav-link">Power Scaling</a>
                                                <a href="${root}systems_guide.html#Techniques" class="nav-link">Techniques</a>
                                                <a href="${root}systems_guide.html#Mastery" class="nav-link">Mastery</a>-->
                                            </div>
                                        </div>
                                    </div>

                                    <!--<div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> RACES
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Race-Overview" class="nav-link" style="color:#fff;">Overview</a>
                                                
                                                <span class="nav-group-label" style="color:#666;">Artificial</span>
                                                <a href="${root}systems_guide.html#Numbers" class="nav-link">Numbers</a>
                                                <a href="${root}systems_guide.html#Homies" class="nav-link">Homies</a>
                                                <a href="${root}systems_guide.html#Zombies" class="nav-link">Zombies</a>
                                                <a href="${root}systems_guide.html#Toys" class="nav-link">Toys</a>
                                                <a href="${root}systems_guide.html#Clone" class="nav-link">Clone</a>
                                                <a href="${root}systems_guide.html#Automata" class="nav-link">Automata</a>
                                                <a href="${root}systems_guide.html#Cyborg" class="nav-link">Cyborg</a>

                                                <span class="nav-group-label" style="color:#666;">Main Races</span>
                                                <a href="${root}systems_guide.html#Minks" class="nav-link">Minks</a>
                                                <a href="${root}systems_guide.html#Lizardkin" class="nav-link" style="color: #FF4B4B;">Lizardkin</a>
                                                <a href="${root}systems_guide.html#Skylander" class="nav-link" style="color: #FF4B4B;">Skylander</a>
                                                <a href="${root}systems_guide.html#Buccaneer" class="nav-link" style="color: #FF4B4B;">Buccaneer</a>
                                                <a href="${root}systems_guide.html#Dwarves" class="nav-link">Dwarves</a>
                                                <a href="${root}systems_guide.html#Humans" class="nav-link">Humans</a>
                                                <a href="${root}systems_guide.html#Fishmen" class="nav-link">Fishmen</a>
                                                <a href="${root}systems_guide.html#Giants" class="nav-link">Giants</a>
                                                <a href="${root}systems_guide.html#Oni" class="nav-link" style="color: #FF4B4B;">Oni</a>
                                                <a href="${root}systems_guide.html#Merfolk" class="nav-link" style="color: #FF4B4B;">Merfolk</a>
                                                <a href="${root}systems_guide.html#Lunarians" class="nav-link" style="color: #FF4B4B;">Lunarians</a>

                                                <span class="nav-group-label" style="color:#666;">Sub-Races</span>
                                                <a href="${root}systems_guide.html#Chimera" class="nav-link" style="color: #00BFFF;">Chimera</a>
                                                <a href="${root}systems_guide.html#Human-Animal" class="nav-link" style="color: #00BFFF;">Human Animal</a>
                                                <a href="${root}systems_guide.html#Modified-Human" class="nav-link" style="color: #00BFFF;">Modified Human</a>
                                                <a href="${root}systems_guide.html#Kuja" class="nav-link" style="color: #00BFFF;">Kuja</a>
                                                <a href="${root}systems_guide.html#Long-Limb" class="nav-link" style="color: #00BFFF;">Long-Limb</a>
                                                <a href="${root}systems_guide.html#Three-Eyed-Tribe" class="nav-link" style="color: #00BFFF;">Three-Eyed Tribe</a>
                                                <a href="${root}systems_guide.html#Hybrid" class="nav-link" style="color: #00BFFF;">Hybrid</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> TRAITS (DATABASE)
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            
                                            <div class="sub-accordion"><div class="sub-accordion-header">Auspicious</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Demon-Of-Green-Bit" class="nav-link">Demon Of Green Bit</a>
                                            <a href="${root}systems_guide.html#Demon-Of-Mokomo" class="nav-link">Demon Of Mokomo</a>
                                            <a href="${root}systems_guide.html#Demon-Of-Ryugyu" class="nav-link">Demon Of Ryugyu</a>
                                            <a href="${root}systems_guide.html#Demon-of-Shandora" class="nav-link">Demon of Shandora</a>
                                            <a href="${root}systems_guide.html#Demon-Of-Warland" class="nav-link">Demon Of Warland</a>
                                            <a href="${root}systems_guide.html#Knight-Of-The-Land" class="nav-link">Knight Of The Land</a>
                                            <a href="${root}systems_guide.html#Knight-of-the-Forest" class="nav-link">Knight of the Forest</a>
                                            <a href="${root}systems_guide.html#Knight-of-the-Sea" class="nav-link">Knight of the Sea</a>
                                            <a href="${root}systems_guide.html#Knight-of-the-Sky" class="nav-link">Knight of the Sky</a>
                                            <a href="${root}systems_guide.html#Knight-of-the-Underground" class="nav-link">Knight of the Underground</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Combat</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Blade-of-the-Rain" class="nav-link">Blade of the Rain</a>
                                            <a href="${root}systems_guide.html#Devil-Fruit-Fiend" class="nav-link">Devil Fruit Fiend</a>
                                            <a href="${root}systems_guide.html#Entei" class="nav-link">Entei</a>
                                            <a href="${root}systems_guide.html#Hakiest" class="nav-link">Hakiest</a>
                                            <a href="${root}systems_guide.html#Hawk-Eye" class="nav-link">Hawk-Eye</a>
                                            <a href="${root}systems_guide.html#Mountain-Breaker" class="nav-link">Mountain Breaker</a>
                                            <a href="${root}systems_guide.html#Mountain-Wind" class="nav-link">Mountain Wind</a>
                                            <a href="${root}systems_guide.html#The-Chaser" class="nav-link">The Chaser</a>
                                            <a href="${root}systems_guide.html#The-Sleeping-Demon" class="nav-link">The Sleeping Demon</a>
                                            <a href="${root}systems_guide.html#The-Supersonic" class="nav-link">The Supersonic</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Duo</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Ancient-Legend" class="nav-link">Ancient Legend</a>
                                            <a href="${root}systems_guide.html#Justice-Legend" class="nav-link">Justice Legend</a>
                                            <a href="${root}systems_guide.html#Twin-Legend" class="nav-link">Twin Legend</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Hero</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Absolute-Hero" class="nav-link">Absolute Hero</a>
                                            <a href="${root}systems_guide.html#Benevolent-Hero" class="nav-link">Benevolent Hero</a>
                                            <a href="${root}systems_guide.html#Honest-Hero" class="nav-link">Honest Hero</a>
                                            <a href="${root}systems_guide.html#Iron-Hero" class="nav-link">Iron Hero</a>
                                            <a href="${root}systems_guide.html#Patriotic-Hero" class="nav-link">Patriotic Hero</a>
                                            <a href="${root}systems_guide.html#Pragmatic-Hero" class="nav-link">Pragmatic Hero</a>
                                            <a href="${root}systems_guide.html#Rotten-Hero" class="nav-link">Rotten Hero</a>
                                            <a href="${root}systems_guide.html#Timid-Hero" class="nav-link">Timid Hero</a>
                                            <a href="${root}systems_guide.html#Unclear-Hero" class="nav-link">Unclear Hero</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Hunter</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Marine-Hunter" class="nav-link">Marine Hunter</a>
                                            <a href="${root}systems_guide.html#Minority-Hunter" class="nav-link">Minority Hunter</a>
                                            <a href="${root}systems_guide.html#Pirate-Hunter" class="nav-link">Pirate Hunter</a>
                                            <a href="${root}systems_guide.html#Supremacy-Hunter" class="nav-link">Supremacy Hunter</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Lineage</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Doldo-Heir" class="nav-link">Doldo Heir</a>
                                            <a href="${root}systems_guide.html#Heavenly-Yaksha" class="nav-link">Heavenly Yaksha</a>
                                            <a href="${root}systems_guide.html#Kozuki-Heir" class="nav-link">Kozuki Heir</a>
                                            <a href="${root}systems_guide.html#Nefertari-Heir" class="nav-link">Nefertari Heir</a>
                                            <a href="${root}systems_guide.html#Nepo-Baby" class="nav-link">Nepo Baby</a>
                                            <a href="${root}systems_guide.html#Nepo-Bastard" class="nav-link">Nepo Bastard</a>
                                            <a href="${root}systems_guide.html#Neptune-Heir" class="nav-link">Neptune Heir</a>
                                            <a href="${root}systems_guide.html#Newkama-Emporio" class="nav-link">Newkama Emporio</a>
                                            <a href="${root}systems_guide.html#SUUPER" class="nav-link">SUUPER!</a>
                                            <a href="${root}systems_guide.html#Shimotsuki-Clan" class="nav-link">Shimotsuki Clan</a>
                                            <a href="${root}systems_guide.html#Snake-Princess" class="nav-link">Snake Princess</a>
                                            <a href="${root}systems_guide.html#Will-of-D" class="nav-link">Will of D.</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Masters</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Masters-Mentor-Marines" class="nav-link">Master's Mentor (Marines)</a>
                                            <a href="${root}systems_guide.html#Masters-Mentor-Pirate" class="nav-link">Master's Mentor (Pirate)</a>
                                            <a href="${root}systems_guide.html#Masters-Pursuit" class="nav-link">Master's Pursuit</a>
                                            <a href="${root}systems_guide.html#Masters-Strategist" class="nav-link">Master's Strategist</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Profession Traits</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Beastborn" class="nav-link">Beastborn</a>
                                            <a href="${root}systems_guide.html#Death-Practitioner" class="nav-link">Death Practitioner</a>
                                            <a href="${root}systems_guide.html#Double-Agent" class="nav-link">Double-Agent</a>
                                            <a href="${root}systems_guide.html#Dreambroker" class="nav-link">Dreambroker</a>
                                            <a href="${root}systems_guide.html#Enchantress" class="nav-link">Enchantress</a>
                                            <a href="${root}systems_guide.html#Icebreaker" class="nav-link">Icebreaker</a>
                                            <a href="${root}systems_guide.html#Mad-Thinker" class="nav-link">Mad Thinker</a>
                                            <a href="${root}systems_guide.html#Sea-Tamer" class="nav-link">Sea-Tamer</a>
                                            <a href="${root}systems_guide.html#Seared-Saviour" class="nav-link">Seared Saviour</a>
                                            <a href="${root}systems_guide.html#Soul-Player" class="nav-link">Soul Player</a>
                                            <a href="${root}systems_guide.html#Truthseeker" class="nav-link">Truthseeker</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Rebel</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Absolute-Rebel" class="nav-link">Absolute Rebel</a>
                                            <a href="${root}systems_guide.html#Expressive-Rebel" class="nav-link">Expressive Rebel</a>
                                            <a href="${root}systems_guide.html#Liberation-Rebel" class="nav-link">Liberation Rebel</a>
                                            <a href="${root}systems_guide.html#Martyr-Rebel" class="nav-link">Martyr Rebel</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Seeker</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Dream-Seeker" class="nav-link">Dream Seeker</a>
                                            <a href="${root}systems_guide.html#Freedom-Seeker" class="nav-link">Freedom Seeker</a>
                                            <a href="${root}systems_guide.html#Justice-Seeker" class="nav-link">Justice Seeker</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Status</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Hoof-Of-The-Common" class="nav-link">Hoof Of The Common</a>
                                            <a href="${root}systems_guide.html#Hoof-of-the-Dragon" class="nav-link">Hoof of the Dragon</a>
                                            <a href="${root}systems_guide.html#Hoof-of-the-Scum" class="nav-link">Hoof of the Scum</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Support</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Armada" class="nav-link">Armada</a>
                                            <a href="${root}systems_guide.html#Breath-of-All-Things" class="nav-link">Breath of All Things</a>
                                            <a href="${root}systems_guide.html#Cat-Burglar" class="nav-link">Cat Burglar</a>
                                            <a href="${root}systems_guide.html#Fan-Favorite" class="nav-link">Fan Favorite</a>
                                            <a href="${root}systems_guide.html#Life-Return" class="nav-link">Life Return</a>
                                            <a href="${root}systems_guide.html#Senor" class="nav-link">Senor</a>
                                            <a href="${root}systems_guide.html#Shuron-Hakke" class="nav-link">Shuron Hakke</a>
                                            <a href="${root}systems_guide.html#Sworn-Nakama" class="nav-link">Sworn Nakama</a>
                                            <a href="${root}systems_guide.html#The-Oracle" class="nav-link">The Oracle</a>
                                            <a href="${root}systems_guide.html#Ultimate-Glazer" class="nav-link">Ultimate Glazer</a>
                                            <a href="${root}systems_guide.html#Voice-of-All-Things" class="nav-link">Voice of All Things</a>
                                            <a href="${root}systems_guide.html#Wrath-of-Gluttony" class="nav-link">Wrath of Gluttony</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Title</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Ally-Of-The-World" class="nav-link">Ally Of The World</a>
                                            <a href="${root}systems_guide.html#Bravest-Warrior" class="nav-link">Bravest Warrior</a>
                                            <a href="${root}systems_guide.html#Brotherhood" class="nav-link">Brotherhood</a>
                                            <a href="${root}systems_guide.html#Dark-Knight" class="nav-link">Dark Knight</a>
                                            <a href="${root}systems_guide.html#Devils-Child" class="nav-link">Devil's Child</a>
                                            <a href="${root}systems_guide.html#Enemy-Of-The-World" class="nav-link">Enemy Of The World</a>
                                            <a href="${root}systems_guide.html#Falling-Upwards" class="nav-link">Falling Upwards</a>
                                            <a href="${root}systems_guide.html#Final-Wager" class="nav-link">Final Wager</a>
                                            <a href="${root}systems_guide.html#Generational-Genius" class="nav-link">Generational Genius</a>
                                            <a href="${root}systems_guide.html#Guardian-Of-Heaven" class="nav-link">Guardian Of Heaven</a>
                                            <a href="${root}systems_guide.html#Guardian-of-Hell" class="nav-link">Guardian of Hell</a>
                                            <a href="${root}systems_guide.html#Kingpin" class="nav-link">Kingpin</a>
                                            <a href="${root}systems_guide.html#Mad-Monk" class="nav-link">Mad Monk</a>
                                            <a href="${root}systems_guide.html#Roar-Of-The-Sea" class="nav-link">Roar Of The Sea</a>
                                            <a href="${root}systems_guide.html#Sword-Of-Freedom" class="nav-link">Sword Of Freedom</a>
                                            <a href="${root}systems_guide.html#Sword-of-Justice" class="nav-link">Sword of Justice</a>
                                            <a href="${root}systems_guide.html#White-Knight" class="nav-link">White Knight</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Unparalleled</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Beast-of-All-Beast" class="nav-link">Beast of All Beast</a>
                                            <a href="${root}systems_guide.html#Command-of-All-Commands" class="nav-link">Command of All Commands</a>
                                            <a href="${root}systems_guide.html#Fallen-Of-All-Fallen" class="nav-link">Fallen Of All Fallen</a>
                                            <a href="${root}systems_guide.html#Father-of-All-Fathers" class="nav-link">Father of All Fathers</a>
                                            <a href="${root}systems_guide.html#Fool-of-All-Fools" class="nav-link">Fool of All Fools</a>
                                            <a href="${root}systems_guide.html#Liar-of-All-Liars" class="nav-link">Liar of All Liars</a>
                                            <a href="${root}systems_guide.html#Mother-of-All-Mothers" class="nav-link">Mother of All Mothers</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Void</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Champion-of-Gods" class="nav-link">Champion of Gods</a>
                                            <a href="${root}systems_guide.html#Child-of-Desire" class="nav-link">Child of Desire</a>
                                            <a href="${root}systems_guide.html#Child-Of-Destiny" class="nav-link">Child Of Destiny</a>
                                            <a href="${root}systems_guide.html#Child-Of-Freedom" class="nav-link">Child Of Freedom</a>
                                            <a href="${root}systems_guide.html#King-of-All-Kings" class="nav-link">King of All Kings</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Weapon</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Damned-Weapon" class="nav-link">Damned Weapon</a>
                                            <a href="${root}systems_guide.html#Death-Weapon" class="nav-link">Death Weapon</a>
                                            <a href="${root}systems_guide.html#Disaster-Weapon" class="nav-link">Disaster Weapon</a>
                                            <a href="${root}systems_guide.html#Divine-Weapon" class="nav-link">Divine Weapon</a>
                                            <a href="${root}systems_guide.html#Genius-Weapon" class="nav-link">Genius Weapon</a>
                                            <a href="${root}systems_guide.html#Host-Weapon" class="nav-link">Host Weapon</a>
                                            <a href="${root}systems_guide.html#Human-Weapon" class="nav-link">Human Weapon</a>
                                            <a href="${root}systems_guide.html#Massacre-Weapon" class="nav-link">Massacre Weapon</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Will</div><div class="sub-accordion-content">
                                            <a href="${root}systems_guide.html#Inheritor-Of-Wills" class="nav-link">Inheritor Of Wills</a>
                                            <a href="${root}systems_guide.html#Usurper-Of-Wills" class="nav-link">Usurper Of Wills</a>
                                            </div></div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> PROFESSIONS
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Infiltrator" class="nav-link">Infiltrator</a>
                                                <a href="${root}systems_guide.html#Merchant" class="nav-link">Merchant</a>
                                                <a href="${root}systems_guide.html#Beast-Tamer" class="nav-link">Beast Tamer</a>
                                                <a href="${root}systems_guide.html#Weaponsmith" class="nav-link">Weaponsmith</a>
                                                <a href="${root}systems_guide.html#Chef" class="nav-link">Chef</a>
                                                <a href="${root}systems_guide.html#Entertainer" class="nav-link">Entertainer</a>
                                                <a href="${root}systems_guide.html#Archaeologist" class="nav-link">Archaeologist</a>
                                                <a href="${root}systems_guide.html#Scientist" class="nav-link">Scientist</a>
                                                <a href="${root}systems_guide.html#Doctor" class="nav-link">Doctor</a>
                                                <a href="${root}systems_guide.html#Shipwright" class="nav-link">Shipwright</a>
                                                <a href="${root}systems_guide.html#Navigator" class="nav-link">Navigator</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> FIGHTING STYLE
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Marksman" class="nav-link">Marksman</a>
                                                <a href="${root}systems_guide.html#Ninjutsu" class="nav-link">Ninjutsu</a>
                                                <a href="${root}systems_guide.html#Wrestling" class="nav-link">Wrestling</a>
                                                <a href="${root}systems_guide.html#Rope-Action" class="nav-link">Rope Action</a>
                                                <a href="${root}systems_guide.html#Foxfire-Style" class="nav-link">Foxfire Style</a>
                                                <a href="${root}systems_guide.html#Boxing" class="nav-link">Boxing</a>
                                                <a href="${root}systems_guide.html#Brutemancy" class="nav-link">Brutemancy</a>
                                                <a href="${root}systems_guide.html#Okama-Kenpo" class="nav-link">Okama Kenpo</a>
                                                <a href="${root}systems_guide.html#Blademanship" class="nav-link">Blademanship</a>
                                                <a href="${root}systems_guide.html#Brawler" class="nav-link">Brawler</a>
                                                <a href="${root}systems_guide.html#Dragon-Claw" class="nav-link">Dragon Claw</a>
                                                <a href="${root}systems_guide.html#Rokushiki" class="nav-link">Rokushiki</a>
                                                <a href="${root}systems_guide.html#Hasshoken" class="nav-link">Hasshoken</a>
                                                <a href="${root}systems_guide.html#Black-Leg" class="nav-link">Black-Leg</a>
                                                <a href="${root}systems_guide.html#Weathermancy" class="nav-link">Weathermancy</a>
                                                <a href="${root}systems_guide.html#Fishman-Jujutsu" class="nav-link">Fishman Jujutsu</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #00FFFF;">
                                            <span class="tab-arrow">▶</span> SET 2: EQUIPMENT
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Swords-Meito" class="nav-link">Swords (Meito)</a>
                                                <a href="${root}systems_guide.html#Guns-Meijo" class="nav-link">Guns (Meijo)</a>
                                                <a href="${root}systems_guide.html#Inventions" class="nav-link">Inventions</a>
                                                <a href="${root}systems_guide.html#Tames" class="nav-link">Tames</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #FFA500;">
                                            <span class="tab-arrow">▶</span> SET 3: MISC
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="${root}systems_guide.html#Territory-Conquest" class="nav-link">Territory Conquest</a>
                                                <a href="${root}systems_guide.html#Inherited-Will" class="nav-link">Inherited Will</a>
                                                <a href="${root}systems_guide.html#Ships" class="nav-link">Ships</a>
                                                <a href="${root}systems_guide.html#Travel" class="nav-link">Travel</a>
                                                <a href="${root}systems_guide.html#Research" class="nav-link">Research</a>
                                                <a href="${root}systems_guide.html#Recipe" class="nav-link">Recipe</a>
                                                <a href="${root}systems_guide.html#Taming" class="nav-link">Taming</a>
                                                <a href="${root}systems_guide.html#Honor" class="nav-link">Honor</a>
                                                <a href="${root}systems_guide.html#Prejudice" class="nav-link">Prejudice</a>
                                                <a href="${root}systems_guide.html#Economy" class="nav-link">Economy</a>
                                                <a href="${root}systems_guide.html#Treasure" class="nav-link">Treasure</a>
                                            </div>
                                        </div>
                                    </div>-->

                                    <div class="nav-group" style="padding-top:10px;">
                                        <a href="${root}/devil_fruits/encyclopedia_redacted.html" class="nav-link" style="color:#BB86FC;">📙 DEVIL FRUIT ENCYCLOPEDIA</a>
                                    </div><!--

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="super-tab">
                        <div class="super-tab-header">
                            <span class="tab-arrow">▶</span> 📝 TEMPLATES
                        </div>
                        <div class="super-tab-content">
                            <div class="nav-group">
                                <span class="nav-group-label" style="color: #BB86FC;">Character</span>
                                <a href="/template/character.html" class="nav-link">Character Dossier</a>
                                <a href="/template/progression.html" class="nav-link">Progression Log</a>
                            </div>
                            <div class="nav-group">
                                <span class="nav-group-label" style="color: #BB86FC;">Mastery & Combat</span>
                                <a href="/template/devil-fruit.html" class="nav-link">Devil Fruit</a>
                                <a href="/template/fighting-style.html" class="nav-link">Fighting Style</a>
                                <a href="/template/technique.html" class="nav-link">Technique</a>
                            </div>
                            <div class="nav-group">
                                <span class="nav-group-label" style="color: #BB86FC;">Entities & Equipment</span>
                                <a href="/template/weapon.html" class="nav-link">Weapon</a>
                                <a href="/template/crafts.html" class="nav-link">Crafts</a>
                                <a href="/template/beast.html" class="nav-link">Beast</a>
                                <a href="/template/npc.html" class="nav-link">NPC</a>
                            </div>
                        </div>
                    </div>-->

                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    },
    
    applySavedState() {
        const sidebar = document.getElementById('guide-sidebar');
        const toggle = document.getElementById('sidebar-toggle');
        const isCollapsed = localStorage.getItem('kaigan-sidebar-collapsed') === 'true';

        if (isCollapsed && sidebar) {
            sidebar.classList.add('collapsed');
            if (toggle) toggle.innerText = '»';
        }
    },

    addEventListeners() {
        const sidebar = document.getElementById('guide-sidebar');
        const toggle = document.getElementById('sidebar-toggle');

        if (toggle) {
            toggle.addEventListener('click', () => {
                const collapsed = sidebar.classList.toggle('collapsed');
                toggle.innerText = collapsed ? '»' : '«';
                localStorage.setItem('kaigan-sidebar-collapsed', collapsed);
            });
        }

        // Handle Super Tab Toggles
        document.querySelectorAll('.super-tab-header').forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('open');
            });
        });

        // Handle Sub-Accordion Toggles
        document.querySelectorAll('.sub-accordion-header').forEach(header => {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                header.parentElement.classList.toggle('open');
            });
        });

        // Smart Navigation Logic
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        history.pushState(null, null, href);
                        if (typeof window.handleHash === 'function') window.handleHash();
                    } else {
                        // Check which guide page the ID belongs to
                        const isSystemId = [
                            "Combat-System", "Progression", "Doriki", "Stacking-System", "Power-Scaling", "Techniques", "Mastery",
                            "Race-Overview", "Humans", "Minks", "Fishmen", "Giants", "Cyborg", "Buccaneer", "Lunarians", "Oni", "Merfolk",
                            "Traits-Overview", "Hero", "Rebel", "Title", "Duo", "Support", "Unparalleled", "Profession", "Combat", "Void", "Weapon", "Auspicious", "Lineage", "Seeker", "Status", "Will", "Hunter", "Masters",
                            "Professions", "Fighting-Style", "Swords-Meito", "Guns-Meijo", "Inventions", "Tames",
                            "Territory-Conquest", "Inherited-Will", "Ships", "Travel", "Research", "Recipe", "Taming", "Honor", "Prejudice", "Economy", "Treasure", "Infamy-System", "Marine-Rank-System", "World-Map", "Black-Market", "Daily-Routine"
                        ].includes(targetId);

                        window.location.href = (isSystemId ? "systems_guide.html" : "guides.html") + href;
                    }
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => KaiganSidebar.init());