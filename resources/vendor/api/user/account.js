"use strict";

import request from "@/utils/request";

export function fetchUsersApi(page) {
    return request({
        url: `/users-account?page=${page || 1}`,
        method: "get"
    })
}


export function blockUserApi(id) {
    return request({
        url: `/block-account/${id}`,
        method: "put",
    })
}


export function updateUserApi(data){
    return request({
        url:`update-user`,
        method:'post',
        data,
        headers: { 'Content-Type': 'multipart/form-data' }

    });
}