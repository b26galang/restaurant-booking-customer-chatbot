const EventBooking = require('../EventBooking');

describe("A test suite for child class for Booking", () => {
    let event;

    beforeEach(() => {
        event = new EventBooking("Bridget", "April 1st", "4pm", 3, "Lunch");
    })

    test("Constructor should properly initializes properties", () => {
        expect(event.customerName).toBe("Bridget");
        expect(event.date).toBe("April 1st");
        expect(event.time).toBe("4pm");
        expect(event.numGuests).toBe(3);
        expect(event.eventType).toBe("Lunch");
    })

    test("bookingDetails should return correct details", () => {
        let bookingDetails = event.bookingDetails();
        expect(typeof bookingDetails).toEqual("string");
        expect(bookingDetails).toBe("Customer name: Bridget, Date: April 1st, Time: 4pm, Number of Guests: 3");
    })
})

