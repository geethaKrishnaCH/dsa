// Find out one of the possible ways to get the targetSum from the given positive numbers array
// any one solution is sufficient 
// in case of no solution should return null
function howSum(target, nums, memo = {}) {
  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null
  nums = nums.sort((a, b) => 0.5 - Math.random())
  for (let num of nums) {
    const result = howSum(target - num, nums, memo)
    if (result) {
      result.push(num)
      memo[target] = result
      return result
    }
  }
  memo[target] = null
  return null
}

const nums = [7, 5]
console.log(howSum(92147, nums));