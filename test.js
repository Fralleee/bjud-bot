import { wordMatches } from "./logic/wordMatches.js";

console.log(wordMatches("/tagga game")); // Should print "Woooh! Let's play game!"
console.log(wordMatches("/tagga")); // Should print "You need to specify a game to tag."
// Add more tests as needed...
