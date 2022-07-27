const Engineer = require('../lib/Engineer');
const engineer = new Engineer('sal', '123', 'sal@mail.com', 'salhub');


test('for if engineer-object has constructor-values', () => {
    expect(engineer.name).toBe('sal');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('sal@mail.com');
    expect(engineer.github).toBe('salhub')
});

test('for engineer name constructor-value', () => {
    expect(engineer.getName()).toBe();
});

test('for engineer id constructor value', () => {
    expect(engineer.getId()).toBe();
});

test('for engineer email constructor value', () => {
    expect(engineer.getEmail()).toBe();
});

test('for engineer github constructor value', () => {
    expect(engineer.getGithub()).toBe();
});

test('for engineer role constructor value', () => {
    expect(engineer.getRole()).toBe();
});