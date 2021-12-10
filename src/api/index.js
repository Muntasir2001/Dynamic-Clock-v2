import axios from 'axios';

// Routes
export const clocks = '/clocks';
export const auth = '/auth';

// make api calls
// url pointing to the backend route
// const url = 'http://localhost:5000';
const url = process.env.REACT_APP_BACKEND_URL;

const API = axios.create({ baseURL: url });

// A function that runs before all the requests
// We need this as we have to send our token back to the backend,
// so the authMiddleware can verify that we are actually logged in
API.interceptors.request.use((req) => {
    if (localStorage.getItem('dynamicClockUser')) {
        req.headers.authorization = `Bearer ${
            JSON.parse(localStorage.getItem('dynamicClockUser')).token
        }`;
    }

    return req;
});

// returns all the posts data that we currently have in the database
export const fetchClocks = () => API.get(`${clocks}`);
export const addClock = (intlClockData) => API.post(`${clocks}/add`, intlClockData);
export const updateClock = (id, newIntlClockData) => API.patch(`${clocks}/${id}`, newIntlClockData);
export const deleteClock = (id) => API.delete(`${clocks}/${id}`);

export const signIn = (formData) => API.post(`${auth}/signin`, formData);
export const signUp = (formData) => API.post(`${auth}/signup`, formData);
