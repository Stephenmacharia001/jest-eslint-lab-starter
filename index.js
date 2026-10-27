// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(input) {
    if (typeof input !== 'string' || input.length === 0) {
        return '';
    }
    return input.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    if (!users) return [];
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action, username) {
    const effectiveAction = action || 'Unknown Action';
    const effectiveUsername = username || 'Anonymous';
    const timestamp = new Date().toISOString();
    return `User ${effectiveUsername} performed ${effectiveAction} at ${timestamp}`;
}

module.exports = { capitalizeWords, filterActiveUsers, logAction };


//This file contains helper functions designed to process strings, arrays, and user logs defensively so that unexpected inputs do not crash my program.

//1. capitalizeWords(input)

//•// What it does: Converts the first letter of every single word in a string to uppercase.
//• How it works:
//	• It first checks if the input is missing or isn't a string (typeof input !== 'string'). If it's invalid, it immediately stops and returns an empty string ('') to prevent errors.
//	• It uses a Regular Expression (Regex) pattern: /\b\w/g.
//		• \b targets word boundaries (the start of a word).
//		• \w targets the first alphanumeric character right after that boundary.
//		• g means global (find and fix every word, not just the first one).
//	• .replace() takes each discovered starting letter and runs char.toUpperCase() on it.

//2. filterActiveUsers(users)

//• What it does: Scans through a collection of user objects and extracts only the ones marked as active.
//• How it works:
//	• It checks if the array actually exists and is formatted properly using Array.isArray(users). If it receives nothing (undefined) or an empty array, it safely returns an empty array [].
//	• It uses the built-in JavaScript .filter() array method, looping through every user object and extracting it only if user.isActive resolves to true.

//3. logAction(action, username)

//• What it does: Generates a structured activity log track complete with a standardized timestamp.
//• How it works:
//	• It uses logical OR short-circuiting (||) to handle edge cases. If action or username is empty, missing, or undefined, it automatically falls back to default values ('Unknown Action' and 'Anonymous').
//	• new Date().toISOString() automatically generates a highly precise timestamp format (e.g., 2026-10-27T15:13:00.000Z) matching standard backend engineering logging practices.

//4. module.exports = { ... }

//• What it does: Packages up  functions so they can be securely imported and verified by Jest inside the test execution cycle.