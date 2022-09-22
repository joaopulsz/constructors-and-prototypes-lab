const { Dealership } = require("./dealership");

const Customer = function(name, wallet) {
    let _name = name;
    let _wallet = wallet;
    let _car = null;

    this.getName = () => _name;
    this.setName = (name) => _name = name;
    this.getWallet = () => _wallet;
    this.setWallet = (wallet) => _wallet = wallet;
    this.getCar = () => _car;
    this.setCar = (car) => _car = car;

    this.buyCar = (dealership, car) => {
        
        this.setCar(dealership.sellCar(this, car));
    }

}

module.exports = {Customer}