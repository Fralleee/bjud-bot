const boring = ["salem", "jönköping"];
const wussy = ["sova", "söva", "ge mig"];
const bjud = ["bjuds det", "om det bjuds", "dåligt med bjud"];
const gotta = ["öl", "kebab", "pizza", "taco", "korka upp"];
const gun = ["hallåses", "fel på låset", "fel på låses", "brevinkastet", "låna wc"];
const majkstyle = ["majkstyle", "dra en majk", "majk-style", "majk special", "majk-special", "majkspecial"];
const tack = ["tack", "tock", "takk"];
const daensk = ["böge", "bestefar", "kuke"];
const douche = ["easy game", "easy life", "ez game"];
const brunt = ["brunt ut", "aningen brunt", "mycket brunt", "väldigt brunt"];

export function wordMatches(content) {
  if (bjud.some(val => content.includes(val))) {
    return "Klart det bjuds";
  }
  if (majkstyle.some(val => content.includes(val))) {
    return "**Majk special** *[maɪkspɛʃ.əl]*\nHandlingen där datorspelaren hämtar __två__ öl istället för __en__.\n*Se även: lat, soffpotatis, alkoholist*";
  }
  if (gotta.some(val => content.includes(val))) {
    return "Ååh va gott!";
  }
  if (boring.some(val => content.includes(val))) {
    return "Näee va tråkigt.";
  }
  if (wussy.some(val => content.includes(val))) {
    return "Klent.";
  }
  if (gun.some(val => content.includes(val))) {
    return "Håll om mig!";
  }
  if (tack.some(val => content.includes(val))) {
    return "Naj naj naj, RU sa ha tack!";
  }
  if (daensk.some(val => content.includes(val))) {
    return "Jæ meget godt!";
  }
  if (douche.some(val => content.includes(val))) {
    return "Och en glädjelig jul till er alla!";
  }
  if (brunt.some(val => content.includes(val))) {
    return "Ser rätt brunt ut ja.";
  }

  if (content.includes("värsåsjönna")) return "VärsåsJönna <3";
  if (content === "spel?") return "Dans!";
  if (content === "dans?") return "Spel!";
}
