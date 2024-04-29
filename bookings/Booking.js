class Booking {
    constructor(customerName, date, time, numGuests) {
        this.customerName = customerName;
        this.date = date;
        this.time = time;
        this.numGuests = numGuests;
    }

    bookingDetails() {
        return `Thank you for placing a reservation with us! Your reservation is set to ${this.date} at ${this.time} for ${this.numGuests} guests under the name ${this.customerName}.`;
    }

    // using console.log here instead of return to store response in a prompt
    confirmBookingDetails() {
        console.log (`Do you want to make any changes to your reservation? (Y/N): Name: ${this.customerName}, Date: ${this.date}, Time: ${this.time}, Guests: ${this.numGuests} `);
    }

}

module.exports = Booking;