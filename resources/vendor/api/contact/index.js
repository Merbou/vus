"use strict";

import request from "@/utils/request";

export function fetchContactsApi() {
    return request({
        url: `/contacts`,
        method: "get",
    })
}

export function deleteContactsApi(ids) {
    return request({
        url: `/destroy-contacts`,
        method: "delete",
        data:{
            ids
        }
    })
}

export function readContactApi(id){
    return request({
        url:`contact/${id}`,
        method:'put',
    });

}
