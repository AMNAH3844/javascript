/*CREATE A FUNCTION FormatUserData() that
1-accepts an array of user objects containing name and age
2-uses map() to format the user data into a string like; "John (25 years old)".
3-uses the spread op to pass formated user data to another function
4-uses the rest op to accept multiple formatted users in that function
5-logs a formatted message using templated literals in console.log()*/
function formatUserData(users) {
    const formattedUsers = users.map(user => `${user.name} (${user.age} years old)`);
    displayFormattedUsers(...formattedUsers);
}
function displayFormattedUsers(...formattedUsers) {
    console.log(`Formatted User Data:\n${formattedUsers.join('\n')}`);
}
const users = [
    { name: "John", age: 25 },
    { name: "Ayeshe", age: 30 },
    { name: "noor", age: 22 }
];
formatUserData(users);
