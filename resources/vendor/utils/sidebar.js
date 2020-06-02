import Cookie from "js-cookie";
const key = "sidebar"

export function sidebar() {
    const state = Cookie.get(key);
    if (state == 1 || state == 0)
        return parseInt(state)
    else return createSidebar()
}

export function setSidebar(bool) {
    const state = Cookie.set(key, bool);
}

function createSidebar() {
    Cookie.set(key, true, { expires: 7 })
    return 1;
}