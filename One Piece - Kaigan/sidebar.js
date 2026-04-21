/* --- KAIGAN PROJECT: SIDEBAR SYSTEM v5.2 --- */
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
                                        <a href="#Bounty-Sub" class="nav-link">Bounty Request</a>
                                        <a href="#Limit-Sub" class="nav-link">Limit Request</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Character & Growth</span>
                                        <a href="#Character-Sub" class="nav-link">Character Submission</a>
                                        <a href="#Progress-Log" class="nav-link">Progress Log Guide</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Mastery & Combat</span>
                                        <a href="#DF-Sub" class="nav-link">Devil Fruit Submission</a>
                                        <a href="#Style-Sub" class="nav-link">Fighting Style Submission</a>
                                        <a href="#Tech-Sub" class="nav-link">Technique Submission</a>
                                    </div>
                                    <div class="nav-group">
                                        <span class="nav-group-label" style="color: #BB86FC;">Entities & Equipment</span>
                                        <a href="#Weapon-Sub" class="nav-link">Weapon Submission</a>
                                        <a href="#Craft-Sub" class="nav-link">Craft Submissions</a>
                                        <a href="#Beast-Sub" class="nav-link">Beast Submissions</a>
                                        <a href="#NPC-Sub" class="nav-link">NPC Submissions</a>
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
                                                <a href="#Combat-System" class="nav-link">Main Overview</a>
                                                <a href="#Progression" class="nav-link">Progression</a>
                                                <a href="#Doriki" class="nav-link">Doriki</a>
                                                <a href="#Stacking-System" class="nav-link">Stacking System</a>
                                                <a href="#Power-Scaling" class="nav-link">Power Scaling</a>
                                                <a href="#Techniques" class="nav-link">Techniques</a>
                                                <a href="#Mastery" class="nav-link">Mastery</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> RACES
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="#Race-Overview" class="nav-link" style="color:#fff;">Overview</a>
                                                
                                                <span class="nav-group-label" style="color:#666;">Artificial</span>
                                                <a href="#Numbers" class="nav-link">Numbers</a>
                                                <a href="#Homies" class="nav-link">Homies</a>
                                                <a href="#Zombies" class="nav-link">Zombies</a>
                                                <a href="#Toys" class="nav-link">Toys</a>
                                                <a href="#Clone" class="nav-link">Clone</a>
                                                <a href="#Automata" class="nav-link">Automata</a>
                                                <a href="#Cyborg" class="nav-link">Cyborg</a>

                                                <span class="nav-group-label" style="color:#666;">Main Races</span>
                                                <a href="#Minks" class="nav-link">Minks</a>
                                                <a href="#Lizardkin" class="nav-link" style="color: #FF4B4B;">Lizardkin</a>
                                                <a href="#Skylander" class="nav-link" style="color: #FF4B4B;">Skylander</a>
                                                <a href="#Buccaneer" class="nav-link" style="color: #FF4B4B;">Buccaneer</a>
                                                <a href="#Dwarves" class="nav-link">Dwarves</a>
                                                <a href="#Humans" class="nav-link">Humans</a>
                                                <a href="#Fishmen" class="nav-link">Fishmen</a>
                                                <a href="#Giants" class="nav-link">Giants</a>
                                                <a href="#Oni" class="nav-link" style="color: #FF4B4B;">Oni</a>
                                                <a href="#Merfolk" class="nav-link" style="color: #FF4B4B;">Merfolk</a>
                                                <a href="#Lunarians" class="nav-link" style="color: #FF4B4B;">Lunarians</a>

                                                <span class="nav-group-label" style="color:#666;">Sub-Races</span>
                                                <a href="#Chimera" class="nav-link" style="color: #00BFFF;">Chimera</a>
                                                <a href="#Human-Animal" class="nav-link" style="color: #00BFFF;">Human Animal</a>
                                                <a href="#Modified-Human" class="nav-link" style="color: #00BFFF;">Modified Human</a>
                                                <a href="#Kuja" class="nav-link" style="color: #00BFFF;">Kuja</a>
                                                <a href="#Long-Limb" class="nav-link" style="color: #00BFFF;">Long-Limb</a>
                                                <a href="#Three-Eyed-Tribe" class="nav-link" style="color: #00BFFF;">Three-Eyed Tribe</a>
                                                <a href="#Hybrid" class="nav-link" style="color: #00BFFF;">Hybrid</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> TRAITS (DATABASE)
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            
                                            <div class="sub-accordion"><div class="sub-accordion-header">Auspicious</div><div class="sub-accordion-content">
                                            <a href="#Demon-Of-Green-Bit" class="nav-link">Demon Of Green Bit</a>
                                            <a href="#Demon-Of-Mokomo" class="nav-link">Demon Of Mokomo</a>
                                            <a href="#Demon-Of-Ryugyu" class="nav-link">Demon Of Ryugyu</a>
                                            <a href="#Demon-of-Shandora" class="nav-link">Demon of Shandora</a>
                                            <a href="#Demon-Of-Warland" class="nav-link">Demon Of Warland</a>
                                            <a href="#Knight-Of-The-Land" class="nav-link">Knight Of The Land</a>
                                            <a href="#Knight-of-the-Forest" class="nav-link">Knight of the Forest</a>
                                            <a href="#Knight-of-the-Sea" class="nav-link">Knight of the Sea</a>
                                            <a href="#Knight-of-the-Sky" class="nav-link">Knight of the Sky</a>
                                            <a href="#Knight-of-the-Underground" class="nav-link">Knight of the Underground</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Combat</div><div class="sub-accordion-content">
                                            <a href="#Blade-of-the-Rain" class="nav-link">Blade of the Rain</a>
                                            <a href="#Devil-Fruit-Fiend" class="nav-link">Devil Fruit Fiend</a>
                                            <a href="#Entei" class="nav-link">Entei</a>
                                            <a href="#Hakiest" class="nav-link">Hakiest</a>
                                            <a href="#Hawk-Eye" class="nav-link">Hawk-Eye</a>
                                            <a href="#Mountain-Breaker" class="nav-link">Mountain Breaker</a>
                                            <a href="#Mountain-Wind" class="nav-link">Mountain Wind</a>
                                            <a href="#The-Chaser" class="nav-link">The Chaser</a>
                                            <a href="#The-Sleeping-Demon" class="nav-link">The Sleeping Demon</a>
                                            <a href="#The-Supersonic" class="nav-link">The Supersonic</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Duo</div><div class="sub-accordion-content">
                                            <a href="#Ancient-Legend" class="nav-link">Ancient Legend</a>
                                            <a href="#Justice-Legend" class="nav-link">Justice Legend</a>
                                            <a href="#Twin-Legend" class="nav-link">Twin Legend</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Hero</div><div class="sub-accordion-content">
                                            <a href="#Absolute-Hero" class="nav-link">Absolute Hero</a>
                                            <a href="#Benevolent-Hero" class="nav-link">Benevolent Hero</a>
                                            <a href="#Honest-Hero" class="nav-link">Honest Hero</a>
                                            <a href="#Iron-Hero" class="nav-link">Iron Hero</a>
                                            <a href="#Patriotic-Hero" class="nav-link">Patriotic Hero</a>
                                            <a href="#Pragmatic-Hero" class="nav-link">Pragmatic Hero</a>
                                            <a href="#Rotten-Hero" class="nav-link">Rotten Hero</a>
                                            <a href="#Timid-Hero" class="nav-link">Timid Hero</a>
                                            <a href="#Unclear-Hero" class="nav-link">Unclear Hero</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Hunter</div><div class="sub-accordion-content">
                                            <a href="#Marine-Hunter" class="nav-link">Marine Hunter</a>
                                            <a href="#Minority-Hunter" class="nav-link">Minority Hunter</a>
                                            <a href="#Pirate-Hunter" class="nav-link">Pirate Hunter</a>
                                            <a href="#Supremacy-Hunter" class="nav-link">Supremacy Hunter</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Lineage</div><div class="sub-accordion-content">
                                            <a href="#Doldo-Heir" class="nav-link">Doldo Heir</a>
                                            <a href="#Heavenly-Yaksha" class="nav-link">Heavenly Yaksha</a>
                                            <a href="#Kozuki-Heir" class="nav-link">Kozuki Heir</a>
                                            <a href="#Nefertari-Heir" class="nav-link">Nefertari Heir</a>
                                            <a href="#Nepo-Baby" class="nav-link">Nepo Baby</a>
                                            <a href="#Nepo-Bastard" class="nav-link">Nepo Bastard</a>
                                            <a href="#Neptune-Heir" class="nav-link">Neptune Heir</a>
                                            <a href="#Newkama-Emporio" class="nav-link">Newkama Emporio</a>
                                            <a href="#SUUPER" class="nav-link">SUUPER!</a>
                                            <a href="#Shimotsuki-Clan" class="nav-link">Shimotsuki Clan</a>
                                            <a href="#Snake-Princess" class="nav-link">Snake Princess</a>
                                            <a href="#Will-of-D" class="nav-link">Will of D.</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Masters</div><div class="sub-accordion-content">
                                            <a href="#Masters-Mentor-Marines" class="nav-link">Master's Mentor (Marines)</a>
                                            <a href="#Masters-Mentor-Pirate" class="nav-link">Master's Mentor (Pirate)</a>
                                            <a href="#Masters-Pursuit" class="nav-link">Master's Pursuit</a>
                                            <a href="#Masters-Strategist" class="nav-link">Master's Strategist</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Profession Traits</div><div class="sub-accordion-content">
                                            <a href="#Beastborn" class="nav-link">Beastborn</a>
                                            <a href="#Death-Practitioner" class="nav-link">Death Practitioner</a>
                                            <a href="#Double-Agent" class="nav-link">Double-Agent</a>
                                            <a href="#Dreambroker" class="nav-link">Dreambroker</a>
                                            <a href="#Enchantress" class="nav-link">Enchantress</a>
                                            <a href="#Icebreaker" class="nav-link">Icebreaker</a>
                                            <a href="#Mad-Thinker" class="nav-link">Mad Thinker</a>
                                            <a href="#Sea-Tamer" class="nav-link">Sea-Tamer</a>
                                            <a href="#Seared-Saviour" class="nav-link">Seared Saviour</a>
                                            <a href="#Soul-Player" class="nav-link">Soul Player</a>
                                            <a href="#Truthseeker" class="nav-link">Truthseeker</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Rebel</div><div class="sub-accordion-content">
                                            <a href="#Absolute-Rebel" class="nav-link">Absolute Rebel</a>
                                            <a href="#Expressive-Rebel" class="nav-link">Expressive Rebel</a>
                                            <a href="#Liberation-Rebel" class="nav-link">Liberation Rebel</a>
                                            <a href="#Martyr-Rebel" class="nav-link">Martyr Rebel</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Seeker</div><div class="sub-accordion-content">
                                            <a href="#Dream-Seeker" class="nav-link">Dream Seeker</a>
                                            <a href="#Freedom-Seeker" class="nav-link">Freedom Seeker</a>
                                            <a href="#Justice-Seeker" class="nav-link">Justice Seeker</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Status</div><div class="sub-accordion-content">
                                            <a href="#Hoof-Of-The-Common" class="nav-link">Hoof Of The Common</a>
                                            <a href="#Hoof-of-the-Dragon" class="nav-link">Hoof of the Dragon</a>
                                            <a href="#Hoof-of-the-Scum" class="nav-link">Hoof of the Scum</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Support</div><div class="sub-accordion-content">
                                            <a href="#Armada" class="nav-link">Armada</a>
                                            <a href="#Breath-of-All-Things" class="nav-link">Breath of All Things</a>
                                            <a href="#Cat-Burglar" class="nav-link">Cat Burglar</a>
                                            <a href="#Fan-Favorite" class="nav-link">Fan Favorite</a>
                                            <a href="#Life-Return" class="nav-link">Life Return</a>
                                            <a href="#Senor" class="nav-link">Senor</a>
                                            <a href="#Shuron-Hakke" class="nav-link">Shuron Hakke</a>
                                            <a href="#Sworn-Nakama" class="nav-link">Sworn Nakama</a>
                                            <a href="#The-Oracle" class="nav-link">The Oracle</a>
                                            <a href="#Ultimate-Glazer" class="nav-link">Ultimate Glazer</a>
                                            <a href="#Voice-of-All-Things" class="nav-link">Voice of All Things</a>
                                            <a href="#Wrath-of-Gluttony" class="nav-link">Wrath of Gluttony</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Title</div><div class="sub-accordion-content">
                                            <a href="#Ally-Of-The-World" class="nav-link">Ally Of The World</a>
                                            <a href="#Bravest-Warrior" class="nav-link">Bravest Warrior</a>
                                            <a href="#Brotherhood" class="nav-link">Brotherhood</a>
                                            <a href="#Dark-Knight" class="nav-link">Dark Knight</a>
                                            <a href="#Devils-Child" class="nav-link">Devil's Child</a>
                                            <a href="#Enemy-Of-The-World" class="nav-link">Enemy Of The World</a>
                                            <a href="#Falling-Upwards" class="nav-link">Falling Upwards</a>
                                            <a href="#Final-Wager" class="nav-link">Final Wager</a>
                                            <a href="#Generational-Genius" class="nav-link">Generational Genius</a>
                                            <a href="#Guardian-Of-Heaven" class="nav-link">Guardian Of Heaven</a>
                                            <a href="#Guardian-of-Hell" class="nav-link">Guardian of Hell</a>
                                            <a href="#Kingpin" class="nav-link">Kingpin</a>
                                            <a href="#Mad-Monk" class="nav-link">Mad Monk</a>
                                            <a href="#Roar-Of-The-Sea" class="nav-link">Roar Of The Sea</a>
                                            <a href="#Sword-Of-Freedom" class="nav-link">Sword Of Freedom</a>
                                            <a href="#Sword-of-Justice" class="nav-link">Sword of Justice</a>
                                            <a href="#White-Knight" class="nav-link">White Knight</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Unparalleled</div><div class="sub-accordion-content">
                                            <a href="#Beast-of-All-Beast" class="nav-link">Beast of All Beast</a>
                                            <a href="#Command-of-All-Commands" class="nav-link">Command of All Commands</a>
                                            <a href="#Fallen-Of-All-Fallen" class="nav-link">Fallen Of All Fallen</a>
                                            <a href="#Father-of-All-Fathers" class="nav-link">Father of All Fathers</a>
                                            <a href="#Fool-of-All-Fools" class="nav-link">Fool of All Fools</a>
                                            <a href="#Liar-of-All-Liars" class="nav-link">Liar of All Liars</a>
                                            <a href="#Mother-of-All-Mothers" class="nav-link">Mother of All Mothers</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Void</div><div class="sub-accordion-content">
                                            <a href="#Champion-of-Gods" class="nav-link">Champion of Gods</a>
                                            <a href="#Child-of-Desire" class="nav-link">Child of Desire</a>
                                            <a href="#Child-Of-Destiny" class="nav-link">Child Of Destiny</a>
                                            <a href="#Child-Of-Freedom" class="nav-link">Child Of Freedom</a>
                                            <a href="#King-of-All-Kings" class="nav-link">King of All Kings</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Weapon</div><div class="sub-accordion-content">
                                            <a href="#Damned-Weapon" class="nav-link">Damned Weapon</a>
                                            <a href="#Death-Weapon" class="nav-link">Death Weapon</a>
                                            <a href="#Disaster-Weapon" class="nav-link">Disaster Weapon</a>
                                            <a href="#Divine-Weapon" class="nav-link">Divine Weapon</a>
                                            <a href="#Genius-Weapon" class="nav-link">Genius Weapon</a>
                                            <a href="#Host-Weapon" class="nav-link">Host Weapon</a>
                                            <a href="#Human-Weapon" class="nav-link">Human Weapon</a>
                                            <a href="#Massacre-Weapon" class="nav-link">Massacre Weapon</a>
                                            </div></div>

                                            <div class="sub-accordion"><div class="sub-accordion-header">Will</div><div class="sub-accordion-content">
                                            <a href="#Inheritor-Of-Wills" class="nav-link">Inheritor Of Wills</a>
                                            <a href="#Usurper-Of-Wills" class="nav-link">Usurper Of Wills</a>
                                            </div></div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> PROFESSIONS
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="#Infiltrator" class="nav-link">Infiltrator</a>
                                                <a href="#Merchant" class="nav-link">Merchant</a>
                                                <a href="#Beast-Tamer" class="nav-link">Beast Tamer</a>
                                                <a href="#Weaponsmith" class="nav-link">Weaponsmith</a>
                                                <a href="#Chef" class="nav-link">Chef</a>
                                                <a href="#Entertainer" class="nav-link">Entertainer</a>
                                                <a href="#Archaeologist" class="nav-link">Archaeologist</a>
                                                <a href="#Scientist" class="nav-link">Scientist</a>
                                                <a href="#Doctor" class="nav-link">Doctor</a>
                                                <a href="#Shipwright" class="nav-link">Shipwright</a>
                                                <a href="#Navigator" class="nav-link">Navigator</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #BB86FC;">
                                            <span class="tab-arrow">▶</span> FIGHTING STYLE
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="#Marksman" class="nav-link">Marksman</a>
                                                <a href="#Ninjutsu" class="nav-link">Ninjutsu</a>
                                                <a href="#Wrestling" class="nav-link">Wrestling</a>
                                                <a href="#Rope-Action" class="nav-link">Rope Action</a>
                                                <a href="#Foxfire-Style" class="nav-link">Foxfire Style</a>
                                                <a href="#Boxing" class="nav-link">Boxing</a>
                                                <a href="#Brutemancy" class="nav-link">Brutemancy</a>
                                                <a href="#Okama-Kenpo" class="nav-link">Okama Kenpo</a>
                                                <a href="#Blademanship" class="nav-link">Blademanship</a>
                                                <a href="#Brawler" class="nav-link">Brawler</a>
                                                <a href="#Dragon-Claw" class="nav-link">Dragon Claw</a>
                                                <a href="#Rokushiki" class="nav-link">Rokushiki</a>
                                                <a href="#Hasshoken" class="nav-link">Hasshoken</a>
                                                <a href="#Black-Leg" class="nav-link">Black-Leg</a>
                                                <a href="#Weathermancy" class="nav-link">Weathermancy</a>
                                                <a href="#Fishman-Jujutsu" class="nav-link">Fishman Jujutsu</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #00FFFF;">
                                            <span class="tab-arrow">▶</span> SET 2: EQUIPMENT
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="#Swords-Meito" class="nav-link">Swords (Meito)</a>
                                                <a href="#Guns-Meijo" class="nav-link">Guns (Meijo)</a>
                                                <a href="#Inventions" class="nav-link">Inventions</a>
                                                <a href="#Tames" class="nav-link">Tames</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="sub-accordion">
                                        <div class="sub-accordion-header" style="color: #FFA500;">
                                            <span class="tab-arrow">▶</span> SET 3: MISC
                                        </div>
                                        <div class="sub-accordion-content" style="border-left: 1px solid #333; margin-left: 5px;">
                                            <div class="nav-group">
                                                <a href="#Territory-Conquest" class="nav-link">Territory Conquest</a>
                                                <a href="#Inherited-Will" class="nav-link">Inherited Will</a>
                                                <a href="#Ships" class="nav-link">Ships</a>
                                                <a href="#Travel" class="nav-link">Travel</a>
                                                <a href="#Research" class="nav-link">Research</a>
                                                <a href="#Recipe" class="nav-link">Recipe</a>
                                                <a href="#Taming" class="nav-link">Taming</a>
                                                <a href="#Honor" class="nav-link">Honor</a>
                                                <a href="#Prejudice" class="nav-link">Prejudice</a>
                                                <a href="#Economy" class="nav-link">Economy</a>
                                                <a href="#Treasure" class="nav-link">Treasure</a>
                                                <a href="#Infamy-System" class="nav-link">Infamy System</a>
                                                <a href="#Marine-Rank-System" class="nav-link">Marine Ranks</a>
                                                <a href="#World-Map" class="nav-link">World Map & Nav</a>
                                                <a href="#Black-Market" class="nav-link">Black Market</a>
                                                <a href="#Daily-Routine" class="nav-link">Daily Routine System</a>
                                                <a href="#Special-Techniques" class="nav-link">Special Techniques</a>
                                                <a href="#Weapon-Crafting" class="nav-link">Weapon Crafting</a>
                                                <a href="#Medicine-Invention" class="nav-link">Medicine & Invention</a>
                                                <a href="#Beast-Taming" class="nav-link">Beast Taming</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="nav-group" style="padding-top:10px;">
                                        <a href="devil_fruit_encyclopedia.html" class="nav-link" style="color:#BB86FC;">📙 DEVIL FRUIT ENCYCLOPEDIA</a>
                                    </div>

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
                    </div>

                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
    },
    
