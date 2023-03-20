function fibonacci(n, dp={}) {
    if (n<2) return n
    if (n in dp) 
        return dp[n]
    
    dp[n] = fibonacci(n-1, dp) + fibonacci(n-2, dp)
    return dp[n]
}

console.log(fibonacci(20));