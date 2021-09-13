
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Mike Van', '5678', 'mike@gmail.com', 'A123');

    expect(manager.name).toBe('Mike Van');
    expect(manager.id).toBe('5678');
    expect(manager.email).toBe('mike@gmail.com');
    expect(manager.office).toBe('A123');
});

test("gets employee's role", () => {
    const manager = new Manager('Mike Van', '5678', 'mike@gmail.com', 'A123');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

});