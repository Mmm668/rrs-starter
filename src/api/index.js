import axios from 'axios';
import {navigate} from "../helper/historyHelper";

const fetchEnum = {
    // method
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    // content-type
    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain',

    // api baseUrl
    API_BASE_URL: process.env.REACT_APP_API_BASE_URL
};

const axiosInstance = axios.create({
    baseURL: fetchEnum.API_BASE_URL,
    timeout: 12000,
    // withCredentials: true,
    headers: {
        'Accept': fetchEnum.APPLICATION_JSON,
        'Content-Type': fetchEnum.APPLICATION_JSON,
    }
});

const request = async (method, url, data) => {
    const config = {
        method,
        url,
        data
    };

    if (data) {
        if (method === fetchEnum.GET) {
            config.params = data
        } else {
            config.data = data;
        }
    }

    try {
        const result = await axiosInstance(config);
        // console.log('@@ [fetch result]', result);

        return result;
    } catch (e) {
        if (e.response) {
            if (e.response.status === 401) {
                console.log('@@ [Error]', e.response.data);
                // navigate('/Error/404');
            }
        }
        console.log("Error server call: ", url, ", reason: ", e);
    }
};

const API = {
    fetchPosts : () => request(fetchEnum.GET, `/posts`),
    fetchPostDetail : (id) => request(fetchEnum.GET, `/posts/${id}`),
    addPost : () => request(fetchEnum.POST, `/posts`),
    updatePost : (id) => request(fetchEnum.PUT, `/posts/${id}`),
    deletePost : (id) => request(fetchEnum.DELETE, `/posts/${id}`),
}

export default API;