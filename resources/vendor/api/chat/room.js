"use strict";

import request from "@/utils/request";

export function fetchRoomsApi(page) {
    return request({
        url: `/rooms?page=${page || 1}`,
        method: "get",
    })
}

export function fetchRoomApi(id) {
    return request({
        url: `/room/${id}`,
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

export function quitRoomApi(id) {
    return request({
        url: `/quit-room/${id}`,
        method: "post",
    })
}

export function kickRoomApi(id, data) {
    return request({
        url: `/kick-room/${id}`,
        method: "post",
        data
    })
}


export function inviteRoomApi(id, data) {
    return request({
        url: `/invite-room/${id}`,
        method: "post",
        data
    })
}

export function searchRoomsApi({ r_query }, page) {
    return request({
        url: `/room-q-search/${r_query}?page=${page || 1}`,
        method: "get",
    })
}
