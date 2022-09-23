const { Dealership } = require("./dealership");

const Customer = function(name, wallet) {
    this.name = name;
    this.wallet = wallet;
    this.car = null;
}

Customer.prototype.buyCar = function(dealership, car) {
    this.car = dealership.sellCar(this, car);
}

module.exports = {Customer}