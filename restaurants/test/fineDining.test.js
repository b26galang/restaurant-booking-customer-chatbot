const FineDining = require('../FineDining');

describe("A test suite for the FineDining class", () => {
    const fineDining = new FineDining("Noburu", "231 34th Ct Redmond", "Japanese");

    test("Constructor assigns the correct values", () => {
        expect(fineDining.name).toBe("Noburu");
        expect(fineDining.address).toBe("231 34th Ct Redmond");
        expect(fineDining.cuisineType).toBe("Japanese");
    });

    test("describe() returns the correct properties of the FineDining object", () => {
        expect(fineDining.describe()).toBe("The restaurant is Noburu at 231 34th Ct Redmond. This restaurant specializes in Japanese food. Please note that the dress code is formal.")
    });

    test("Invoking makeReservation() with the FineDining object initalizes a Booking object with the correct properties", () => {
        const fineDiningBooking = fineDining.makeReservation("Sean", "11/10", "11:00PM", "2");
        expect(fineDiningBooking.customerName).toBe("Sean");
        expect(fineDiningBooking.date).toBe("11/10");
        expect(fineDiningBooking.time).toBe("11:00PM");
        expect(fineDiningBooking.numGuests).toBe("2");
    });
});