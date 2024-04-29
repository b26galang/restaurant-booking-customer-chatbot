const Restaurant = require('./Restaurant');

class FineDining extends Restaurant {
    constructor(name, address, cuisineType, dressCode = "formal"){
        super(name, address, cuisineType);
        this.dressCode = dressCode;
    }

    describe() {
        return `The restaurant is ${this.name} at ${this.address}. This restaurant specializes in ${this.cuisineType} food. Please note that the dress code is ${this.dressCode}.`;
    }
}

module.exports = FineDining;