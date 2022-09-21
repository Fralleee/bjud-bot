const responseMap = {
  "!": {
    öl: "Nu får man hämta öl!!!",
  },
  "?": {
    öl: "När får man hämta öl egentligen?",
  },
};

export function wordActions(content) {
  const action = content[0];
  if (action in responseMap) {
    const actionResponse = responseMap[action];
    const item = content.split(/[?!]/)[1];
    return actionResponse[item];
  }
}
