import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return AndrewID', () => {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Your AndrewID is ogometz"
          ));
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Owen Gometz"
          ));
    });
    
    test('should return largest number', () => {
        const query = "Which of the following numbers is the largest: 14, 9, 62?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "62"
          ));
    });

    test('should do addition', () => {
        const query = "What is 51 plus 12?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "63"
          ));
    });

    test('should do multiplication', () => {
        const query = "What is 19 multiplied by 95?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "1805"
          ));
    });

    test('should do square cube function', () => {
        const query = "Which of the following numbers is both a square and a cube: 1681, 2381, 729, 3218, 1728, 131, 3485?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "729"
          ));
    });

    test('should do prime function', () => {
        const query = "Which of the following numbers are primes: 8, 20, 4, 29, 39?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "29"
          ));
    });
});
