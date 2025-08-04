import { sum } from "../sum";

test("sum functions should calcultae the sum of two aruguments ", () => {
    const result  = sum(3,4);
    expect(result).toBe(7);

})