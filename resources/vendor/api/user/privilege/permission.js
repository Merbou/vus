"use strict";

import request from "@/utils/request";


export function fetchPermissionsApi() {
    return request({
        url: `/permissions`,
        method: "get"
    })
}

export function storePermissionsApi(data) {
    return request({
        url: `/permissions`,
        method: "post",
        data
    })
}
