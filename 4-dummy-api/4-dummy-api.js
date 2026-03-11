"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url = 'https://dummyjson.com/users';
let userData = null;
/*interface Response {
    users: User[],


}*/
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
    }
}
async function startApp() {
    userData = await fetchApi(url);
    console.log(userData);
}
startApp();
//# sourceMappingURL=4-dummy-api.js.map