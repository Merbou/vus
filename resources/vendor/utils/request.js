"use strict";
import axios from "axios";

import { getToken, setToken } from "@/utils/token"

///create configuration of request api
const service = axios.create({
    //set url MIX_BASE_API variable from .env   
    baseURL: process.env.MIX_BASE_API,
    //timeout of request 10s
    timeout: 30000,
})


//config before request is handling
service.interceptors.request.use(
    config => {
        ///config request with adding token access
        const token = getToken();
        if (token)
            config.headers["Authorization"] = `Bearer ${token}`
        return config

    }, error => {
        return Promise.reject(error.response)
    })


//config before response is handling
service.interceptors.response.use(response => {

    //if response has token then set token to cookie and return data of response
    if (response.headers.Authorization) {
        setToken(response.headers.Authorization)
        response.data.token = response.headers.Authorization
    }
    return response.data
    }, error => {
        return Promise.reject(error.response)
    })

export default service;