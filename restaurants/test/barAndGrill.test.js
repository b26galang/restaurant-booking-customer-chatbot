const BarAndGrill = require('../BarAndGrill');

describe("A test suite for the BarAndGrill class", () => {
    let barAndGrill = new BarAndGrill("Kirkland Bar & Grill", "330 4th St", "American");

    test("Constructor assigns correct values", () => {
        expect(barAndGrill.name).toBe("Kirkland Bar & Grill");
        expect(barAndGrill.address).toBe("330 4th St");
        expect(barAndGrill.cuisineType).toBe("American");
    });

    test("describe() returns the correct properties of the BarAndGrill object", () => {
        expect(barAndGrill.describe()).toBe("The Bar/Grill is Kirkland Bar & Grill at 330 4th St. They specialize in American food.");
    });

    test("Invoking makeReservation() with the BarAndGrill object initalizes a Booking object with the correct properties", () => {
        const barAndGrillBooking = barAndGrill.makeReservation("Bridget", "12/20", "12:30PM", "3");
        expect(barAndGrillBooking.customerName).toBe("Bridget");
        expect(barAndGrillBooking.date).toBe("12/20");
        expect(barAndGrillBooking.time).toBe("12:30PM");
        expect(barAndGrillBooking.numGuests).toBe("3");
    });
});