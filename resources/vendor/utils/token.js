import Cookie from "js-cookie";

const token_key = "access_token"

export function getToken() {
    const token = Cookie.get(token_key);
    return (token) ? token : null;
}

export function setToken(token) {
    Cookie.set(token_key, token, { expires: 7 })
    return token;
}
export function removeToken() {
    return (Cookie.remove(token_key) == "removed") ? true : false;
}