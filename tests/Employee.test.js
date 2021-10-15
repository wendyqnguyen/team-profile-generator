const Employee = require("../lib/Employee.js");

test('Creates an Employee object', () =>{
    const myEmployee = new Employee('Hugo', 123, 'hugo@mail.com');
    
    expect(myEmployee.name).toMatch('Hugo');
    expect(myEmployee.id).toBeGreaterThan(0);
    expect(myEmployee.email).toMatch('hugo@mail.com');
    expect(myEmployee.getRole()).toMatch('Employee');
});