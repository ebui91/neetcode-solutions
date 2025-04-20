// https://neetcode.io/problems/top-k-elements-in-list
class Solution_06 {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
      const hashMap = {};

      for(let i=0; i<nums.length; i++) {
          if (hashMap[nums[i]]) {
              hashMap[nums[i]] +=1;
          } else {
              hashMap[nums[i]] = 1;
          }
      };
      const arr = Object.entries(hashMap);
      const sorted = arr.sort((a, b) => b[1] - a[1]);
      const selected = sorted.slice(0, k);
      return selected.map(array => array[0]);
  }
}
