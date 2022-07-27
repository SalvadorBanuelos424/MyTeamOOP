const Manager = require('../lib/Manager');
const manager = new Manager('sal', '123', 'sal@mail.com', '101');


test('for if manager-object has constructor-values', () => {
    expect(manager.name).toBe('sal');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('sal@mail.com');
    expect(manager.office).toBe('101')
});

test('for manager name constructor-value', () => {
    expect(manager.getName()).toBe();
});

test('for manager id constructor value', () => {
    expect(manager.getId()).toBe();
});

test('for manager email constructor value', () => {
    expect(manager.getEmail()).toBe();
});

test('for manager room constructor value', () => {
    expect(manager.getOffice()).toBe();
});

test('for manager role constructor value', () => {
    expect(manager.getRole()).toBe();
});