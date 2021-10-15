const Intern = require("../lib/Intern.js");
let myIntern = new Intern ("Leo", 11111, "leo@mail.com", "MIT");


test('Intern name test', () =>{
    expect(myIntern.name).toBe('Leo');
    expect(myIntern.id).toBeGreaterThan(0);
    expect(myIntern.email).toBe('leo@mail.com');
    expect(myIntern.school).toEqual('MIT');
    expect(myIntern.getRole()).toEqual('Intern');
  });
