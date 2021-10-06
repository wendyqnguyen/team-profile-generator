const Employee = require("../lib/Employee.js")
let myEmployee = new Employee ("Hugo", 123, "hugo@mail.com");


test("Employee name test", () =>{
    expect(myEmployee.name).toEqual("Hugo");
  });

test("Employee number > 0 test", () =>{
    expect(myEmployee.id).toBeGreaterThan(0);
  });

test("Employee email test", () =>{
  expect(myEmployee.email).toEqual("hugo@mail.com");
});

test("Employee role test", () =>{
  expect(myEmployee.getRole()).toEqual("Employee");
});