const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');
const TestWatcher = require('jest');

it('Can set gitHub account via constructor', () => {
    const TestWatcherValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.github).toBe(TestWatcherValue);
});

it('getRole() should return "Engineer"', () => {
    const TestWatcherValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(TestWatcherValue);
});

it('Can get GitHub username via getGithub()"', () => {
    const TestWatcherValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", TestWatcherValue);
    expect(e.getGithub()).toBe(TestWatcherValue);
});