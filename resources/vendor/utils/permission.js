
export function premissionsDrop(_routes, _permissions) {
    //return routes according to permissions 
    //["users","contacts.@delete","contacts.@read"] =>["users","contacts"]
    _permissions = justPermissionsPage(_permissions)

    return _routes.map(_ro => {

        if (_ro.children) {

            //if route exist on _permissions
            const root = _permissions.filter(e => {
                return e.split(".")[0] == _ro.name
            })
            if (!root || !root.length) return;
            //groupe all first level name & pass result without first lvl name 
            //exp:"users.table","users.chart"=>["table","chart"]
            const child_perm = root.map(e => e.split(".").slice(1).join("."))

            const children = premissionsDrop(_ro.children, child_perm)
            if (children && children.length) {
                _ro.children = children
                return _ro
            }
        }
        else
            if (_permissions.indexOf(_ro.name) > -1) return _ro

    }).filter(e => e)

}



export function permissionsExtraction(roles) {
    let permissions = []

    roles.map(e => e.permissions).forEach(element => {
        permissions.push(...element)
    });

    return permissions.filter((item, index) =>
        permissions.map(e => e.name)
            .indexOf(item.name) === index)
        .map(e => e.name)
}


export function PermissionsRoutes({ permissions, roles, routes, superAdmin }) {
    if (roles.indexOf(superAdmin) > -1) return routes

    return premissionsDrop(routes, permissions)

}

export function permissionsRoute(to, permissions) {
    permissions = justPermissionsPage(permissions)

    let fullPath = to.fullPath.split("/").slice(1).join(".")

    if (fullPath.split(".").length > 1)
        return permissions.indexOf(fullPath) == -1
    else
        return permissions.indexOf(to.name) == -1

}



export function toTree(permissions, translations) {
    //reforme permissions string to tree of array "users.table"=>"users".children[{"table"}]
    const _permissions = permissions.map(e => {
        const elm = e.name.split('.')
        const e_clone = { ...e }

        if (elm.length > 1) {
            const childrens = permissions
                .filter(filt => elm[0] === filt.name.split('.')[0])
                .map(_e => {
                    const e_clone = { ..._e }
                    e_clone.name = _e.name.split(".").slice(1).join(".")
                    return e_clone
                })
            e_clone["children"] = toTree(childrens)

            e_clone["name"] = elm[0]
            e_clone.id = Symbol(e_clone.id)
        }

        return e_clone
    })
    return _permissions.filter((e, i) => _permissions.map(e => e.name).indexOf(e.name) === i)

}



function justPermissionsPage(_permissions) {
    _permissions = _permissions.map(e => {
        const elm = e.split(".")
        if (elm[elm.length - 1][0] === "@")
            return elm.slice(0, elm.length - 1).join(".")
        return elm.join(".")

    })
    return [...new Set(_permissions)]
}




// function translatePermissionsName(permissions, translations) {
//     if (!translations) return permissions;
//     const _permissions = [...permissions]

//     _permissions.map(e => {
//         e.name = translations.hasOwnProperty(e.name) ? translations[e.name] : e.name;
//         return e
//     });

//     return _permissions
// }