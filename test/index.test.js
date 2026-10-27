const { capitalizeWords, filterActiveUsers, logAction } = require('../index');

describe('Lab: Utility Functions Test Suite', () => {
    
    //  Test Suite for capitalizeWords 
    describe('capitalizeWords(input)', () => {
        test('Normal cases: transforms "hello world" to "Hello World"', () => {
            expect(capitalizeWords('hello world')).toBe('Hello World');
        });

        test('Edge case: handles an empty string safely', () => {
            expect(capitalizeWords('')).toBe('');
        });

        test('Edge case: handles strings with special characters like hyphens correctly', () => {
            expect(capitalizeWords('hello-world')).toBe('Hello-World');
        });

        test('Edge case: handles single-word strings efficiently', () => {
            expect(capitalizeWords('javascript')).toBe('Javascript');
        });
    });

    //  Test  for filterActiveUsers 
    describe('filterActiveUsers(users)', () => {
        test('Normal cases: correctly filters active users from a mixed array', () => {
            const mixedUsers = [
                { id: 1, name: 'Alice', isActive: true },
                { id: 2, name: 'Bob', isActive: false },
                { id: 3, name: 'Charlie', isActive: true }
            ];
            expect(filterActiveUsers(mixedUsers)).toEqual([
                { id: 1, name: 'Alice', isActive: true },
                { id: 3, name: 'Charlie', isActive: true }
            ]);
        });

        test('Edge case: returns an empty array when given an array of all inactive users', () => {
            const inactiveUsers = [
                { id: 1, name: 'Bob', isActive: false },
                { id: 2, name: 'Dave', isActive: false }
            ];
            expect(filterActiveUsers(inactiveUsers)).toEqual([]);
        });

        test('Edge case: returns an empty array when given an empty array input', () => {
            expect(filterActiveUsers([])).toEqual([]);
        });
    });

    // Test for logAction 
    describe('logAction(action, username)', () => {
        test('Normal cases: generates correct log string layout for valid inputs', () => {
            const result = logAction('LOGIN', 'JohnDoe');
            expect(result).toMatch(/^User JohnDoe performed LOGIN at \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
        });

        test('Edge case: falls back gracefully on missing action or missing username values', () => {
            const missingUsername = logAction('LOGOUT', undefined);
            const missingAction = logAction(undefined, 'JaneDoe');

            expect(missingUsername).toContain('User Anonymous performed LOGOUT');
            expect(missingAction).toContain('User JaneDoe performed Unknown Action');
        });

        test('Edge case: falls back gracefully on empty string parameters', () => {
            const result = logAction('', '');
            expect(result).toContain('User Anonymous performed Unknown Action');
        });
    });
});
//This file sets up a series of automated assertions using Jest to ensure  code handles both ideal conditions and tricky edge cases flawlessly.
//• describe() Blocks: These are used to group related tests together into logical sections (e.g., separating the tests for capitalization from the filtering tests).
//• test() Blocks: Individual test scenarios that isolate a specific execution path.
//• expect().toBe() and .toEqual():
//	• .toBe() is used for checking exact matching values (like simple strings or numbers).
//	• .toEqual() is used to compare complex data structures deeply, such as verifying that two separate arrays contain matching object keys and values.
 ///toMatch(regex): Used in the logging test block to verify that the generated timestamp strictly follows the standardized ISO String forma/t pattern without relying on hardcoded times, which would change every second.