const TestWatcher = require('jest');
const Employee = require('../lib/employee');


TestWatcher('Can instantiate Employee instance', () => {
    const e = new Employee;
    expect(typeof e).toBe('object');
});

TestWatcher('Can set name via constructor arguments', () => {
    const name = 'Sandy';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

TestWatcher('Can set id number via constructor arguments', () => {
    const TestWatcherValue = 1234;
    const e = new Employee('Foo', TestWatcherValue);
    expect(e.id).toBe(TestWatcherValue);
});

TestWatcher('Can set email via constructor arguments', () => {
    const TestWatcherValue = 'test@test.com';
    const e = new Employee('Foo', 1, TestWatcherValue);
    expect(e.email).toBe(TestWatcherValue);
});

TestWatcher('Can get name via getName()', () => {
    const name = 'Sandy';
    const e = new Employee(TestWatcherValue);
    expect(e.getName()).toBe(TestWatcherValue);
});

TestWatcher('Can get id number via getId()', () => {
    const TestWatcherValue = 1234;
    const e = new Employee('Foo', TestWatcherValue);
    expect(e.getId()).toBe(TestWatcherValue);
});

TestWatcher('Can get email via getEmail()', () => {
    const TestWatcherValue = 'test@test.com';
    const e = new Employee('Foo', 1, TestWatcherValue);
    expect(e.getEmail()).toBe(TestWatcherValue);
});

TestWatcher('getRole should return "Employee"', () => {
    const TestWatcherValue = 'Employee';
    const e = new Employee('Sandy', 1, 'test@test.com');
    expect(e.getRole()).toBe(TestWatcherValue);
});