import Fuse from "fuse.js"

export const keywordMap = new Map<string[], string>([
  [["salem", "jönköping"], "Näee va tråkigt."],
  [["sova", "söva", "ge mig"], "Klent."],
  [["bjuds det", "om det bjuds", "dåligt med bjud"], "Klart det bjuds"],
  [["öl", "kebab", "pizza", "taco", "korka upp"], "Ååh va gott!"],
  [["hallåses", "fel på låset", "fel på låses", "brevinkastet", "låna wc"], "Håll om mig!"],
  [
    ["majkstyle", "dra en majk", "majk-style", "majk special", "majk-special", "majkspecial"],
    "**Majk special** *[maɪkspɛʃ.əl]*\nHandlingen där datorspelaren hämtar __två__ öl istället för __en__.\n*Se även: lat, soffpotatis, alkoholist*"
  ],
  [["tack", "tock", "takk"], "Naj naj naj, RU sa ha tack!"],
  [["böge", "bestefar", "kuke"], "Jæ meget godt!"],
  [["easy game", "easy life", "ez game"], "Och en glädjelig jul till er alla!"],
  [["brunt ut", "aningen brunt", "mycket brunt", "väldigt brunt"], "Ser rätt brunt ut ja."],
  [["jordkällare", "fritzl", "fritzel", "linder"], "Micke?"],
  [["brifelt", "linus"], "Ta inte för givet att din kamrat står vid punkten!"]
])

const options = {
  includeScore: true,
  threshold: 0.5,
  keys: ["word"]
}

const wordsList = [...keywordMap.keys()].flatMap(k => k.map(word => ({ word })))
const fuse = new Fuse(wordsList, options)

export function wordMatches(content: string): string | undefined {
  if (content.startsWith("/tagga")) {
    const game = content.slice("/tagga".length).trim()
    if (game) {
      return `Woooh! @everyone! Let's play ${game}!`
    }
  }

  switch (content) {
    case "öl?":
      return "När får man hämta öl egentligen?"
    case "öl!":
      return "Nu får man hämta öl!!!"
    case "värsåsjönna":
      return "VärsåsJönna <3"
    case "spel?":
      return "Dans!"
    case "dans?":
      return "Spel!"
  }

  const result = fuse.search(content)
  if (result.length && result[0].score && result[0].score <= options.threshold) {
    const matchedKey = [...keywordMap.keys()].find(keyArray => keyArray.includes(result[0].item.word))
    if (matchedKey) {
      return keywordMap.get(matchedKey)
    }
  }
}
