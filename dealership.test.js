const {Car} = require('./car.js');
const {Dealership} = require('./dealership.js');

describe('Testing dealership methods', () => {

    let dealership;
    let car1;
    let car2;
    let car3;
    let car4;
    let car5;
    let car6;
    beforeEach(() => {
        dealership = new Dealership(`Joao's Motors`, 50);
        car1 = new Car('Lamborghini', 500000, 'V12');
        car2 = new Car('Ferrari', 500000, 'V12');
        car3 = new Car('Aston Martin', 400000, 'V10');
        car4 = new Car('Porsche', 100000, 'V8');
        car5 = new Car('BMW', 80000, 'V8');
        car6 = new Car('Maserati', 200000, 'V10');

        dealership.addCarToStock(car1);
        dealership.addCarToStock(car2);
        dealership.addCarToStock(car3);
        dealership.addCarToStock(car4);
    })

    test('Can get name', () => {
        expect(dealership.getName()).toBe(`Joao's Motors`);
    })

    test('Can get name', () => {
        dealership.setName(`Maria's Motors`);
        expect(dealership.getName()).toBe(`Maria's Motors`);
    })

    test('Can get capacity', () => {
        expect(dealership.getCapacity()).toBe(50);
    })

    test('Can set capacity', () => {
        dealership.setCapacity(40);
        expect(dealership.getCapacity()).toBe(40);
    })

    test('Can get stock count', () => {
        expect(dealership.getStockCount()).toBe(4);
    })

    test('Can add car to stock', () => {
        dealership.addCarToStock(car5);
        expect(dealership.getStockCount()).toBe(5);
    })

})