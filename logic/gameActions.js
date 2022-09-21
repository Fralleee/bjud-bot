const responseMap = {
  "!": {
    overwatch: "@everyone dags för OVERWATCH!!! Woooohoo.. tagga!!",
    valorant: "Säker? Inte OW då?",
    apex: "Är det Majk som gnäller? Aja, @everyone vi kör APEX nu.",
  },
  "?": {
    overwatch: "@everyone någon som är sugen på OW?",
    valorant: "Ingen vill spela det.",
    apex: "@everyone har vi några huggare för APEX?",
  },
};

export function gameActions(content) {
  const action = content[0];
  if (action in responseMap) {
    const actionResponse = responseMap[action];
    const game = content.split(/[?!]/)[1];
    return actionResponse[game];
  }
}
