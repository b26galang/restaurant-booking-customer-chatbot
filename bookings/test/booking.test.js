const Booking = require('../Booking');

describe("A test suite for the Booking class", () => {
    const booking = new Booking("Bridget", "02/25", "1:30PM", "2");
    test("bookingDetails() returns the correct properties of the booking instance", () => {
        expect(booking.bookingDetails()).toBe("Thank you for placing a reservation with us! Your reservation is set to 02/25 at 1:30PM for 2 guests under the name Bridget.");
    });

    test("confirmBookingDetails() console logs the correct inputted reservation details", () => {
        const consoleSpy = jest.spyOn(console,'log');
        booking.confirmBookingDetails();
        expect(consoleSpy).toHaveBeenCalledWith("Do you want to make any changes to your reservation? (Y/N): Name: Bridget, Date: 02/25, Time: 1:30PM, Guests: 2 ");
    });
});