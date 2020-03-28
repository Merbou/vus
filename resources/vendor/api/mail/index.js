"use strict";
"use strict";

import request from "@/utils/request";

export function send(id) {
    return request({
        url: `/mail-send/${id}`,
        method: "post"
    })
}

export function confirm(id, code) {
    return request({
        url: `/mail-confirmation/${id}`,
        method: "post",
        data: {
            code
        }
    })
}