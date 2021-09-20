
const Engineer = require('../lib/Engineer.js')

test('creates an engineer object', () => {
    const engineer = new Engineer ('Linus', '1010', 'linus@snail.com', 'linusgit')

    expect(engineer.name).toBe('Linus');
    expect(engineer.id).toBe('1010');
    expect(engineer.email).toBe('linus@snail.com');
    expect(engineer.github).toBe('linusgit');
});

test ("gets engineer's github username", () => {
    const engineer = new Engineer ('Linus', '1010', 'linus@snail.com', 'linusgit')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('linusgit'));
});

test("gets engineer's role", () => {
    const engineer = new Engineer ('Linus', '1010', 'linus@snail.com', 'linusgit')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});