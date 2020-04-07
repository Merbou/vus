"use strict";

import request from "@/utils/request";

export function fetchContactsApi(page) {
    return request({
        url: `/contacts?page=${page || 1}`,
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
