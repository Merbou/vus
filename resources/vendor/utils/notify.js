export function notifyBrowser() {
    const iconNew = "/images/favicon-notified.png"
    document.getElementById('favicon').href = iconNew;
}
export function clearNotify() {
    const iconNew = "/images/favicon.png"
    document.getElementById('favicon').href = iconNew;

}