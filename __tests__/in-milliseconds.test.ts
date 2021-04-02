import inMilliSeconds from "../src/in-milliseconds";

describe("library", () => {
    it("seconds function work as expected", () => {
        const result = inMilliSeconds.seconds(2);

        expect(result).toBe(2 * 1000)
    })

    it("minutes function works as expected", () => {
        const result = inMilliSeconds.minutes(2);

        expect(result).toBe(60 * 2 * 1000);
    })

    it("hours function works as expected", () => {
        const result = inMilliSeconds.hours(2);

        expect(result).toBe(60 * 60 * 2 * 1000);
    })

    it("days function works as expected", () => {
        const result = inMilliSeconds.days(2);

        expect(result).toBe(60 * 60 * 24 * 2 * 1000);
    })

    it("weeks function works as expected", () => {
        const result = inMilliSeconds.weeks(2);

        expect(result).toBe(60 * 60 * 24 * 7 * 2 * 1000);
    })

    it("months function works as expected", () => {
        const result = inMilliSeconds.months(2);

        expect(result).toBe(60 * 60 * 24 * 30 * 2 * 1000);
    })

    it("years function works as expected", () => {
        const result = inMilliSeconds.years(2);

        expect(result).toBe(60 * 60 * 24 * 365 * 2 * 1000);
    })

    it("month function with custom daysInMonth parameter works as expected", () => {
        const result = inMilliSeconds.months(2, 28);

        expect(result).toBe(60 * 60 * 24 * 28 * 2 * 1000);
    })
})

