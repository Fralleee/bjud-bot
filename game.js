const games = ["overwatch", "valorant", "apex"];

export function gameMatching(content) {
  if (content.startsWith("!")) return exclamateGame(content);
  else if (content.startsWith("?")) return askGame(content);
}

function exclamateGame(content) {
  const keyword = content.split("!")[1];
  if (games.includes(keyword)) {
    return `@everyone dags för ${keywrod}!!! Tagga!`;
  }
}

function askGame(content) {
  const keyword = content.split("?")[1];
  if (games.includes(keyword)) {
    return `@everyone någon som är på ${keywrod}?`;
  }
}
