const Intern = require('../lib/Intern');
const isEmail = require('validator/lib/isEmail');

test('creates an intern object', () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    expect(intern.name).toBe('Jessica');
    expect(intern.employeeID).toEqual(15);
    expect(intern.email).toBe('jessica@uabc.com');
    expect(intern.school).toBe('University of ABC');
});

test('checks types of intern object properties', () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.name.length).toBeGreaterThan(0);
    expect(intern.employeeID).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(isEmail(intern.email)).toBeTruthy();
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');
    
    let name = intern.getName();
    expect(name).toEqual(intern.name);
});

test('gets intern Id', () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    let id = intern.getId();
    expect(id).toEqual(intern.employeeID.toString());
});

test('gets intern Email', () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    let email = intern.getEmail();
    expect(email).toEqual(intern.email);
});

test("gets intern's role", () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    let role = intern.getRole();
    expect(role).toBe("Intern");
});

test("gets intern's school as a string", () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    let school = intern.getSchool();
    expect(school).toEqual(expect.any(String));
});

test("gets intern's school from school property", () => {
    const intern = new Intern('Jessica', 15, 'jessica@uabc.com', 'University of ABC');

    let school = intern.getSchool();
    expect(school).toEqual(intern.school.toString());
});