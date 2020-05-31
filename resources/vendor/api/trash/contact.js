"use strict";

import request from "@/utils/request";

export function fetchContactsApi(page) {
    return request({
        url: `/trash-contacts?page=${page || 1}`,
        method: "get",
    })
}

export function deleteContactsApi(ids) {
    return request({
        url: `/trash-contacts/trash`,
        method: "delete",
        data: {
            ids
        }
    })
}
export function recycleContactsApi(ids) {
    return request({
        url: `/trash-contacts/recycle`,
        method: "post",
        data: {
            ids
        }
    })
}