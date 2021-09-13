const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Peppermint Pattie', '1234', 'pepper@mail.com');

    expect(employee.name).toBe('Peppermint Pattie');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('pepper@mail.com');
});

test("gets employee's name", () => {
    const employee = new Employee('Peppermint Pattie', '1234', 'pepper@mail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Peppermint Pattie'));
});

test("gets employee's ID", () => {
    const employee = new Employee('Peppermint Pattie', '1234', 'pepper@mail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('1234'));
});

test("gets employee's email", () => {
    const employee = new Employee('Peppermint Pattie', '1234', 'pepper@mail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('pepper@mail.com'));
});

test("gets employee's role", () => {
    const employee = new Employee('Peppermint Pattie', '1234', 'pepper@mail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});