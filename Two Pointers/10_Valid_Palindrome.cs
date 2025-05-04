public class Solution {
  public bool IsPalindrome(string s) {
    int l=0;
    int r=s.Length-1;

    while(l<r) {
      while(l<r && !IsAlphaNumeric(s[l])) {
        l++;
      }
      while(r>l && !IsAlphaNumeric(s[r])) {
        r--;
      }
      if(char.ToLower(s[l]) != char.ToLower(s[r])) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  }

  public bool IsAlphaNumeric(char c) {
    return (
      c>='A' && c<='Z'
      || c>='a' && c<='z'
      || c>= '0' && c<= '9'
    );
  }
}
