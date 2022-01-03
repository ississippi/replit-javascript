// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// O(n)
function findFactorialRecursive(number) {
  let answer = number;
  if (number === 2) {
    return 2;    
  }
  return number * findFactorialRecursive(number - 1);
}

// O(n)
function findFactorialIterative(number) {
  let answer = 1;
  for (i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}
findFactorialIterative(5);
findFactorialRecursive(5);