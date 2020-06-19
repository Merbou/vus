
"use strict";

import request from "@/utils/request";

export function searchUserApi(data) {
    return request({
        url: `/users-q-search`,
        method: "post",
        data
    })
}
