const Employee = require('../lib/Employee');
const employee = new Employee('sal', '123', 'sal@mail.com');


test('for if employee-object has constructor-values', () => {
    expect(employee.name).toBe('sal');
    expect(employee.id).toBe('123');
    expect(employee.email).toBe('sal@mail.com');
});

test('for employee name constructor-value', () => {
    expect(employee.getName()).toBe();
});

test('for employee id constructor value', () => {
    expect(employee.getId()).toBe();
});

test('for employee email constructor value', () => {
    expect(employee.getEmail()).toBe();
});

test('for employee role constructor value', () => {
    expect(employee.getRole()).toBe();
});