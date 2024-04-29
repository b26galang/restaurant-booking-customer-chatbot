const FineDining = require('../restaurants/FineDining');
const Diner = require('../restaurants/Diner');
const BarAndGrill = require('../restaurants/BarAndGrill');

const prompt = require('prompt-sync')()

let restaurantType = prompt("Hello there! Please select an option for the type of restaurant you would like to book a reservation for: 1) Diner, 2) Bar & Grill, 3) Fine Dining ");

// Booking initial reservation based on option selected 
switch (restaurantType) {
    // cases are strings because prompt returns a string
    // Diner
    case "1":
        // Create an instance of a FineDining restaurant
        const diner = new Diner("Family Pancake House", "17621 Redmond Way");
        console.log();

        console.log(diner.describe());
        diner.makeReservation();
        break;

    // Bar & Grill
    case "2":
        const barAndGrill = new BarAndGrill("Kirkland's Bar & Grill", "832 Kirkland Ave");
        console.log();
        console.log("There is no need for a reservation if you want to sit in the bar area.");

        console.log("If you'd like to reserve a booth, we can assist you with that.");
        console.log();

        const makeBooking = prompt("Would you like to make a reservation for a booth? (Y/N)? ");

        if (makeBooking.toLowerCase() === "y") {
            let customerName = prompt("Can I please get a name for the reservation? ");
            console.log();

            let date = prompt("What day would you like to schedule it? (MM/DD) ");
            console.log();

            let time = prompt("What time? (HH:MM) AM/PM ");
            console.log();

            let numGuests = prompt("How many people? ");
            console.log();

            // Make reservation at the bar & grill
            const barAndGrillReservation = barAndGrill.makeReservation(customerName, date, time, numGuests);

            // Prompt user to confirm reservation details or update 
            let answer = prompt(barAndGrillReservation.confirmBookingDetails());
            console.log();

            // Option to change/update reservation details
            if (answer.toLowerCase() === "y") {
                console.log("Please provide your updated reservation details");
                console.log();

                barAndGrillReservation.customerName = prompt("Name for the reservation: ");
                console.log();

                barAndGrillReservation.date = prompt("Day for the reservation: (MM/DD)  ");
                console.log();

                barAndGrillReservation.time = prompt("Time for the reservation: (HH:MM) AM/PM ");
                console.log();

                barAndGrillReservation.numGuests = prompt("Number of guests: ");
                console.log();

                console.log(barAndGrill.describe());

                console.log(barAndGrillReservation.bookingDetails());
            } else {
                console.log(barAndGrillReservation.bookingDetails());
                console.log(barAndGrill.describe());
                console.log("We hope to see you soon!");
            }
        } else {
            console.log();
            console.log(barAndGrill.describe());
            console.log("We hope to see you soon!");
        }
        break;

    // Fine Dining
    case "3":
        // Create an instance of a FineDining restaurant
        const fineDiningRestaurant = new FineDining("Rila", "452 Royal St", "French");
        console.log();

        let customerName3 = prompt("Can I please get a name for the reservation? ");
        console.log();

        let date3 = prompt("What day would you like to schedule it? (MM/DD) ");
        console.log();

        let time3 = prompt("What time? (HH:MM) AM/PM ");
        console.log();

        let numGuests3 = prompt("How many people? ");
        console.log();

        // Make reservation at the fine dining restaurant
        const fineDiningBooking = fineDiningRestaurant.makeReservation(customerName3, date3, time3, numGuests3);

        // Prompt user to confirm reservation details or update 
        let answer3 = prompt(fineDiningBooking.confirmBookingDetails());

        // Option to change/update reservation details
        if (answer3.toLowerCase() === "y") {
            console.log("Please provide your updated reservation details");
            console.log();

            fineDiningBooking.customerName = prompt("Name for the reservation: ");
            console.log();

            fineDiningBooking.date = prompt("Day for the reservation: (MM/DD)  ");
            console.log();

            fineDiningBooking.time = prompt("Time for the reservation: (HH:MM) AM/PM ");
            console.log();

            fineDiningBooking.numGuests = prompt("Number of guests: ");
            console.log();

            console.log(fineDiningRestaurant.describe());

            console.log(fineDiningBooking.bookingDetails());
        } else {
            console.log();
            console.log(fineDiningRestaurant.describe());
            console.log(fineDiningBooking.bookingDetails());
        }
        break;
    default: console.log("Please select from the options available: 1, 2 or 3");
}

