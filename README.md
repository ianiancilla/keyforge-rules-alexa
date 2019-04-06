A skill for Amazon Alexa, of whih you can find the live version here: https://www.amazon.com/Marzia-Faustinelli-KeyForge-Rules/dp/B07PDZMM79/ref=sr_1_1?s=digital-skills&ie=UTF8&qid=1552307008&sr=1-1&keywords=keyforge . 
User can ask rules for Fantasy Flight Games's game KeyForge, and it will read from the official rulebook (version from 17 Jan 19). 


Official rules can be found here: https://www.fantasyflightgames.com/en/products/keyforge/ , I do not own anything related to KeyForge, this app simply references the official rulebook, which can be downloaded in PDF form from the link I quoted. If you use parts of this code, please be mindful that all references to KeyForge and its rules belong to Fantasy Flight Games.



Files in the repository are:

*en_US.json* : defines interaction between Alexa and the javascript code. This is where intents (the only custom one is searchRule) and slots are defined.
*SearchRuleIntent-utterances.csv* : a .csv export of the utterances which can trigger the SearchRule intent. I figured an export might be useful if anyone wants to transfer this skill to other platforms (Google Assistant for example)
*keyforgeRules-values.csv* : same as above, but this is an export of all the variables for KeyForge rules, and synonims. Note that the first column is always spelled as one word in camel case because it made it easier for me to reference stuff in the rules.js file. There are probably more elegant ways, but that's what my brain told me to do.
*index.js* : tells Alexa what to do with the various intents that can be triggered by the user. Most of it is alexa template code, what I added to make this particular skill can be found in the _SearchRuleIntentHandler_ object and in the function _returnRule_.
*rules.js* : the actual rules. This might be useful to anyone who wants to transfer this to other platforms, as it means you do not have to scrape the whole rulebook like I did.

Hope this is useful to someone!