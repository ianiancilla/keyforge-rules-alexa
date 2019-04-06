//Data from rulebook:
const rules = {
    // TEMPLATE   
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //KEY CONCEPTS SECTION
    ready: {
        rule: "ready",
        text: "cards are oriented upright so that their text may be read from left to right. A ready card can be used during a player’s turn, causing it to exhaust."
    },
    exhausted: {
        rule: "exhausted",
        text: "cards are rotated 90 degrees to the side. An exhausted card is not able to be used until it is readied by a game step or card ability. All creatures and artifacts enter play exhausted."
    },
    setup: {
        rule: "setup",
        text: "To set up the game, perform the following steps, in order: 1. Place all damage tokens, Æmber tokens, and status cards in a common supply within easy reach of both players. 2. Each player places their identity card to the left or right side of their play area. 3. Each player places three key tokens, one of each color, with the unforged side faceup near their identity card. 4. Randomly determine who is the first player. That player takes the first turn when the game begins. (If players are playing a series of games between two decks, in each game after the first, the player who used the deck that was defeated in the previous game chooses who is the first player.). 5. Each player shuffles their deck and offers it to the opponent for additional shuffling and/or a final cut. 6. The first player draws a starting hand of seven cards. The other player draws a starting hand of six cards. 7. Each player, starting with the first player, has one opportunity to mulligan their starting hand by shuffling it back into their deck and drawing a new starting hand with one fewer card in it. The game is now ready to begin."
    },
    firstTurn: {
        rule: "first turn",
        text: "During the first player’s first turn of the game, that player cannot play or discard more than one card from their hand. Card effects can modify this rule."
    },
    upgrades: {
        rule: "upgrades",
        text: "Upgrades enter play attached to (i.e., partially overlapped by) a creature chosen by the player who controls the upgrade. Each upgrade remains in play from turn to turn and modifies the card to which it is attached. If the card to which an upgrade is attached leaves play, the upgrade is discarded. If an upgrade cannot attach to a card in play, the upgrade cannot enter play."
    },
    ruleOfSix: {
        rule: "rule of six",
        text: "Occasionally, a situation may emerge in which, through a combination of abilities, the same card may be played or used repeatedly during the same turn. A player cannot play and/or use the same card and/or other copies of that card (by title) more than six times during a given turn."
    },
    //RULES SECTION
    ability: {
        rule: "ability",
        text: "An ability is the special game-text a card contributes to the game. Unless an ability explicitly references an out-of-play area (such as a hand, deck, archives, or discard pile), that ability can only interact with cards that are in play."
    },
    action: {
        rule: "action",
        text: "To use an “Action:” ability during their turn, the active player must exhaust the card. The ability then resolves."
    },
    activeHouse: {
        rule: "active house",
        text: "The active house is the house that the active player has chosen for the current turn."
    },
    activePlayer: {
        rule: "active player",
        text: "The active player is the player taking the current turn. The active player makes all necessary decisions for all card abilities or timing conflicts that need to resolve during their turn."
    },
    aember: {
        rule: "aember",
        text: "Æmber is tracked by Æmber tokens, and is used to forge keys. Only Æmber in your own Æmber pool is considered “yours” for the purpose of card effects. Check also: Capture, Keys, Reap, Steal."
    },
    archives: {
        rule: "archives",
        text: "A player’s archives is a facedown game area in front of that player’s identity card. Card abilities are the only means by which a player is permitted to add cards to their archives. During step 2 of a player’s turn, after they select an active house, the active player is permitted to pick up all cards in their archives and add those cards to their hand. Cards in a player’s archives are considered out of play. A player may look at their archives at any time. A player is not permitted to look at an opponent’s archives. If the ability instructing a player to archive a card does not specify where the card is archived from, the archived card comes from that player’s hand."
    },
    armor: {
        rule: "armor",
        text: "Some creatures have an armor value to the right of the card title. Armor prevents an amount of damage equal to the armor value that the creature would take each turn. Armor prevents damage before it is actually dealt. For example, if a creature has two armor and is dealt one damage, that damage is instead prevented by the armor, leaving the creature with one armor that can prevent damage left for the rest of the turn. If the creature is later dealt three more damage during that turn, one damage is prevented and the other two damage are dealt to that creature. If a creature gains armor, the gains are additive and accumulate on top of the creature’s printed armor value. If a creature gains armor during a turn, the gained armor does not  prevent damage already dealt that turn. If a creature loses armor during a turn, it is not retroactively dealt damage that was already prevented by the armor. If a creature loses any amount of armor, it loses armor that has been used to prevent damage this turn before it loses armor that has not been used to prevent damage this turn. If a creature has a tilde symbol in its armor field, the creature has no armor. Such creatures may gain armor through card effects."
    },
    assault: {
        rule: "assault",
        text: "When a creature with the assault keyword attacks, it deals damage equal to its assault value to the creature it is fighting before the fight resolves. (The active player chooses whether this occurs before or after other “Before Fight” effects and keywords.) If this damage destroys the other creature, the rest of the fight does not occur. If a creature with the assault keyword gains another instance of the assault keyword, the two values are added together."
    },
    battleline: {
        rule: "battleline",
        text: "The battleline is the ordered line of creatures a player controls in play."
    },
    before: {
        rule: "before",
        text: "If the word “before” is used in an ability (for example, “Before Reap:” or “Before Fight:”), that ability resolves before resolving the game effect of the reap or fight (but after the card exhausts, if exhausting is required to use the card)."
    },
    cannot: {
        rule: "cannot",
        text: "If two card effects are simultaneously instructing a player that they “cannot” do something and that they “must” or “may” do the same thing, the “cannot” effect takes precedence. If two card effects are simultaneously instructing a player that they cannot do something and that they may do something, the “cannot” effect takes precedence.",
        example: "Example: Anna controls a Pitlord which reads “While Pitlord is in play you must choose Dis as your active house.” On their next turn Anna’s opponent plays Restringuntus which reads “Play: Choose a house. Your opponent cannot choose that house as their active house until Restringuntus leaves play.” and chooses Dis for its ability. On Anna’s next turn, she both must and cannot choose Dis, but because cannot takes precedence over must, she only cannot choose Dis and must choose one of her other houses instead."
    },
    capture: {
        rule: "capture",
        text: "Captured Æmber is taken from an opponent’s Æmber pool and placed on a creature controlled by the capturing player. Players may not spend captured Æmber. When a creature with Æmber on it leaves play, the Æmber is placed in the opponent’s Æmber pool. Unless otherwise specified, Æmber is placed on the creature that captured it."
    },
    chain: {
        rule: "chain",
        text: "Some card abilities cause a player to gain one or more chains. If a player gains chains, that player increases their chain tracker by the number of chains gained. If a player has at least one chain when refilling their hand and would draw cards based on the number of remaining cards in their hand, they draw fewer cards according to the chart below. Then, they shed one chain by reducing the number on their chain tracker by one. Chains 1-6: draw one fewer card. Chains 7-12: draw two fewer cards. Chains 13-18: draw three fewer cards. Chains 19-24: draw four fewer cards. While drawing an initial hand of cards during setup, if a deck has chains assigned to it, the chains also apply to the initial hand of cards drawn as if you were refilling a hand during step 5. A chain is shed for this initial draw as per the standard rules. Chains are only shed when a player would draw cards during the draw step and the chains prevent them from doing so"
    },
    control: {
        rule: "control",
        text: "A player owns the cards that begin the game in their deck. When a card is played, it enters play under the control of the active player. A player can take control of an opponent’s card. When this happens, that card is placed in the new controller’s play area. If it is a creature, it is placed on a flank of the new controller’s battleline. If multiple effects that take control of a card are used on the same card, the most recent effect takes precedence. If a player takes control of a card that belongs to a house not in the new controller’s deck, they can make that house the active house during step 2 of their turn. If a card that has changed control leaves play for any reason, it moves to its owner’s appropriate out-of-play zone."
    },
    cost: {
        rule: "cost",
        text: "The base cost to forge a key is six Æmber. This cost may be modified by card abilities. The modified cost is referred to as the current cost."
    },
    damage: {
        rule: "damage",
        text: "Damage a creature has taken is tracked by placing damage tokens on the creature. If a creature has an amount of damage on it equal to or greater than its power, the creature is destroyed. Damage on a creature does not reduce its power. If multiple creatures are damaged by a single effect, that damage is dealt simultaneously."
    },
    destroyed: {
        rule: "destroyed",
        text: "When a card is destroyed, it is placed in its owner’s discard pile. If multiple cards are destroyed simultaneously they are put into the discard pile(s) simultaneously and any non-”destroyed:” abilities cannot trigger. (The active player determines what order the destroyed cards are put into the discard pile(s).) If a card has a “Destroyed:” ability, the effect automatically resolves immediately before the card would be destroyed, which is also before it leaves play."
    },
    discard: {
        rule: "discard",
        text: "When a card is destroyed or discarded, it is placed on top of its owner’s discard pile. The cards in each player’s discard pile are open information, and may be referenced at any time. The order of cards in a player’s discard pile is maintained during play, unless a card ability causes this order to change. When a player runs out of cards in their deck and are required to draw, they shuffle their discard pile to create a new deck. Action cards are immediately put into the discard pile after their effects resolve. In the case of an Action card that has a lasting effect like Library Access, once the effect is established by resolving the card, the card is immediately put into the discard pile and does not remain in play."
    },
    elusive: {
        rule: "elusive",
        text: "The first time a creature with the elusive keyword is attacked each turn, it is dealt no damage and deals no damage to the attacker in the fight. Elusive only stops damage that would be dealt by each creature’s power; damage dealt by keywords or other abilities still applies."
    },
    endOfTurn: {
        rule: "end of turn",
        text: "End of turn effects are resolved when a player’s turn is over. After step 5, the “Draw Cards” step."
    },
    enemy: {
        rule: "enemy",
        text: "If a card-ability refers to an “enemy” game element, it refers to an element currently controlled by the opponent."
    },
    fight: {
        rule: "fight",
        text: "When a player uses a creature to fight, the player exhausts the creature and chooses an opponent’s creature. Both creatures deal an amount of damage equal to their power value to the opposing creature in the fight, and both are “fighting” for the purposes of card effects. A creature used to fight is said to be “attacking” and can be referred to as “the attacker” during that fight. If the attacker is not destroyed, all “Fight:” abilities on the attacking creature then resolve. If either creature in a fight has a constant ability referencing the end of the fight (example: “after an enemy creature is destroyed fighting this creature…”), the creature must survive the fight to resolve the ability. Only the attacker can trigger “Fight:” abilities."
    },
    fightWith: {
        rule: "fight with",
        text: "If an ability instructs a player to “fight with” or “ready and fight with” a creature, the ability is granting the player permission to use the designated creature to fight. The fight is resolved following the standard rules for fighting, against a creature controlled by the opponent."
    },
    flank: {
        rule: "flank",
        text: "The creatures on the far right and far left of a player’s battleline are on the flanks of the line. A creature in this position is referred to as a flank creature. Any time a creature enters play or changes control, the active player chooses which flank of its controller’s battleine it is placed on. If a battleline only has one creature in it, that creature is on both the left and right flank and is considered a flank creature."
    },
    forge: {
        rule: "forge",
        text: "If the active player has enough Æmber to forge a key during this step, they must do so. To forge a key, the active player spends Æmber from the Æmber pool on their identity card, returning it to the common supply. Then, that player flips any one of their key tokens over to its forged side, indicating that the key has been forged. The default cost to forge a key is six Æmber. Some card abilities may increase or decrease this number. No more than one key can be forged during this step each turn, even if the active player has enough Æmber to forge multiple keys. Some cards have effects that allow Æmber on these cards to be spent when forging keys. If there is enough Æmber on cards with this effect that you control, combined with the Æmber in your Æmber pool, to forge a key you must do so during Step 1."
    },
    friendly: {
        rule: "friendly",
        text: "If a card ability refers to a “friendly” game element, it refers to an element currently under the control of the same player."
    },
    hazardous: {
        rule: "hazardous",
        text: "When a creature with the hazardous X keyword is attacked, it deals X damage to the attacking creature before the fight resolves. (The active player chooses whether this occurs before or after other “Before Fight” effects and keywords.) If this damage destroys the other creature, the rest of the fight does not occur. If a creature with the hazardous (X) keyword gains another instance of the hazardous (X) keyword, the two X values are added together."
    },
    heal: {
        rule: "heal",
        text: "If an ability “heals” a creature, remove the specified amount of damage from the creature. If an ability “fully heals” a creature, remove all damage from the creature. Any creature can be chosen to be healed by a card effect that heals, even if it does not have any damage on it. However, if no damage is removed from the creature, it is not considered to have been “healed” for the purpose of card effects that reference healing."
    },
    houseChoice: {
        rule: "house choice",
        text: "Each turn, a player must choose one of the three houses indicated by their identity card, if able. Some card abilities may restrict a player’s house choice. If a player has gained control of a card that does not belong to one of their three houses, that card’s house becomes an eligible choice for that player while the player retains control of the card. If there is no legal choice of house, the player plays the turn with no active house. If a player is faced with two (or more) “must choose” mandates, the player may choose either of those options. After choosing a house, the active player has the option to take all cards in their archives and add them to their hand. ("
    },
    ifYouDo: {
        rule: "if you do",
        text: "If an ability includes the phrase “if you do” or “in order to,” the player referenced by the ability must successfully and completely resolve the text that precedes that phrase before they can resolve or perform the text that follows that phrase. In other words, if the first part of the ability is not successfully and completely resolved, that which follows the phrase does not resolve or cannot be performed."
    },
    keys: {
        rule: "keys",
        text: "The first player to forge all three of their keys immediately wins the game. The color of a key has no impact on the game. Future card abilities may reference keys of a specific color."
    },
    leastPowerful: {
        rule: "least powerful",
        text: "A reference to the “least powerful” creature refers to the creature in play with the lowest power. If there are multiple creatures that qualify, each is considered “least powerful.” If an ability requires the selection of a single least powerful creature, and multiple creatures are tied, the active player chooses one. Groups of “Least Powerful”. If a card effect refers to a group of “the X least powerful” creatures, it is referring to a number of creatures in play that have an equal or lower power than every creature that does not belong to that group. If there are not enough creatures with the lowest power to fulfill the group, then a creature with the next lowest power is eligible to be considered a part of the group. This continues until the group has been filled or there are no creatures remaining. If at any point multiple creatures are tied at the same power that could qualify them for the group, but there is not enough space in the group for each tied creature, the active player chooses which of the tied creatures are part of the group."
    },
    leavesPlay: {
        rule: "leaves play",
        text: "If a card that is in play leaves play (is returned to hand or deck, destroyed, discarded, archived, or purged), all non-Æmber tokens and status cards on the card are removed, all upgrades on the card are discarded, and all lasting effects applied to the card expire. When a card moves from an in–play zone to an out-of-play zone in which the identities of cards are hidden from the opponent (such as a player’s hand, deck, or archives), any pending effects that are currently or about to interact with that card no longer do so, unless a card effect explicitly states that it interacts with that zone. If a creature with Æmber on it leaves play, the Æmber is placed in the opponent’s Æmber pool. If a non-creature card with Æmber on it leaves play, the Æmber is returned to the general token pool. When a card leaves play it is always put into its owner’s appropriate out-of-play zone, unless a card effect explicitly states that it interacts with that zone. If a card has a “Leaves Play:” ability, the effect happens automatically immediately before the card leaves play."
    },
    maverick: {
        rule: "maverick",
        text: "A maverick is an extremely rare instance of a card that has left its standard house and is now a part of a new house. For all game purposes, treat a maverick as belonging to the house printed on its graphic template."
    },
    may: {
        rule: "may",
        text: "If an ability includes the word “may,” the text that follows “may” is optional. If a player chooses to resolve a “may” ability, the player must resolve as much of the ability as they are able."
    },
    mostPowerful: {
        rule: "most powerful",
        text: "A reference to the “most powerful” creature refers to the creature in play with the highest power. If there are multiple creatures that qualify, each is considered “most powerful.” If an ability requires the selection of a single most powerful creature, and multiple creatures are tied, the active player chooses among the tied creatures. Groups of “Most Powerful”. If a card effect refers to a group of “the X most powerful” creatures, it is referring to a number of creatures in play that have an equal or higher power than every creature that does not belong to that group. If there are not enough creatures with the highest power to fulfill the group, then a creature with the next highest power is eligible to be considered a part of the group. This continues until the group has been filled or there are no creatures remaining. If at any point multiple creatures are tied at the same power that could qualify them for the group, but there is not enough space in the group for each tied creature, the active player chooses which of the tied creatures are part of the group."
    },
    mulligan: {
        rule: "mulligan",
        text: "During setup, each player, starting with the first player, has one opportunity to mulligan their starting hand. This is done by shuffling the starting hand back into the deck and drawing a new starting hand with one fewer card in it. After a player chooses to mulligan, that player must keep the new starting hand. If a player is using a deck that has chains applied to it at the start of the game and takes a mulligan, they do not shed a chain from the mulligan, but do draw one fewer card than they had before the mulligan as per the normal mulligan rules."
    },
    neighbor: {
        rule: "neighbor",
        text: "The creatures to the immediate left and right of a creature in a player’s battleline are its neighbors."
    },
    omni: {
        rule: "omni",
        text: "The active player may trigger any ”Omni“ abilities under their control during any of their turns, even if the card with the ”Omni“ ability does not belong to the active house. When a player uses a creature to trigger its “Omni” ability, the player exhausts the creature and then resolves the “Omni” ability."
    },
    offHouse: {
        rule: "off house",
        text: "An off house card is any card that belongs to a house that is not the active house."
    },
    opposing: {
        rule: "opposing",
        text: "When a creature is involved in a fight (either because it was used to fight, or because it was attacked by another creature), the other creature in the fight is the opposing creature."
    },
    pay: {
        rule: "pay",
        text: "If a player must pay Æmber to an opponent, the Æmber is removed from the paying player’s pool and added to the opponent’s pool."
    },
    play: {
        rule: "play",
        text: "When a card has a “Play” ability, the effect occurs any time the card is played. For creatures, artifacts, and upgrades, the ability resolves after the card enters play. For action cards, the ability resolves, and then the card is immediately placed in its owner’s discard pile. If an ability “plays” a card from a source other than hand, “Play:” abilities on the card resolve. If an ability “puts” a card “into play,” “Play:” abilities on the card do not resolve."
    },
    poison: {
        rule: "poison",
        text: "Any damage dealt via the power of a creature with the poison keyword during a fight destroys the damaged creature. This occurs when the damage is successfully applied to the opposing creature. Poison has no effect if all of the damage is prevented by armor or prevented by another ability. poison only resolves when one or more damage is successfully dealt. Poison refers only to damage that would be dealt by the creature’s power, not by damage that is dealt by keywords or other card abilities."
    },
    powerCounter: {
        rule: "power counter",
        text: "When a creature is given a “+1 power counter,” one such status card is placed on the creature. For each of these cards that is on a creature, that creature’s power is increased by one."
    },
    preceding: {
        rule: "preceding",
        text: "If card text instructs players to repeat a preceding effect, the entirety of the effect before the text providing the instruction to repeat resolves again. Note: Repeating an effect does not interact with the Rule of Six, as the Rule of Six only applies to playing or using cards, not triggering their effect multiple times."
    },
    purge: {
        rule: "purge",
        text: "When a card is purged, it is removed from the game and placed facedown beneath its owner’s identity card. Purged cards no longer interact with the game state in any manner."
    },
    rarity: {
        rule: "rarity",
        text: "A card’s rarity symbol can be found at the bottom of the card, near the collector number. A card’s rarity (common, uncommon, rare, or special) is used by the deck-generation algorithm to determine how frequently it will appear in decks. Special cards have a different type of distribution and do not obey the game’s standard rarity rules."
    },
    reap: {
        rule: "reap",
        text: "When a player uses a creature to reap, the player exhausts the creature, gains 1 Æmber for their Æmber pool, and then all “Reap:” abilities on the creature resolve."
    },
    repeat: {
        rule: "repeat",
        text: "If card text instructs players to repeat an effect, the entirety of the effect resolves again including the text to repeat the effect. If the card that is creating a repeating effect is removed from play, the effect can no longer repeat. Note: Repeating an effect does not interact with the Rule of Six, as the Rule of Six only applies to playing or using cards, not triggering their effect multiple times."
    },
    return: {
        rule: "return",
        text: "When captured Æmber is returned, it is placed in the opponent’s Æmber pool."
    },
    sacrifice: {
        rule: "sacrifice",
        text: "When a player is instructed to sacrifice a card, that player must discard that card from play. When a card is sacrificed, that card is considered to have been destroyed, and any “Destroyed:” abilities the card has resolve."
    },
    search: {
        rule: "search",
        text: "When a player searches a game area (such as a deck), that player looks at all the cards in the specified area without showing those cards to the opponent. A player may choose to fail to find the object of a search. If an entire deck is searched, the deck must be adequately shuffled upon completion of the search. If a discard pile is searched, the cards are kept in the same order."
    },
    selfReferentialText: {
        rule: "self-referential text",
        text: "If a card’s ability refers to its own title, that reference is only to itself and not to other copies of the card."
    },
    skirmish: {
        rule: "skirmish",
        text: "When a creature with the skirmish keyword is used to fight, it takes no damage from the opposing creature when the damage from the fight is dealt. This applies only to damage that would be dealt by the opposing creature’s power, not by damage that is dealt by keywords or other card abilities."
    },
    splash: {
        rule: "splash",
        text: "When an ability deals damage to a creature “with splash damage,” the splash damage is dealt to each of the target creature’s neighbors."
    },
    steal: {
        rule: "steal",
        text: "When an ability steals Æmber, the stolen Æmber is removed from the opponent’s Æmber pool and added to the Æmber pool of the player resolving the steal ability. If an ability steals more Æmber than a player has remaining in their pool, the ability steals only the amount remaining in the pool."
    },
    stun: {
        rule: "stun",
        text: "When a creature becomes stunned, place a stun status card on it. The next time that creature is used, the only effect of it being used is the creature exhausts and the stun status card is removed instead of anything else happening. The creature does not reap or fight, and any “Reap:,” “Fight:,” or “Action:” abilities on the creature do not resolve. If a card effect causes a creature to be used while it is stunned, the creature is exhausted and the stun status card is removed, just as if the creature had been used normally. Constant abilities and abilities that do not require the creature to reap, fight, or be used are still active. If a stunned creature is attacked, it still deals damage to the attacking creature during the fight. While a creature is stunned, it cannot have another stun status card placed on it. If an effect attempts to stun a stunned creature that effect does not stun the already stunned creature."
    },
    swap: {
        rule: "swap",
        text: "If two game elements are swapped, they exchange places with one another. When two creatures are swapped, they exchange positions. This means that each takes the position in the battleline of the other. The two creatures swapped must always be controlled by the same player. If cards from two distinct game areas are swapped (such as a card in play and a card in hand), the cards switch game areas."
    },
    taunt: {
        rule: "taunt",
        text: "If a creature has the taunt keyword, any of its neighbors that do not have the taunt keyword cannot be attacked by an enemy creature that is being used to fight. In the battleline, taunt creatures are slid slightly forward to indicate their presence to the opponent."
    },
    thisWay: {
        rule: "this way",
        text: "If an ability refers to an effect that occurred “this way,” it is referring to an effect that was produced by the same resolution of that same ability."
    },
    turn: {
        rule: "turn",
        text: "A turn consists of one player performing the five steps detailed in the game’s turn sequence, which are: 1, Forge a key. 2, Choose a house. 3, Play, discard, and use cards of the chosen house. 4, Ready cards. 5, Draw cards."
    },
    traits: {
        rule: "traits",
        text: "Traits are descriptive attributes (such as “Knight” or “Specter”) that may be referenced by other cards. Traits are listed at the top center of a card’s text box. Traits have no inherent game effect, but may be referenced by card abilities."
    },
    unforge: {
        rule: "unforge",
        text: "If a previously forged key is “unforged,” flip the key token to its unforged side. The key no longer counts toward its controller’s victory condition and must be forged again to win the game."
    },
    //ERRATA SECTION
    errata: {
        rule: "errata",
        text: "The only errata in this version of the rules is in the text of Biomatrix Backup. Please search for that for more information."
    },
    biomatrixBackup: {
        rule: "biomatrix backup",
        text: "Should read: “This creature gains,”Destroyed: Put this creature into its owner’s archives.””"
    },
    // FAQ SECTION
    baitAndSwitch: {
        rule: "bait and switch",
        text: "Repeating an effect does not interact with the Rule of Six, as the Rule of Six only applies to playing or using cards, not triggering their effect multiple times."
    },
    phaseShift: {
        rule: "phase shift",
        text: "Its the first turn of the game and I am going first. I choose house Logos to be the active house and play the card Phase Shift. Does this allow me to play another card this turn even though the First Turn Rule is in effect? Playing Phase Shift will allow you to play another card from your hand this turn, since the First Turn Rule can be modified by card effects."
    },
    wildWormhole: {
        rule: "wild wormhole",
        text: "Its the first turn of the game and I am going first. I choose house Logos to be the active house and play the card Wild Wormhole. Can Wild Wormhole’s effect be resolved even though the First Turn Rule is in effect? Wild Wormhole’s effect can be resolved. The First Turn Rule specifies that players cannot play or discard more than one card from their hand. However it does not prohibit cards from being played or discarded from other game areas, such as your deck."
    },
    libraryAccess: {
        rule: "library access",
        text: "I have chosen house Logos to be my active house this turn and start off by playing Library Access, I then play Wild Wormhole. In what order do I resolve this combination of effects? When you play a Wild Wormhole after playing a Library Access the following happens in this order: 1. You gain 1 Æmber from Wild Wormhole’s Æmber bonus. 2. You draw a card from Library Access’s effect. 3. You resolve Wild Wormhole’s effect and play the top card of your deck. 4. You gain Æmber from any Æmber bonus on the played card. 5. You draw a card from Library Access’s effect. 6. You resolve any play effects on the card played from the top of your deck."
    },
    pitlord: {
        rule: "pitlord",
        text: "I have the card Pitlord in play and my opponent plays the card Restringuntus and chooses house Dis. What happens when I try to declare my house on my next turn? On your next turn, during the choose a house step, you will be in a position where you must choose house Dis (because of the Pitlord), but also cannot choose house Dis (because of the Restringuntus). Cannot effects have precedence over must effects, thus you cannot choose Dis. You may still choose either one of your other houses though."
    },
    faygin: {
        rule: "faygin",
        text: "I have a Faygin in play and my opponent has an Urchin in play. I reap with Faygin and with its reap effect I choose my opponent’s Urchin. What happens? Faygin’s effect causes the Urchin to try and go into your hand, however when a card leaves play it always goes to its owner’s corresponding out of play zone unless the card causing it to leave play specifies otherwise. The Urchin is returned to your opponent’s hand instead of yours."
    },
    kelifiDragon: {
        rule: "kelifi dragon",
        text: "I have 0 Æmber in my Æmber pool and have chosen house Logos to be my active house this turn. I play Wild Wormhole and try and play the top card of my deck is Kelifi Dragon. What happens? The Kelifi Dragon is returned to the top of the deck. Kelifi Dragon has a play requirement of needing to have 7 Æmber in your Æmber pool, and since you didn’t have any initially (you now have 1 from playing the Wild Wormhole) you don’t have enough to be able to play the Kelifi Dragon. Since you can’t play the card it is returned to the place you tried to play it from, in this case the top of the deck."
    },
    yxiloBolter: {
        rule: "yxilo bolter",
        text: "On my opponent’s turn they use their Yxilo Bolter to reap and choose to resolve its reap effect on my Bad Penny. Is the Bad Penny purged or does it end up back in my hand? The Bad Penny goes back to your hand. “Destroyed:” effects happen immediately before a creature is destroyed, meaning that Bad Penny is back in its owner’s hand before the Yxilo Bolter can try to purge it with its reap effect. At that point, any pending effects waiting to resolve on Bad Penny no longer do. This is because Bad Penny is moving to an out-of-play zone in which the identity of cards is hidden from the opponent."
    },
    anger: {
        rule: "anger",
        text: "I have a stunned creature in my battleline, play the card Anger, and choose to resolve its effect on that stunned creature. What happens? If a card (such as Anger in this case) allows you to use a creature and if the creature you are trying to use is stunned, you remove the stun instead of doing anything else. Since Fighting is a type of being used the creature is exhausted and the stun counter is removed. This will even work if your opponent has no creatures in play, because unstunning replaces the normal “use” (in this case fight) of the card before it begins."
    },
    stealerOfSouls: {
        rule: "stealer of souls",
        text: "I have a Stealer of Souls in play and my opponent has a Valdr. I use my Stealer of Souls to fight Valdr and both creatures are destroyed. Does the Stealer of Souls’ ability trigger? No, the Stealer of Souls’ ability will not trigger. In order for the Stealer of Souls ability to trigger it must be in play, so if both the Stealer of Souls and the creature it is fighting die, they die simultaneously and the Stealer of Souls ability cannot trigger."
    },
    combatPheromones: {
        rule: "combat pheromones",
        text: "I have a Combat Pheromones, “John Smyth”, and Mindwarper in play. I sacrifice the Combat Pheromones and reap with the Mindwarper, and then reap with “John Smyth” and use “John Smyth’s” reap effect to ready the Mindwarper. Can I use the Mindwarper again? Yes, Combat Pheromones is granting permission to use a creature during that turn. If you have an effect that readies one of the Mars cards affected by the Combat Pheromones (Such as “John Smyth”), you will be able to use that card again."
    },
    kingOfTheCrag: {
        rule: "king of the crag",
        text: "I play King of the Crag while my opponent has a Looter Goblin in play. What happens? The rules for damage state that “If a creature has as much or more damage on it as it has power, the creature is destroyed and placed on top of its owner’s discard pile.” When a creature has 0 power, if it has 0 damage on it, it is destroyed."
    },
    bannerOfBattle: {
        rule: "banner of battle",
        text: "My opponent has a Banner of Battle in play. Can I play the card Poltergeist to destroy the Banner of Battle, even if the artifact can’t be used? Yes, you can resolve the effect of Poltergeist on any artifact in play even if the artifact cannot be used. You just resolve as much of the card effect as you can, and to resolve this situation you just destroy the artifact."
    },
    lostInTheWoods: {
        rule: "lost in the woods",
        text: "I have no creatures in play and my opponent has two. Can I play the card Lost in the Woods even though I don’t have two creatures in play? Yes you can. The “Resolve As Much As You Can” rule says that you resolve as much of a card effect as possible and any part of a card you cannot resolve is ignored. In the context of Lost in the Woods, it means that you shuffle in as many of the creatures as you can. So in the case that your opponent has two or more creatures in their battleline and you have none, you will shuffle in two enemy creatures and no friendly creatures."
    },
    bumpsy: {
        rule: "bumpsy",
        text: "I have an exhausted Bumpsy in play and my opponent has no creatures in their battleline. I play the card Anger and choose to resolve it on Bumpsy. What happens? The Bumpsy will be readied by the effect of Anger, but since there are no enemy creatures in play it cannot be used to fight so it stays ready. The creature can then be used as per the standard rules."
    },
    spanglerBox: {
        rule: "Spangler Box",
        text: "Dragon. The Spangler Box is returned to its owner’s hand with Grasping Vines, but I don’t have any Æmber. Do I get my Kelifi Dragon back? Yes. The Kelifi Dragon is not being played when it is returned by the Spangler Box, it is being put into play. Being put into play bypasses the normal play restrictions, meaning that the Kelifi Dragon is put back into play no matter how much Æmber you have."
    },
    smaash: {
        rule: "smaash",
        text: "I play Smaaash, but each of my opponent’s creatures is already stunned. Do I have to resolve the effect against Smaaash itself? No. You may still choose to resolve Smaaash’s “Play:” effect against one of your opponent’s creatures, however you cannot put a stun counter on an already stunned creature so nothing will happen."
    },
    sampleCollection: {
        rule: "sample collection",
        text: "My opponent puts two of my creatures into their archives using the card Sample Collection. On my next turn I play the card Dysania. What happens? Playing the Dysania will cause each of your opponent’s archived cards to be discarded, however since the Sample Collection states that when these creatures leave the archives they are put into their owner’s hand instead these cards are returned to your hand. Since these cards were not discarded by Dysania’s effect, you will not gain any Æmber from the resolution of that effect."
    },
    shadowSelf: {
        rule: "shadow self",
        text: "I have Shadow Self with a Raiding Knight as a neighbor. My Raiding Knight is then attacked by a 4 power creature. How much damage does each creature take in this situation? In this case, the Shadow Self will take 2 damage, the Raiding Knight will take no damage, and the 4 power creature will take 4 damage and be destroyed. This happens because before the damage can be dealt to the Raiding Knight, two of it is prevented by its armor. Then when the damage is actually being dealt, the damage that would be dealt to the Raiding Knight is dealt to the Shadow Self instead. At the same time as the Shadow Self is being dealt damage, the 4 power creature takes 4 damage from the Raiding Knight’s power."
    },
};
exports.rules = rules;
