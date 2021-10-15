const Engineer = require("../lib/Engineer.js")

test('Engineer name test', () =>{
    const myEngineer = new Engineer ("Iris", 1205, "iris@mail.com", "coderiris");
    expect(myEngineer.name).toBe('Iris');
    expect(myEngineer.id).toBeGreaterThan(0);
    expect(myEngineer.email).toBe('iris@mail.com');
    expect(myEngineer.gitHub).toBe('coderiris');
    expect(myEngineer.getRole()).toBe('Engineer');
  });

