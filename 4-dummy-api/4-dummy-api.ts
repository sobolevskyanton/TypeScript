const url = 'https://dummyjson.com/users';
let userData = null;

type Gender = 'male' | 'female';

enum UserRole {
    Admin = 'admin',
    User = 'user',
    Moderator = 'moderator',
    Guest = 'guest'
}

interface APIResponse {
    users: User[],
    total: number,
    skip: number,
    limit: number
}

interface User {
    id: number,
    firstName: string,
    lastName: string,
    maidenName: string,
    age: number,
    gender: Gender,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair: {
        color: string,
        type: string
    },
    ip: string,
    address: {
        address: string,
        city: string,
        state: string,
        stateCode: string,
        postalCode: string,
        coordinates: {
            lat: number,
            lng: number
        },
        country: string
    },
    macAddress: string,
    university: string,
    bank: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string
    },
    company: {
        department: string,
        name: string,
        title: string,
        address: {
            address: string,
            city: string,
            state: string,
            stateCode: string,
            postalCode: string,
            coordinates: {
                lat: number,
                lng: number
            },
            country: string
        }
    },
    ein: string,
    ssn: string,
    userAgent: string,
    crypto: {
        coin: string,
        wallet: string,
        network: string
    },
    role: UserRole
}

async function fetchApi(url: string): Promise<APIResponse> {
    try {
        const response = await fetch(url);
    
        if(!response.ok) {
        throw new Error ('Something went wrong')
    }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log('Error: ' , error);
        throw error;
    }

}

async function startApp() {
    try {
        userData = await fetchApi(url);
        console.log(userData);
    } catch (error) {
        userData = null;
        console.log('Error catched by Parent function')
    }
    
}

startApp()