const Diner = require('../Diner');

describe("A test suite for the Diner class", () => {
    const diner = new Diner("Elmers", "123 Tacoma");

    test("Constructor assigns correct values", () => {
        expect(diner.name).toBe("Elmers");
        expect(diner.address).toBe("123 Tacoma");
        expect(diner.cuisineType).toBe("breakfast");
    });

    test("describe() returns the correct properties of the Diner object", () => {
        expect(diner.describe()).toBe("The diner is Elmers at 123 Tacoma. They specialize in breakfast food.");
    });

    test("Invoking makeReservation() with a Diner object console logs a message when user tries to make a reservation", () => {
        const consoleSpy = jest.spyOn(console,'log');
        diner.makeReservation();
        expect(consoleSpy).toHaveBeenCalledWith("There is no need to book a reservation here! You are welcome to visit our diner at any time during our hours. ");
    });
});