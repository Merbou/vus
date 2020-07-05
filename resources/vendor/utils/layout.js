const MAP_KEYS = new Map([
    [
        Boolean, ["sidebar", "RTL", "dark"]
    ],
    [
        String, ['locale']
    ],
    [
        Array, ['palette']
    ]
])

export default class {

    constructor() {
        this.ressources = {}
        for (const [_type, _keys] of MAP_KEYS.entries()) {
            _keys.forEach(_key => {
                try {
                    let ress = JSON.parse(localStorage.getItem(_key))
                    // if (typeof ress !== `${_type}`.toLowerCase()) throw `${_key} is type invalide`
                    if (ress !== null && ress !== undefined) this.ressources[_key] = ress;
                    else throw "there is no value in cache"
                } catch (error) {
                    console.log(error)
                    localStorage.setItem(_key, JSON.stringify(new _type))
                    this.ressources[_key] = new _type;
                }
            });
        }
    }

    get() {
        return this.ressources
    }

    set(ressources) {
        for (const key in ressources)
            for (const [_type, _KEYS] of MAP_KEYS.entries()) {
                if (_KEYS.indexOf(key) > -1)
                    localStorage.setItem(key, JSON.stringify(ressources[key]))
            }
        return ressources
    }

    remove(key) {

        for (const [_type, _KEYS] of MAP_KEYS.entries()) {
            if (_KEYS.indexOf(key) > -1)
                if (localStorage.getItem(key))
                    localStorage.removeItem(key)
        }
    }

}