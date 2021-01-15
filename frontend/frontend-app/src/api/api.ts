import axios from 'axios';

export default () => {
    const api = axios.create({
        baseURL:`http://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}`,
    });
    console.log(".env hostname: ",`https://${process.env.VUE_APP_BACKEND_HOST}:${process.env.VUE_APP_BACKEND_PORT}`)
    return api
};