// need to find if the target sum is possible with the given positive numbers
// can take a number any number of times 
function canSum(target, nums, memo = {}) {
  if (target === 0) return true
  if (target < 0) return false
  if (target in memo) return memo[target]
  for (let num of nums) {
    const result = canSum(target - num, nums, memo)
    if (result)  {
      memo[target] = true
      return true
    }
  }
  memo[target] = false
  return false
}

const nums = [7, 14]
console.log(canSum(380, nums))