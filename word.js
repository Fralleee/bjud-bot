const responseMap = {
  "!": {
    öl: "Nu får man hämta öl!!!",
  },
  "?": {
    öl: "När får man hämta öl egentligen?",
  },
};

const bjud = ["bjuds det", "om det bjuds", "dåligt med bjud"];

const gotta = ["öl", "kebab", "pizza", "taco"];

export function wordMatching(content) {
  const action = content[0];
  if (action in responseMap) {
    const actionResponse = responseMap[action];
    const item = content.split(/[?!]/)[1];
    return actionResponse[item];
  } else if (bjud.some(val => content.includes(val))) {
    return "Klart det bjuds";
  } else if (gotta.some(val => content.includes(val))) {
    return "Ååh va gott!";
  }
}
