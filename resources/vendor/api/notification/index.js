"use strict";

import request from "@/utils/request";

export function fetchNotificationsApi(page) {
    return request({
        url: `/notifications?page=${page || 1}`,
        method: "get",
    })
}

export function storeNotificationApi(data, id) {
    return request({
        url: `/notification/${id}`,
        method: "post",
        data
    })
}


export function viewNotificationApi() {
    return request({
        url: `view-notifications`,
        method: 'put'
    });

}
