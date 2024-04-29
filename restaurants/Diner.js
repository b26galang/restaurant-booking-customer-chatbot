const Restaurant = require('../restaurants/Restaurant');

class Diner extends Restaurant {
    constructor(name, address, cuisineType = "breakfast") {
        super(name, address, cuisineType);
    }

    describe() {
        return `The diner is ${this.name} at ${this.address}. They specialize in ${this.cuisineType} food.`;
    }

    makeReservation() {
        console.log("There is no need to book a reservation here! You are welcome to visit our diner at any time during our hours. ");
    }
}

module.exports = Diner;