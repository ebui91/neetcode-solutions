// https://neetcode.io/problems/anagram-groups
class Solution_04 {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const hashMap = {};
    for(let str of strs) {
      // create a new Array of length 26, and set the character count for each index to 0
      const count = new Array(26).fill(0);

      for(let char of str) {
        // uses ASCII char code to map each letter to a different index
        // increments the count by 1 for char match
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
      }
      // consolidate the char counts into a string to be used as a key for the hash map
      // ex: 1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0
      const key = count.join(',');
      // if this combination of chars doesn't exist yet, then add it to the hash map
      if (!hashMap[key]) {
        hashMap[key] = [];
      }
      // add the string to the list with matching key inside of the hash map
      hashMap[key].push(str);
    }
    return Object.values(hashMap);
  }
}
