const Intern = require('../lib/Intern');
const intern = new Intern('sal', '123', 'sal@mail.com', 'UCR');


test('for if intern-object has constructor-values', () => {
    expect(intern.name).toBe('sal');
    expect(intern.id).toBe('123');
    expect(intern.email).toBe('sal@mail.com');
    expect(intern.school).toBe('UCR')
});

test('for intern name constructor-value', () => {
    expect(intern.getName()).toBe('sal');
});

test('for intern id constructor value', () => {
    expect(intern.getId()).toBe('123');
});

test('for intern email constructor value', () => {
    expect(intern.getEmail()).toBe('sal@mail.com');
});

test('for intern school constructor value', () => {
    expect(intern.getSchool()).toBe('UCR');
});

test('for intern role constructor value', () => {
    expect(intern.getRole()).toBe('Intern');
});