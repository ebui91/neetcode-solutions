// https://neetcode.io/problems/buy-and-sell-crypto

class Solution_15 {
  /**
   * @param {number[]} prices
   * @return {number}
   */

  // Brute Force solution
  // maxProfit(prices) {
  //     let maxProfit = 0;

  //     for (let i=0; i<prices.length;i++) {
  //         for (let j=i+1; j<prices.length;j++) {
  //             let profit = prices[j] - prices[i];
  //             if (profit > maxProfit) {
  //                 maxProfit = profit;
  //             }
  //         }
  //     }
  //     return maxProfit;
  // }

  // Sliding Window solution
  maxProfit(prices) {
      let left = 0;
      let right = 1;
      let maxProfit = 0;

      while (right < prices.length) {
          if (prices[left] < prices[right]) {
              let profit = prices[right] - prices[left];
              if (profit > maxProfit) {
                  maxProfit = profit;
              }
          } else {
              left = right;
          }
          right++;
      }
      return maxProfit;
  }
}
