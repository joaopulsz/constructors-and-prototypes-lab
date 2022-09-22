const {Car} = require('./car.js');
const {Dealership} = require('./dealership.js');
const {Customer} = require('./customer.js');

let dealership;
let car1;
let car2;
let customer;
beforeEach(() => {
    dealership = new Dealership('JP Motors', 3);
    car1 = new Car('BMW', 30000, 'V6');
    car2 = new Car('Ferrari', 800000, 'V12');
    dealership.addCarToStock(car1);
    dealership.addCarToStock(car2);
    customer = new Customer('Joao', 100000);
})

test('Can buy car', () => {
    customer.buyCar(dealership, car1);
    expect(customer.getCar()).toBe(car1);
    expect(customer.getWallet()).toBe(70000);
    expect(dealership.getStock().length).toBe(1);
})

test('Cannot buy car', () => {
    customer.buyCar(dealership, car2);
    expect(customer.getCar()).toBe(null);
    expect(customer.getWallet()).toBe(100000);
    expect(dealership.getStock().length).toBe(2);
})
