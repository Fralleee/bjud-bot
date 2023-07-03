# BjudBot

A super fun and simple Discord bot developed for enhancing the chat experience. It primarily works by matching commands and keywords in the chat and responds with programmed responses. It also includes fuzzy matching to ensure even close matches trigger a response.

## Command Matching

Commands are initiated with a `/tagga` followed by a `<game>`, where `<game>` can be any string. Here is an example:

| Command         | Response                      |
| --------------- | ----------------------------- |
| `/tagga <game>` | "Woooh! Let's play `<game>`!" |

Note: The bot will respond only if a game name is provided after the `/tagga` command.

## Action Matching

Actions are initiated either as an exclamation mark (!) or a question mark (?) followed by a keyword. Here are some examples:

| Action | Keyword   | Response                                                        |
| ------ | --------- | --------------------------------------------------------------- |
| !      | overwatch | "@everyone, it's time for OVERWATCH!!! Woooohoo.. Tagga!!"      |
| !      | valorant  | "Are you sure? Why not OW?"                                     |
| !      | apex      | "Is it Majk complaining? Well, @everyone, let's play APEX now." |
| !      | öl        | "Now you can get a beer!!!"                                     |
| ?      | overwatch | "@everyone, anyone up for OW?"                                  |
| ?      | valorant  | "No one wants to play that."                                    |
| ?      | apex      | "@everyone, any volunteers for APEX?"                           |
| ?      | öl        | "When can one get a beer?"                                      |

## Word Matching

If the message content contains certain words or phrases, or is exactly equal to certain phrases, the bot will respond accordingly. Fuzzy matching is used to ensure even slight matches trigger responses. Here is an example:

| Words/Phrases                                                                             | Response           | Exact |
| ----------------------------------------------------------------------------------------- | ------------------ | ----- |
| ["salem", "jönköping"]                                                                    | "Näee va tråkigt." | No    |
| ["sova", "söva", "ge mig"]                                                                | "Klent."           | No    |
| ["bjuds det", "om det bjuds", "dåligt med bjud"]                                          | "Klart det bjuds"  | No    |
| ["öl", "kebab", "pizza", "taco", "korka upp"]                                             | "Ååh va gott!"     | No    |
| ["hallåses", "fel på låset", "fel på låses", "brevinkastet", "låna wc"]                   | "Håll om mig!"     | No    |
| ["majkstyle", "dra en majk", "majk-style", "majk special", "majk-special", "majkspecial"] | "Majk special"     | No    |
| "värsåsjönna"                                                                             | "VärsåsJönna <3"   | Yes   |
| "spel?"                                                                                   | "Dans!"            | Yes   |
| "dans?"                                                                                   | "Spel!"            | Yes   |

## Bot Mentions

The bot will respond to any mentions with: "Mjaa, det är väl sådär på en höft."

Remember to have fun and happy chatting!
