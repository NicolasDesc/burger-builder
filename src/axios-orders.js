import axios from 'axios';

const instance = axios.create({
    baseURL: "https://react-burger-builder-56d70.firebaseio.com/"
});

export default instance;