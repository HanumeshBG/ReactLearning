import { sum } from '../components/sum';

test("Add the two numbers: ", () => {
    const result = sum(3, 4)

    // Assertion
    expect(result).toBe(7);
})