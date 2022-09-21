const boring = ["salem", "jönköping"];
const wussy = ["sova", "söva", "ge mig"];
const bjud = ["bjuds det", "om det bjuds", "dåligt med bjud"];
const gotta = ["öl", "kebab", "pizza", "taco"];

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

  if (content.includes("värsåsjönna")) return "VärsåsJönna <3";
  if (content === "spel?") return "Dans!";
  if (content === "dans?") return "Spel!";
}