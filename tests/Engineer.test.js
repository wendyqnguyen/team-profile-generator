const Engineer = require("../lib/Engineer.js")
let myEngineer = new Engineer ("Iris", 1205, "iris@mail.com", "coderiris");


test("Engineer name test", () =>{
    expect(myEngineer.name).toEqual("Iris");
  });

test("Engineer employee number > 0 test", () =>{
    expect(myEngineer.id).toBeGreaterThan(0);
  });

test("Engineer email test", () =>{
  expect(myEngineer.email).toEqual("iris@mail.com");
});

test("Engineer GitHub test", () =>{
    expect(myEngineer.gitHub).toEqual("coderiris");
  });

test("Engineer role test", () =>{
    expect(myEngineer.getRole()).toEqual("Engineer");
  });

