const Intern = require("../lib/Intern.js")
let myIntern = new Intern ("Leo", 11111, "leo@mail.com", "MIT");


test("Intern name test", () =>{
    expect(myIntern.name).toEqual("Leo");
  });

test("Intern employee number > 0 test", () =>{
    expect(myIntern.id).toBeGreaterThan(0);
  });

test("Intern email test", () =>{
  expect(myIntern.email).toEqual("leo@mail.com");
});

test("Intern school test", () =>{
    expect(myIntern.school).toEqual("MIT");
  });

  test("Intern role test", () =>{
    expect(myIntern.getRole()).toEqual("Intern");
  });
