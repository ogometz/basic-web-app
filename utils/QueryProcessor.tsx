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

  return "";
}
