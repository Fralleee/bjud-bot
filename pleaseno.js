const boring = ["salem", "jönköping"];
const wussy = ["sova", "ge mig"];

export function pleaseNoMatching(content) {
  if (boring.some(val => content.includes(val))) {
    return "Näee va tråkigt.";
  }
  if (wussy.some(val => content.includes(val))) {
    return "Klent.";
  }
}
