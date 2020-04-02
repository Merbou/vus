"use strict";
import request from "@/utils/request";

export function fetchAccountCountApi() {
    return request({
        url: `/count-account`,
        method: "get"
    })
}

