const Engineer = require('../lib/Engineer');
const isEmail = require('validator/lib/isEmail');

test('creates an engineer object', () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    expect(engineer.name).toBe('Justin');
    expect(engineer.employeeID).toEqual(23);
    expect(engineer.email).toBe('jcaskey@gmail.com');
    expect(engineer.githubUsername).toBe('jcaskey_github');
});

test('checks types of engineer object properties', () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.name.length).toBeGreaterThan(0);
    expect(engineer.employeeID).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(isEmail(engineer.email)).toBeTruthy();
    expect(engineer.githubUsername).toEqual(expect.any(String));
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');
    
    let name = engineer.getName();
    expect(name).toEqual(engineer.name);
});

test("gets engineer's Id", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    let id = engineer.getId();
    expect(id).toEqual(engineer.employeeID.toString());
});

test("gets engineer's Email", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    let email = engineer.getEmail();
    expect(email).toEqual(engineer.email);
});

test("gets engineer's role", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    let role = engineer.getRole();
    expect(role).toBe("Engineer");
});

test("gets engineer's github username and link as an object", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    let githubInfo = engineer.getGithub();
    expect(githubInfo).toHaveProperty('userName');
    expect(githubInfo).toHaveProperty('githubLink');
});

test("checks engineer's github info object values", () => {
    const engineer = new Engineer('Justin', 23, 'jcaskey@gmail.com', 'jcaskey_github');

    let { userName, githubLink } = engineer.getGithub();
    expect(userName).toBe(engineer.githubUsername);
    expect(githubLink).toEqual(expect.stringContaining(engineer.githubUsername));
});