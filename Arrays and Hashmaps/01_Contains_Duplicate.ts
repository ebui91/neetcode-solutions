// https://neetcode.io/problems/duplicate-integer
// Ideal solution offering both O(n) time and memory complexity
class Solution_01 {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums): boolean {
    // Javascript Set creates a hash map from nums with only unique values
    // We can then compare the length of the Set and the original nums array to determine if any duplicates exist
    const seen: Set<Number> = new Set(nums);
    return [...seen].length !== nums.length;
  }
}

// Brute Force solution:
class BruteForceSolution_01 {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {
          return true;
        }
      }
    }
    return false;
  }
}

// Sorting Solution
class SortingSolution_01 {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === nums[i - 1]) {
        return true;
      }
    }
    return false;
  }
}