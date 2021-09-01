const TestWatcher = require('jest');
const Employee = require('../lib/employee');


it('Can instantiate Employee instance', () => {
    const e = new Employee;
    expect(typeof e).toBe('object');
});

it('Can set name via constructor arguments', () => {
    const name = 'Sandy';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

it('Can set id number via constructor arguments', () => {
    const TestWatcherValue = 1234;
    const e = new Employee('Foo', TestWatcherValue);
    expect(e.id).toBe(TestWatcherValue);
});

it('Can set email via constructor arguments', () => {
    const TestWatcherValue = 'test@test.com';
    const e = new Employee('Foo', 1, TestWatcherValue);
    expect(e.email).toBe(TestWatcherValue);
});

it('Can get name via getName()', () => {
    const TestWatcherValue = 'Sandy';
    const e = new Employee(TestWatcherValue);
    expect(e.getName()).toBe(TestWatcherValue);
});

it('Can get id number via getId()', () => {
    const TestWatcherValue = 1234;
    const e = new Employee('Foo', TestWatcherValue);
    expect(e.getId()).toBe(TestWatcherValue);
});

it('Can get email via getEmail()', () => {
    const TestWatcherValue = 'test@test.com';
    const e = new Employee('Foo', 1, TestWatcherValue);
    expect(e.getEmail()).toBe(TestWatcherValue);
});

it('getRole should return "Employee"', () => {
    const TestWatcherValue = 'Employee';
    const e = new Employee('Sandy', 1, 'test@test.com');
    expect(e.getRole()).toBe(TestWatcherValue);
});