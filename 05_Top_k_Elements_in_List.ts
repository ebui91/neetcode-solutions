// https://neetcode.io/problems/top-k-elements-in-list
class Solution_05 {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    const hashMap: { string?: number } = {};

    for(let i=0; i<nums.length; i++) {
      if (hashMap[nums[i]]) {
        hashMap[nums[i]] +=1;
      } else {
        hashMap[nums[i]] = 1;
      }
    };
    const arr: [string, number][] = Object.entries(hashMap);
    const sorted: [string, number][]  = arr.sort((a: [string, number], b: [string, number]) => b[1] - a[1]);
    const selected: [string, number][] = sorted.slice(0, k);
    return selected.map(array => array[0]);
  }
}
