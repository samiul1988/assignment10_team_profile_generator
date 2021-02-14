const Manager = require('../lib/Manager');
const isEmail = require('validator/lib/isEmail');

test('creates a manager object', () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    expect(manager.name).toBe('Samiul');
    expect(manager.employeeID).toEqual(15);
    expect(manager.email).toBe('samiulhc@ymail.com');
    expect(manager.officeNumber).toBe(48);
});

test('checks types of manager object properties', () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.employeeID).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(isEmail(manager.email)).toBeTruthy();
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);
    
    let name = manager.getName();
    expect(name).toEqual(manager.name);
});

test("gets manager's Id", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    let id = manager.getId();
    expect(id).toEqual(manager.employeeID.toString());
});

test("gets manager's Email", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    let email = manager.getEmail();
    expect(email).toEqual(manager.email);
});

test("gets manager's role", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    let role = manager.getRole();
    expect(role).toBe("Manager");
});

test("gets manager's officer number as a string", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    let officeNumber = manager.getOfficeNumber();
    expect(officeNumber).toEqual(expect.any(String));
});

test("gets manager's officer number from officeNumber property", () => {
    const manager = new Manager('Samiul', 15, 'samiulhc@ymail.com', 48);

    let officeNumber = manager.getOfficeNumber();
    expect(officeNumber).toEqual(manager.officeNumber.toString());
});