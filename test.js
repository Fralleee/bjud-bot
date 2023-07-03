import { keywordMap, wordMatches } from "./logic/wordMatches.js";

function test(command, input, actual, expected) {
  const RED = "\x1b[31m";
  const GREEN = "\x1b[32m";
  const RESET = "\x1b[0m";

  let output = actual === expected ? `${GREEN}Pass!${RESET}` : `${RED}Failed! Expected '${expected}' but got '${actual}'${RESET}`;
  console.log(`${command}::${input} ${output}`);
}

// Test each keyword phrase
for (let [words, expectedResponse] of keywordMap.entries()) {
  for (let word of words) {
    const response = wordMatches(word);
    test("keywordMap", word, response, expectedResponse);
  }
}

// Test '/tagga' command
test("/tagga game", "/tagga game", wordMatches("/tagga game"), "Woooh! Let's play game!");
test("/tagga", "/tagga", wordMatches("/tagga"), undefined);

// Test simple case switches
test("öl?", "öl?", wordMatches("öl?"), "När får man hämta öl egentligen?");
test("öl!", "öl!", wordMatches("öl!"), "Nu får man hämta öl!!!");
test("värsåsjönna", "värsåsjönna", wordMatches("värsåsjönna"), "VärsåsJönna <3");
test("spel?", "spel?", wordMatches("spel?"), "Dans!");
test("dans?", "dans?", wordMatches("dans?"), "Spel!");

// Test that an unrecognized phrase returns undefined
test("unrecognized phrase", "unrecognized phrase", wordMatches("unrecognized phrase"), undefined);
