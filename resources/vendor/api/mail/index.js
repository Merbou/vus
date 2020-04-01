"use strict";
"use strict";

import request from "@/utils/request";

export function send(id, resend) {
    return request({
        url: `/mail-send/${id}`,
        method: "post",
        data: {
            resend
        }
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