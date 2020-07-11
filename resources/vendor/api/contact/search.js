"use strict";

import request from "@/utils/request";

export function globalSearchContactApi({ c_query }, page) {
    return request({
        url: `/contacts-g-q-search/${c_query}?page=${page || 1}`,
        method: "get",
    })
}


export function trashGlobalSearchContactApi({ c_query }, page) {
    return request({
        url: `/trash-contacts-g-q-search/${c_query}?page=${page || 1}`,
        method: "get",
    })
}
