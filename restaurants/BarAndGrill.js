const Restaurant = require('../restaurants/Restaurant');

class BarAndGrill extends Restaurant {
    constructor(name, address, cuisineType = "American") {
        super(name, address, cuisineType);
    }

    describe() {
        return `The Bar/Grill is ${this.name} at ${this.address}. They specialize in ${this.cuisineType} food.`;
    }
}

module.exports = BarAndGrill;