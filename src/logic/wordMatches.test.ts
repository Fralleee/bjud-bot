import { keywordMap, wordMatches } from "./wordMatches"

describe("wordMatches", () => {
  const keywordEntries = Array.from(keywordMap.entries()) as Array<[string[], string]>

  test.each(keywordEntries)("keywordMap::%p", (words, expected) => {
    for (const word of words) {
      expect(wordMatches(word)).toBe(expected)
    }
  })

  test.each<[string, string | undefined]>([
    ["/tagga game", "Woooh! Let's play game!"],
    ["/tagga", undefined],
    ["öl?", "När får man hämta öl egentligen?"],
    ["öl!", "Nu får man hämta öl!!!"],
    ["värsåsjönna", "VärsåsJönna <3"],
    ["spel?", "Dans!"],
    ["dans?", "Spel!"],
    ["unrecognized phrase", undefined]
  ])("%s", (input, expected) => {
    expect(wordMatches(input)).toBe(expected)
  })
})
