"use strict";

import request from "@/utils/request";

export function fetchRoomsApi(page) {
    return request({
        url: `/rooms?page=${page || 1}`,
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
