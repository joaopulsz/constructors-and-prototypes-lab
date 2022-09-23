// using different syntax to practise it
class Dealership {
    constructor(name, capacity) {
        let _name = name;
        let _capacity = capacity;
        let _stock = [];

        this.getName = () => _name;
        this.setName = (name) => _name = name;
        this.getCapacity = () => _capacity;
        this.setCapacity = (capacity) => _capacity = capacity;
        this.getStock = () => _stock;
        this.setStock = (stock) => _stock = stock;

        this.getStockCount = () => _stock.length;
        this.addCarToStock = (car) => {
            if (_stock.length < _capacity) {
                _stock.push(car);
            }
        }
        this.getManufacturers = () => _stock.map(car => car.getManufacturer());
        this.getCarsByCharacteristic = (characteristic, value) => {
            if (characteristic.toLowerCase() === 'manufacturer') {
                return _stock.filter(car => car.getManufacturer() === value);
            } else if (characteristic.toLowerCase() === 'engine') {
                return _stock.filter(car => car.getEngine() === value);
            } else if (characteristic.toLowerCase() === 'price') {
                return _stock.filter(car => car.getPrice() === value);
            }
        };
        this.getTotalStockValue = () => _stock.reduce((acc, car) => acc += car.getPrice(), 0);

        this.sellCar = (customer, car) => {
            if (customer.wallet >= car.getPrice()) {
                customer.wallet = customer.wallet - car.getPrice();
                const carIndex = this.getStock().indexOf(car);
                return this.getStock().splice(carIndex, 1)[0];
            }
            return null;
        }
    }
}

module.exports = {Dealership}