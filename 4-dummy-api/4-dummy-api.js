"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = 'https://dummyjson.com/users';
let userData = null;
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "admin";
    UserRole["User"] = "user";
    UserRole["Moderator"] = "moderator";
    UserRole["Guest"] = "guest";
})(UserRole || (UserRole = {}));
async function fetchApi(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error: ', error);
        throw error;
    }
}
async function startApp() {
    try {
        userData = await fetchApi(url);
        console.log(userData);
    }
    catch (error) {
        userData = null;
        console.log('Error catched by Parent function');
    }
}
startApp();
//# sourceMappingURL=4-dummy-api.js.map