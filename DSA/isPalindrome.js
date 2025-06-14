function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }
  return true;
}