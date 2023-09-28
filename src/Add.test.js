import { render } from "@testing-library/react";
import Add from "./Add";

describe("Testing Add Functionality", () => {
    
    
    it("In Arguments a , b, passed values 50 & 20 should return 70", () => {
        var value = Add(50, 20);
        expect(value).toBe(70)
    });

    it("Add function invoking without values should return 0", () => {
        var value = Add();
        expect(value).toBe(0);
    });

    it("Add function with single argument should return NaN", () => {
        var value = Add(40);
        expect(value).toBe(40)
    });

    it("Add Function with string number arguments should return number addtion value", () => {
        var value = Add("40", "90")
        expect(value).toBe(130)
    });

    it("Add function with two string values should return NaN", () => {
        var value = Add("Muskan", "Fathima");
        expect(value).toBe(NaN);
    })
    
})
