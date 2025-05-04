// https://neetcode.io/problems/two-integer-sum
class Solution_03 {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number) {
    const hashMap = {};
    for (let i=0; i<nums.length; i++) {
      let diff: number = target - nums[i];
      if (hashMap.hasOwnProperty(diff)) {
        return [hashMap[diff], i];
      }
      hashMap[nums[i]] = i;
    }
  }
}