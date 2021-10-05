import type {
    AxiosInstance,
    AxiosRequestConfig
} from 'axios';

import axios from 'axios';

import configuration from '../../configuration.json';

const CONFIG = {
    baseURL: configuration.userUrl + 'api/',
    params: {
        results: configuration.numberCards
    }
};

class Api {
    readonly instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
    }

    public get<T>(url: string, data?: any) {
        return this.instance.get<T>(url, { params: data });
    }
}

const api = new Api(CONFIG);

export default api;
