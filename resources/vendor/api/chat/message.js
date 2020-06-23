"use strict";

import request from "@/utils/request";

export function fetchMessagesApi(page, id) {
    return request({
        url: `/messages/${id}?page=${page || 1}`,
        requestId: 'fetch-messages-data',
        method: "get",
    })
}

export function sendMessagesApi(id, data) {
    return request({
        url: `/message/${id}`,
        method: "post",
        data
    })
}

export function editMessagesApi(id, data) {
    return request({
        url: `edit-message/${id}`,
        method: 'put',
        data
    });

}
export function deleteMessagesApi(id) {
    return request({
        url: `destroy-message/${id}`,
        method: 'delete',
    });

}
