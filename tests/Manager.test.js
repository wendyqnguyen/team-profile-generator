const Manager = require("../lib/Manager.js");


test('Creates a Manager object', () => {
  const myManager = new Manager ('Mark', 81818, 'mark@mail.com', 101);
  expect(myManager.name).toBe('Mark');
  expect(myManager.id).toBeGreaterThan(0);
  expect(myManager.email).toBe('mark@mail.com');
  expect(myManager.officeNumber).toBeGreaterThan(0);
  expect(myManager.getRole()).toBe('Manager');
});

