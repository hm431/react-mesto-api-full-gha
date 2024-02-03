import  checkResponse from './utils/checkResponse.js';


export const BASE_URL = 'https://api.hm431.nomoredomainsmonster.ru';

export const register = (password, email) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then(checkResponse)
        .then((res) => {
            return res;
        })
       
};


export const authorize = (password, email) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email })
    })
        .then(checkResponse)
        .then((data) => {
                localStorage.setItem('jwt', data._id);
   //             console.log(data);
                return data;
            
        })
        
};




export const getEmail = (token) => {
    
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    })
        .then(checkResponse)
        .then((data) => {
            return data;})

        
}


