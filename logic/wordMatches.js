const boring = ["salem", "jönköping"];
const wussy = ["sova", "söva", "ge mig"];
const bjud = ["bjuds det", "om det bjuds", "dåligt med bjud"];
const gotta = ["öl", "kebab", "pizza", "taco"];
const gun = ["hallåses", "fel på låset", "fel på låses", "brevinkastet", "låna wc"];

export function wordMatches(content) {
  if (bjud.some(val => content.includes(val))) {
    return "Klart det bjuds";
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

  if (content.includes("värsåsjönna")) return "VärsåsJönna <3";
  if (content.includes("majk-style"))
    return "**Majk Style**\n*Se även: lat, soffpotatis, alkoholist* \n*(Uttal IPA: /maɪkstaɪl/)* \nHandlingen där datorspelaren hämtar __två__ öl istället för __en__.";
  if (content === "spel?") return "Dans!";
  if (content === "dans?") return "Spel!";
}
