const app_keys = ["RTL", "dark"]

export function getRessources() {
    const ressources = {}
    app_keys.forEach(key => {
        let ress = localStorage.getItem(key)
        if (ress) {
            ressources[key] = ress === "true";
        }
        else {
            localStorage.setItem(key, false)
            ressources[key] = false;
        }
    });
    return ressources
}

export function setRessources(ressources) {
    for (const key in ressources)
        if (app_keys.indexOf(key) > -1)
            localStorage.setItem(key, ressources[key])

}

export function removeRessources() {
    app_keys.forEach(key => {
        if (localStorage.getItem(key))
            localStorage.removeItem(key)
    });
}