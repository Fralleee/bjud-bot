# BjudBot

Super simple Discord bot made for fun

# Action matching

Action is started either as an exclamation (!) or question (?) follwed by a keyword
Currently the bot matches games or certain words

| Action | Keyword   | Response                                                  |
| ------ | --------- | --------------------------------------------------------- |
| !      | overwatch | "@everyone dags för OVERWATCH!!! Woooohoo.. tagga!!"      |
| !      | valorant  | "Säker? Inte OW då?"                                      |
| !      | apex      | "Är det Majk som gnäller? Aja, @everyone vi kör APEX nu." |
| !      | öl        | "Nu får man hämta öl!!!"                                  |
| ?      | overwatch | "@everyone någon som är sugen på OW?"                     |
| ?      | valorant  | "Ingen vill spela det."                                   |
| ?      | apex      | "@everyone har vi några huggare för APEX?"                |
| ?      | öl        | "När får man hämta öl egentligen?"                        |

# Word matching

If the message content contains a certain word or phrase or is excatly equal a certain phrase the bot will respond in turn

| Words                                                                                     | Response           | Exact |
| ----------------------------------------------------------------------------------------- | ------------------ | ----- |
| ["salem", "jönköping"]                                                                    | "Näee va tråkigt." | No    |
| ["sova", "söva", "ge mig"]                                                                | "Klent."           | No    |
| ["bjuds det", "om det bjuds", "dåligt med bjud"]                                          | "Klart det bjuds"  | No    |
| ["öl", "kebab", "pizza", "taco"]                                                          | "Ååh va gott!"     | No    |
| ["hallåses", "fel på låset", "fel på låses", "brevinkastet", "låna wc"]                   | "Håll om mig!"     | No    |
| ["majkstyle", "dra en majk", "majk-style", "majk special", "majk-special", "majkspecial"] | Majk special       | No    |
| värsåsjönna                                                                               | "VärsåsJönna <3"   | No    |
| spel?                                                                                     | "Dans!"            | Yes   |
| dans?                                                                                     | "Spel!"            | Yes   |

# Bot mentions

The bot will respond to mentions with a static: "Mjaa, det är väl sådär på en höft."
