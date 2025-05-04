// https://neetcode.io/problems/is-anagram
// Sorted solution
class Solution_02 {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    // if 2 strings are not equal length, then it's impossible for them to be anagrams and we do not need to run the rest of the algorithm
    if (s.length !== t.length) {
      return false;
    }

    // sort the 2 strings and do an equality check
    const S = s.split("").sort((a, b) => (a).localeCompare(b)).join("");
    const T = t.split("").sort((c, d) => (c).localeCompare(d)).join("");

    return S === T;
  }
}
