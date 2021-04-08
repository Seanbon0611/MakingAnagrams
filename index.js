/*
Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions required to make  a and b anagrams. Any characters can be deleted from either of the strings.
 */

function makeAnagram(a, b) {
  //split both strings
  let splitA = a.split("")
  let splitB = b.split("")
  //create a map that will keep track of the frequency of each character
  let firstMap = {};
  //if there are any characters that need to be deleted, keep track of the amount
  let deletedChars = 0;
  
  //loop through first string, if the key already exists within the map increase it's value by 1. If it does not already exist it's value is now 1
  for (let char of splitA) {
    if (firstMap[char]) {
      firstMap[char]++
    } else {
      firstMap[char] = 1
    }
  }
  //loop through string b, if this character exists within the map, reduce the keys value by 1. if is not within the map we know it will need to be deleted so we increase deletedChars value by 1
  for (let char of splitB) {
    if (firstMap[char]) {
      firstMap[char]--
    } else {
      deletedChars++
    }
  }
  //finally, looping through the hashmap, if the values of the keys within the hashmap are greater than 1 we want to take that value and add it to our current count of characters that need to be deleted
  for (let char in firstMap) {
    if (firstMap[char] > 0) {
      deletedChars += firstMap[char]
    }
  }
  return deletedChars
}

makeAnagram("fad", "fab")
makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")