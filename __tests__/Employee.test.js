const Employee = require('../lib/Employee');
const isEmail = require('validator/lib/isEmail');

test('creates an employee object', () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');

    expect(employee.name).toBe('Justin');
    expect(employee.employeeID).toEqual(23);
    expect(employee.email).toBe('jacaskey@gmail.com');
});

test('checks types of employee object properties', () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.employeeID).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(isEmail(employee.email)).toBeTruthy();
});

test("gets employee's name", () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');
    
    let name = employee.getName();
    expect(name).toEqual(employee.name);
});

test("gets employee's Id", () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');

    let id = employee.getId();
    expect(id).toEqual(employee.employeeID.toString());
});

test("gets employee's Email", () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');

    let email = employee.getEmail();
    expect(email).toEqual(employee.email);
});

test("gets employee's default role", () => {
    const employee = new Employee('Justin', 23, 'jacaskey@gmail.com');

    let role = employee.getRole();
    expect(role).toBe("Employee");
});