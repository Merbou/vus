"use strict";
import request from "@/utils/request"

export function login(email, password) {
    return request({
        url: "/login",
        method: "post",
        data: {
            email, password
        }
    })
}
export function register(data) {
    return request({
        url: "/register",
        method: "post",
        data
    })
}


export function userInfo() {
    return request({
        url: "/user",
        method: "get",
    })
}

