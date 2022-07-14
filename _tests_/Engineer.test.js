const Engineer = require('../lib/Engineer');
const engineer = new Engineer('sal', '123', 'sal@mail.com', 'salhub');


test('for if engineer-object has constructor-values', () => {
    expect(engineer.name).toBe('sal');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('sal@mail.com');
    expect(engineer.github).toBe('salhub')
});

test('for engineer name constructor-value', () => {
    expect(engineer.getName()).toBe('sal');
});

test('for engineer id constructor value', () => {
    expect(engineer.getId()).toBe('123');
});

test('for engineer email constructor value', () => {
    expect(engineer.getEmail()).toBe('sal@mail.com');
});

test('for engineer github constructor value', () => {
    expect(engineer.getGithub()).toBe('salhub');
});

test('for engineer role constructor value', () => {
    expect(engineer.getRole()).toBe('Engineer');
});