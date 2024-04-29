const Booking = require('../bookings/Booking');

class Restaurant {
    constructor(name, address, cuisineType) {
        this.name = name;
        this.address = address;
        this.cuisineType = cuisineType;
    }

    describe() {
        return `Name: ${this.name}, Address: ${this.address}, Cuisine Type: ${this.cuisineType}`;
    }

    makeReservation(customerName, date, time, numGuests) {
        const booking = new Booking(customerName, date, time, numGuests);
        return booking;
    }
}

module.exports = Restaurant;