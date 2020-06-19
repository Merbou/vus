"use strict";

import request from "@/utils/request";

export function fetchRoomsApi(page) {
    return request({
        url: `/rooms?page=${page || 1}`,
        method: "get",
    })
}

export function createRoomsApi(data) {
    return request({
        url: `/create-room`,
        method: "post",
        data
    })
}