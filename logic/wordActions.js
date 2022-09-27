import { randomElement } from "../utils/array.js";

const responseMap = {
  "!": {
    öl: "Nu får man hämta öl!!!",
    brifelt: ["> Ta inte för givet att din kamrat står vid punkten!", "> Kör biiil! Minst 3 på vagnen!", "> Basse bosse!"],
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
    const response = actionResponse[item];
    if (Array.isArray(response)) {
      return randomElement(response);
    }
    return response;
  }
}
