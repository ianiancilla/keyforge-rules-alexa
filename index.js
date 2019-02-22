// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = 'Welcome, I can read from the Keyforge rulebook version 1.2, from january 2019. What rule do you need help with?"';
        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const SearchRuleIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'SearchRuleIntent';
    },
    handle(handlerInput) {
        const inputValue = handlerInput.requestEnvelope.request.intent.slots.rule.value
        const speechText = returnRule(inputValue);
        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = 'You can ask me about Keyforge rules. What rule do you need help with?';

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = handlerInput.requestEnvelope.request.intent.name;
        const speechText = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speechText)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Function to return rule text
function returnRule(query) {
    if (rules.hasOwnProperty(query)) {
        return rules[query].text
    } else {
        return "There is no rule with this name"
    }

}

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.message}`);
        const speechText = `Sorry, I couldn't understand what you said. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(speechText)
            .getResponse();
    }
};

// This handler acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        SearchRuleIntentHandler,
        IntentReflectorHandler) // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    .addErrorHandlers(
        ErrorHandler)
    .lambda();



//Data from rulebook:
const rules = {
    ability: {
        rule: "ability",
        text: "An ability is the special game-text a card contributes to the game. Unless an ability explicitly references an out-of-play area (such as a hand, deck, archives, or discard pile), that ability can only interact with cards that are in play."
    },
    action: {
        rule: "action",
        text: "To use an “Action:” ability during their turn, the active player must exhaust the card. The ability then resolves."
    },
    
    activeHouse : {
        rule: "active house",
        text: "The active house is the house that the active player has chosen for the current turn."
    },
    activePlayer : {
        rule: "active player",
        text: "The active player is the player taking the current turn. The active player makes all necessary decisions for all card abilities or timing conflicts that need to resolve during their turn."
    },
    aember : {
        rule: "aember",
        text: "Æmber is tracked by Æmber tokens, and is used to forge keys. Only Æmber in your own Æmber pool is considered “yours” for the purpose of card effects. Check also: Capture, Keys, Reap, Steal."
    },
    archives : {
        rule: "archives",
        text: "A player’s archives is a facedown game area in front of that player’s identity card. Card abilities are the only means by which a player is permitted to add cards to their archives. During step 2 of a player’s turn, after they select an active house, the active player is permitted to pick up all cards in their archives and add those cards to their hand. Cards in a player’s archives are considered out of play. A player may look at their archives at any time. A player is not permitted to look at an opponent’s archives. If the ability instructing a player to archive a card does not specify where the card is archived from, the archived card comes from that player’s hand."
    },
    armor : {
        rule: "armor",
        text: "Some creatures have an armor value to the right of the card title. Armor prevents an amount of damage equal to the armor value that the creature would take each turn. Armor prevents damage before it is actually dealt. For example, if a creature has two armor and is dealt one damage, that damage is instead prevented by the armor, leaving the creature with one armor that can prevent damage left for the rest of the turn. If the creature is later dealt three more damage during that turn, one damage is prevented and the other two damage are dealt to that creature. If a creature gains armor, the gains are additive and accumulate on top of the creature’s printed armor value. If a creature gains armor during a turn, the gained armor does not  prevent damage already dealt that turn. If a creature loses armor during a turn, it is not retroactively dealt damage that was already prevented by the armor. If a creature loses any amount of armor, it loses armor that has been used to prevent damage this turn before it loses armor that has not been used to prevent damage this turn. If a creature has a tilde symbol in its armor field, the creature has no armor. Such creatures may gain armor through card effects."
    },
    assault : {
        rule: "assault",
        text: "When a creature with the assault keyword attacks, it deals damage equal to its assault value to the creature it is fighting before the fight resolves. (The active player chooses whether this occurs before or after other “Before Fight” effects and keywords.) If this damage destroys the other creature, the rest of the fight does not occur. If a creature with the assault keyword gains another instance of the assault keyword, the two values are added together."
    },
    battleline : {
        rule: "battleline",
        text: "The battleline is the ordered line of creatures a player controls in play."
    },
    before : {
        rule: "before",
        text: "If the word “before” is used in an ability (for example, “Before Reap:” or “Before Fight:”), that ability resolves before resolving the game effect of the reap or fight (but after the card exhausts, if exhausting is required to use the card)."
    },
    cannot : {
        rule: "cannot",
        text: "If two card effects are simultaneously instructing a player that they “cannot” do something and that they “must” or “may” do the same thing, the “cannot” effect takes precedence. If two card effects are simultaneously instructing a player that they cannot do something and that they may do something, the “cannot” effect takes precedence.",
        example: "Example: Anna controls a Pitlord which reads “While Pitlord is in play you must choose Dis as your active house.” On their next turn Anna’s opponent plays Restringuntus which reads “Play: Choose a house. Your opponent cannot choose that house as their active house until Restringuntus leaves play.” and chooses Dis for its ability. On Anna’s next turn, she both must and cannot choose Dis, but because cannot takes precedence over must, she only cannot choose Dis and must choose one of her other houses instead."
    },
    capture : {
        rule: "capture",
        text: "Captured Æmber is taken from an opponent’s Æmber pool and placed on a creature controlled by the capturing player. Players may not spend captured Æmber. When a creature with Æmber on it leaves play, the Æmber is placed in the opponent’s Æmber pool. Unless otherwise specified, Æmber is placed on the creature that captured it."
    },
    chain : {
        rule: "chain",
        text: "Some card abilities cause a player to gain one or more chains. If a player gains chains, that player increases their chain tracker by the number of chains gained. If a player has at least one chain when refilling their hand and would draw cards based on the number of remaining cards in their hand, they draw fewer cards according to the chart below. Then, they shed one chain by reducing the number on their chain tracker by one. Chains 1-6: draw one fewer card. Chains 7-12: draw two fewer cards. Chains 13-18: draw three fewer cards. Chains 19-24: draw four fewer cards. While drawing an initial hand of cards during setup, if a deck has chains assigned to it, the chains also apply to the initial hand of cards drawn as if you were refilling a hand during step 5. A chain is shed for this initial draw as per the standard rules."
    },
    control : {
        rule: "control",
        text: "A player owns the cards that begin the game in their deck. When a card is played, it enters play under the control of the active player. A player can take control of an opponent’s card. When this happens, that card is placed in the new controller’s play area. If it is a creature, it is placed on a flank of the new controller’s battleline. If multiple effects that take control of a card are used on the same card, the most recent effect takes precedence. If a player takes control of a card that belongs to a house not in the new controller’s deck, they can make that house the active house during step 2 of their turn. If a card that has changed control leaves play for any reason, it moves to its owner’s appropriate out-of-play zone."
    },
    cost : {
        rule: "cost",
        text: "The base cost to forge a key is six Æmber. This cost may be modified by card abilities. The modified cost is referred to as the current cost."
    },
    damage : {
        rule: "damage",
        text: "Damage a creature has taken is tracked by placing damage tokens on the creature. If a creature has an amount of damage on it equal to or greater than its power, the creature is destroyed. Damage on a creature does not reduce its power. If multiple creatures are damaged by a single effect, that damage is dealt simultaneously."
    },
    destroyed : {
        rule: "destroyed",
        text: "When a card is destroyed, it is placed in its owner’s discard pile. If multiple cards are destroyed simultaneously they are put into the discard pile(s) simultaneously and any non-”destroyed:” abilities cannot trigger. (The active player determines what order the destroyed cards are put into the discard pile(s).) If a card has a “Destroyed:” ability, the effect automatically resolves immediately before the card would be destroyed, which is also before it leaves play."
    },
    discard : {
        rule: "discard",
        text: "When a card is destroyed or discarded, it is placed on top of its owner’s discard pile. The cards in each player’s discard pile are open information, and may be referenced at any time. The order of cards in a player’s discard pile is maintained during play, unless a card ability causes this order to change. When a player runs out of cards in their deck and are required to draw, they shuffle their discard pile to create a new deck."
    } ,
    elusive : {
        rule: "elusive",
        text: "The first time a creature with the elusive keyword is attacked each turn, it is dealt no damage and deals no damage to the attacker in the fight. Elusive only stops damage that would be dealt by each creature’s power; damage dealt by keywords or other abilities still applies."
    },
    endOfTurn : {
        rule: "end of turn",
        text: "End of turn effects are resolved when a player’s turn is over. After step 5, the “Draw Cards” step."
     },
    enemy : {
        rule: "enemy",
        text: "If a card-ability refers to an “enemy” game element, it refers to an element currently controlled by the opponent."
     },
    fight : {
        rule: "fight",
        text: "When a player uses a creature to fight, the player exhausts the creature and chooses an opponent’s creature. Both creatures deal an amount of damage equal to their power value to the opposing creature in the fight, and both are “fighting” for the purposes of card effects. A creature used to fight is said to be “attacking” and can be referred to as “the attacker” during that fight. If the attacker is not destroyed, all “Fight:” abilities on the attacking creature then resolve. If either creature in a fight has a constant ability referencing the end of the fight (example: “after an enemy creature is destroyed fighting this creature…”), the creature must survive the fight to resolve the ability. Only the attacker can trigger “Fight:” abilities."
     },
    fightWith : {
        rule: "fight with",
        text: "If an ability instructs a player to “fight with” or “ready and fight with” a creature, the ability is granting the player permission to use the designated creature to fight. The fight is resolved following the standard rules for fighting, against a creature controlled by the opponent."
     },
    flank : {
        rule: "flank",
        text: "The creatures on the far right and far left of a player’s battleline are on the flanks of the line. A creature in this position is referred to as a flank creature. Any time a creature enters play or changes control, the active player chooses which flank of its controller’s battleine it is placed on. If a battleline only has one creature in it, that creature is on both the left and right flank and is considered a flank creature."
     },
    // forge : {
    //     rule: "forge",
    //     text: ""
    //  },
    friendly : {
        rule: "friendly",
        text: "If a card ability refers to a “friendly” game element, it refers to an element currently under the control of the same player."
     },
    hazardous : {
        rule: "hazardous",
        text: "When a creature with the hazardous X keyword is attacked, it deals X damage to the attacking creature before the fight resolves. (The active player chooses whether this occurs before or after other “Before Fight” effects and keywords.) If this damage destroys the other creature, the rest of the fight does not occur. If a creature with the hazardous (X) keyword gains another instance of the hazardous (X) keyword, the two X values are added together."
     },
    heal : {
        rule: "heal",
        text: "If an ability “heals” a creature, remove the specified amount of damage from the creature. If an ability “fully heals” a creature, remove all damage from the creature. Any creature can be chosen to be healed by a card effect that heals, even if it does not have any damage on it. However, if no damage is removed from the creature, it is not considered to have been “healed” for the purpose of card effects that reference healing."
     },
    houseChoice : {
        rule: "house choice",
        text: "Each turn, a player must choose one of the three houses indicated by their identity card, if able. Some card abilities may restrict a player’s house choice. If a player has gained control of a card that does not belong to one of their three houses, that card’s house becomes an eligible choice for that player while the player retains control of the card. If there is no legal choice of house, the player plays the turn with no active house. If a player is faced with two (or more) “must choose” mandates, the player may choose either of those options."
     },
    ifYouDo : {
        rule: "if you do",
        text: "If an ability includes the phrase “if you do” or “in order to,” the player referenced by the ability must successfully and completely resolve the text that precedes that phrase before they can resolve or perform the text that follows that phrase. In other words, if the first part of the ability is not successfully and completely resolved, that which follows the phrase does not resolve or cannot be performed."
     },
    keys : {
        rule: "keys",
        text: "The first player to forge all three of their keys immediately wins the game. The color of a key has no impact on the game. Future card abilities may reference keys of a specific color."
     },
    leastPowerful : {
        rule: "least powerful",
        text: "A reference to the “least powerful” creature refers to the creature in play with the lowest power. If there are multiple creatures that qualify, each is considered “least powerful.” If an ability requires the selection of a single least powerful creature, and multiple creatures are tied, the active player chooses one. Groups of “Least Powerful”. If a card effect refers to a group of “the X least powerful” creatures, it is referring to a number of creatures in play that have an equal or lower power than every creature that does not belong to that group. If there are not enough creatures with the lowest power to fulfill the group, then a creature with the next lowest power is eligible to be considered a part of the group. This continues until the group has been filled or there are no creatures remaining. If at any point multiple creatures are tied at the same power that could qualify them for the group, but there is not enough space in the group for each tied creature, the active player chooses which of the tied creatures are part of the group."
     },
    leavesPlay : {
        rule: "leaves play",
        text: "If a card that is in play leaves play (is returned to hand or deck, destroyed, discarded, archived, or purged), all non-Æmber tokens and status cards on the card are removed, all upgrades on the card are discarded, and all lasting effects applied to the card expire. When a card moves from an in–play zone to an out-of-play zone in which the identities of cards are hidden from the opponent (such as a player’s hand, deck, or archives), any pending effects that are currently or about to interact with that card no longer do so, unless a card effect explicitly states that it interacts with that zone. If a creature with Æmber on it leaves play, the Æmber is placed in the opponent’s Æmber pool. If a non-creature card with Æmber on it leaves play, the Æmber is returned to the general token pool. When a card leaves play it is always put into its owner’s appropriate out-of-play zone, unless a card effect explicitly states that it interacts with that zone. If a card has a “Leaves Play:” ability, the effect happens automatically immediately before the card leaves play."
     },
    maverick : {
        rule: "maverick",
        text: "A maverick is an extremely rare instance of a card that has left its standard house and is now a part of a new house. For all game purposes, treat a maverick as belonging to the house printed on its graphic template."
     },
    may : {
        rule: "may",
        text: "If an ability includes the word “may,” the text that follows “may” is optional. If a player chooses to resolve a “may” ability, the player must resolve as much of the ability as they are able."
     },
    // mostPowerful : {
    //     rule: "most powerful",
    //     text: "A reference to the “most powerful” creature refers to the creature in play with the highest power. If there are multiple creatures that qualify, each is considered “most powerful.” If an ability requires the selection of a single most powerful creature, and multiple creatures are tied, the active player chooses among the tied creatures. Groups of “Most Powerful” If a card effect refers to a group of “the X most powerful” creatures, it is referring to a number of creatures in play that have an equal or higher power than every creature that does not belong to that group. If there are not enough creatures with the highest power to fulfill the group, then a creature with the next highest power is eligible to be considered a part of the group. This continues until the group has been filled or there are no creatures remaining. If at any point multiple creatures are tied at the same power that could qualify them for the group, but there is not enough space in the group for each tied creature, the active player chooses which of the tied creatures are part of the group."
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    //  : {
    //     rule: "",
    //     text: ""
    //  },
    



}
