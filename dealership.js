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
        this.addCarToStock = (car) => _stock.push(car);
        this.getManufacturers = () => _stock.map(getManufacturer());
        this.getCarsByManufacturer = (manufacturer) => _stock.filter(car => car.getManufacturer() === manufacturer);
        this.getTotalStockValue = () => _stock.reduce((acc, car) => acc += car.getPrice(), 0);
    }
}

module.exports = {Dealership}