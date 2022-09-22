const {Car} = require('./car.js');

describe('Testing car method calls.', () => {
    let car1;
    let car2;
    let car3;
    let car4;
    let car5;
    let car6;
    beforeEach(() => {
        car1 = new Car('Lamborghini', 500000, 'V12');
        car2 = new Car('Ferrari', 500000, 'V12');
        car3 = new Car('Aston Martin', 400000, 'V10');
        car4 = new Car('Porsche', 100000, 'V8');
        car5 = new Car('BMW', 80000, 'V8');
        car6 = new Car('Maserati', 200000, 'V10');
    })
    
    test("Can get manufacturer", () => {
        expect(car1.getManufacturer()).toBe('Lamborghini');
    })
    
    test("Can set manufacturer", () => {
        car2.setManufacturer('Mercedes-Benz');
        expect(car2.getManufacturer()).toBe('Mercedes-Benz');
    })

    test("Can get price", () => {
        expect(car3.getPrice()).toBe(400000);
    })

    test("Can set price", () => {
        car4.setPrice(600000);
        expect(car4.getPrice()).toBe(600000);
    })

    test("Can get engine", () => {
        expect(car5.getEngine()).toBe('V8');
    })

    test("Can set engine", () => {
        car6.setEngine('V8');
        expect(car6.getEngine()).toBe('V8');
    })

})
