import axios from 'axios';

console.log(localStorage.getItem('token'));
const api = axios.create({
    baseURL:'http://localhost:8000/api',
    headers:{
        'Content-Type':'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
});

export default api;