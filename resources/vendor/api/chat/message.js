"use strict";

import request from "@/utils/request";
import { CancelToken } from "axios";

const cancel_token = CancelToken;

export function fetchMessagesApi(page, id) {
    const source = cancel_token.source();

    return {
        _httpCancel: source,
        request: request({
            url: `/messages/${id}?page=${page || 1}`,
            method: "get",
            cancelToken: source.token
        })
    }

}

export function viewMessagesApi(id) {
    return request({
        url: `/view-messages/${id}`,
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
