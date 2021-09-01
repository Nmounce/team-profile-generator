const Employee = require('../lib/employee');
const Intern = require('../lib/intern');
const TestWatcher = require('jest');

it('Can set school via constructor', () => {
    const TestWatcherValue = "CIA";
    const e = new Intern("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.school).toBe(TestWatcherValue);
});

it('getRole() should return "Intern"', () => {
    const TestWatcherValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "CIA");
    expect(e.getRole()).toBe(TestWatcherValue);
});

it('Can get school via getSchool()"', () => {
    const TestWatcherValue = "CIA";
    const e = new Intern("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.getSchool()).toBe(TestWatcherValue);
});