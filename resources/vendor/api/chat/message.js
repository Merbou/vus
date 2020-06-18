"use strict";

import request from "@/utils/request";

export function fetchMessagesApi(page,id) {
    return request({
        url: `/messages/${id}?page=${page || 1}`,
        method: "get",
    })
}

export function deleteContactsApi(ids) {
    return request({
        url: `/destroy-contacts`,
        method: "delete",
        data: {
            ids
        }
    })
}

export function readContactApi(id) {
    return request({
        url: `contact/${id}`,
        method: 'put',
    });

}
