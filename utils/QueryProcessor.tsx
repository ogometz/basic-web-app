export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "Your AndrewID is ogometz"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Owen Gometz"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return (
      "Owen Gometz"
    );
  }
  const additionMatch = query.match(/what is (\d+) plus (\d+)/i);
  if (additionMatch) {
    const num1 = parseInt(additionMatch[1], 10);
    const num2 = parseInt(additionMatch[2], 10);
    return `${num1 + num2}`;
  }
  const largestMatch = query.match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)/i);
    if (largestMatch) {
      const num1 = parseInt(largestMatch[1], 10);
      const num2 = parseInt(largestMatch[2], 10);
      const num3 = parseInt(largestMatch[3], 10);
      const largestNumber = Math.max(num1, num2, num3);
      return `${largestNumber}`;
    }
  const multipluyMatch = query.match(/what is (\d+) multiplied by (\d+)/i);
  if (multipluyMatch) {
    const num1 = parseInt(multipluyMatch[1], 10);
    const num2 = parseInt(multipluyMatch[2], 10);
    return `${num1 * num2}`;
  }
  const squareCubeMatch = query.match(/which of the following numbers is both a square and a cube: (\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/i);
  if (squareCubeMatch) {
    const num1 = parseInt(squareCubeMatch[1], 10);
    const num2 = parseInt(squareCubeMatch[2], 10);
    const num3 = parseInt(squareCubeMatch[3], 10);
    const num4 = parseInt(squareCubeMatch[4], 10);
    const num5 = parseInt(squareCubeMatch[5], 10);
    const num6 = parseInt(squareCubeMatch[6], 10);
    const num7 = parseInt(squareCubeMatch[7], 10);
    const numbers = [num1, num2, num3, num4, num5, num6, num7];
    const isPerfectSquare = (num: number) => {
      const sqrt = Math.sqrt(num);
      return sqrt === Math.floor(sqrt);
    };
    const isPerfectCube = (num: number) => {
      const cbrt = Math.cbrt(num);
      return cbrt === Math.floor(cbrt);
    };
    const solution = numbers.filter(num => isPerfectSquare(num) && isPerfectCube(num));

    return solution.length > 0 ? `${solution.join(", ")}` : "None of the numbers are both squares and cubes.";
  }

  const primeMatch = query.match(/which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/i);
  if (primeMatch) {
    const num1 = parseInt(primeMatch[1], 10);
    const num2 = parseInt(primeMatch[2], 10);
    const num3 = parseInt(primeMatch[3], 10);
    const num4 = parseInt(primeMatch[4], 10);
    const num5 = parseInt(primeMatch[5], 10);
    const numbers = [num1, num2, num3, num4, num5];
    const isPrime = (num: number) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
    const primes = numbers.filter(isPrime);
    return primes.length > 0 ? `${primes.join(", ")}` : "None of the numbers are prime.";
  }



  return "";
}