applySavedState() {
        const sidebar = document.getElementById('guide-sidebar');
        const content = document.getElementById('guide-content');
        const isCollapsed = localStorage.getItem('kaigan-sidebar-collapsed') === 'true';
        if (isCollapsed && sidebar) {
            sidebar.classList.add('collapsed');
            const toggle = document.getElementById('sidebar-toggle');
            if (toggle) toggle.innerText = '»';
            if (content) content.style.marginLeft = '50px';
        }
    },

    addEventListeners() {
        const sidebar = document.getElementById('guide-sidebar');
        const toggle = document.getElementById('sidebar-toggle');
        const content = document.getElementById('guide-content');

        if (toggle) {
            toggle.addEventListener('click', () => {
                const collapsed = sidebar.classList.toggle('collapsed');
                toggle.innerText = collapsed ? '»' : '«';
                if (content) content.style.marginLeft = collapsed ? '50px' : '350px';
                localStorage.setItem('kaigan-sidebar-collapsed', collapsed);
            });
        }

        document.querySelectorAll('.super-tab-header').forEach(header => {
            header.addEventListener('click', () => {
                header.parentElement.classList.toggle('open');
            });
        });

        document.querySelectorAll('.sub-accordion-header').forEach(header => {
            header.addEventListener('click', (e) => {
                e.stopPropagation();
                header.parentElement.classList.toggle('open');
            });
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('#')) {
                    e.preventDefault();
                    
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    const currentPath = window.location.pathname;

                    // [ NAVIGATION LOGIC FIX ]
                    if (targetElement) {
                        // Target is on the CURRENT page
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        history.pushState(null, null, href);
                        
                        // If the page has handleHash (to open <details>), run it
                        if (typeof window.handleHash === 'function') {
                            window.handleHash();
                        }
                    } else {
                        // Target is NOT on this page - Determine where to go
                        // List of IDs that belong to systems_guide.html
                        const isSystemId = [
                            "Combat-System", "Progression", "Doriki", "Stacking-System", "Power-Scaling", "Techniques", "Mastery",
                            "Race-Overview", "Humans", "Minks", "Fishmen", "Giants", "Cyborg", "Buccaneer", "Lunarians", "Oni", "Merfolk",
                            "Traits-Overview", "Hero", "Rebel", "Title", "Duo", "Support", "Unparalleled", "Profession", "Combat", "Void", "Weapon", "Auspicious", "Lineage", "Seeker", "Status", "Will", "Hunter", "Masters",
                            "Professions", "Fighting-Style", "Swords-Meito", "Guns-Meijo", "Inventions", "Tames",
                            "Territory-Conquest", "Inherited-Will", "Ships", "Travel", "Research", "Recipe", "Taming", "Honor", "Prejudice", "Economy", "Treasure", "Infamy-System", "Marine-Rank-System", "World-Map", "Black-Market", "Daily-Routine"
                        ].includes(targetId);

                        if (isSystemId) {
                            window.location.href = "systems_guide.html" + href;
                        } else {
                            // Default to guides.html for Submission guides and others
                            window.location.href = "guides.html" + href;
                        }
                    }
                }
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', () => KaiganSidebar.init());