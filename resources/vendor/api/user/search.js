"use strict";

import request from "@/utils/request";

export function searchUserApi(data) {
    return request({
        url: `/users-q-search`,
        method: "post",
        data
    })
}

export function globalSearchUserApi({user_query}, page) {
    return request({
        url: `/users-g-q-search/${user_query}?page=${page || 1}`,
        method: "get",
    })
}
