public class Solution {
    // Brute Force solution
    // public int[] TwoSum(int[] nums, int target) {
    //     for (int i=0; i < nums.Length; i++) {
    //         for (int j=i+1; j < nums.Length; j++) {
    //             if (nums[i] + nums[j] == target) {
    //                 return new int[] {i, j};
    //             }
    //         }
    //     }
    //     return new int[0];
    // }

    // Hash Map solution
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> hashMap = new Dictionary<int, int>();

        for(int i=0; i<nums.Length; i++) {
            int diff = target - nums[i];

            if (hashMap.ContainsKey(diff)) {
                return new int[]{hashMap[diff], i};
            } else {
                hashMap.Add(nums[i], i);
            }
        }
        return new int[0];
    }
}