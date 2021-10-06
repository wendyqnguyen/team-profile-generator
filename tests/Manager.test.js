const Manager = require("../lib/Manager.js")
let myManager = new Manager ("Mark", 81818, "mark@mail.com", 101);


test("Manager name test", () =>{
    expect(myManager.name).toEqual("Mark");
  });

test("Manager employee number > 0 test", () =>{
    expect(myManager.id).toBeGreaterThan(0);
  });

test("Manager email test", () =>{
  expect(myManager.email).toEqual("mark@mail.com");
});

test("Manager office number > 0 test", () =>{
    expect(myManager.officeNumber).toBeGreaterThan(0);
  });

  test("Manager role test", () =>{
    expect(myManager.getRole()).toEqual("Manager");
  });
