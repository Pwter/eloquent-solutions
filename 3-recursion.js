function recursiveOddOrEven(n) {
  if (n < 0) n = -n;
  if (n == 0) return "even";
  if (n == 1) return "odd";

  return recursiveOddOrEven(n-2);

}

console.log("50 is " + recursiveOddOrEven(50));
console.log("75 is " + recursiveOddOrEven(75));
console.log("-1 is " + recursiveOddOrEven(-1));
