import axios from 'axios';

const API_URL = "http://localhost:3001/api"; 

const login = async (credentials) => {
    const res = await axios.post(`${API_URL}/login`, credentials);
    if (res.data.token) {
        localStorage.setItem('user', JSON.stringify(res.data));
    }
    return res.data;
};

const register = async (userData) => {
    const res = await axios.post(`${API_URL}/register`, userData);
    return res.data;
};

const logout = () => {
    localStorage.removeItem('user');
};

export default { login, register, logout };