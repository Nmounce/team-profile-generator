const TestWatcher = require('jest');
const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

TestWatcher('Can set office number via constructor argument', () => {
    const TestWatcherValue = 32;
    const e = new Manager("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.officeNumber).toBe(TestWatcherValue);
});

TestWatcher('getRole() should return "Manager"', () => {
    const TestWatcherValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 32);
    expect(e.getRole()).toBe(TestWatcherValue);
});

TestWatcher('Can get office number via getOffice()', () => {
    const TestWatcherValue = 32;
    const e = new Manager("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.getOfficeNumber).toBe(TestWatcherValue);
});