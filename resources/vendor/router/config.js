 export function routeCase(routes) {
    return routes.map(_ro => {

        if (_ro.is_layout) return;
        //Me:Layout if compenent need Adoption then adopte him PLS
        if (_ro.withLayout) _ro = layoutAdoption(_ro)


        return {
            path: _ro.path.toLowerCase(),
            redirect: _ro.redirect,
            is_layout: !!_ro.is_layout,
            name: _ro.name,
            icon: _ro.icon,
            hidden: _ro.hidden,
            component: () => import(`@/views/${ComponentAdoption(_ro)}.vue`),
            children: _ro.children && routeCase(_ro.children)
        }
    })
}

/**
 * layout Adoption of child 
 * @param {object} _ro 
 */
function layoutAdoption(_ro) {
    const { withLayout, ...child } = _ro

    if (!child.view)
        return Object.assign({ view: 'layout/index', is_layout: true }, child)

    const _ro_temp = Object.assign({}, { view: 'layout/index', is_layout: true })

    _ro_temp.path = child.path
    _ro_temp["children"] = [{ ...child }]
    // _ro_temp["children"].path = "index"

    return _ro_temp
}
/**
 * layout Adoption of child 
 * @param {object} _ro 
 */
function ComponentAdoption(_ro) {
    let view

    try {

        if (_ro.withLayout) {
            if (!_ro.view && _ro.children)
                view = 'layout/index'
        } else
            view = _ro.view

        if (!view) throw new Error()

        return view
    } catch (error) {
        return "layout/index"
    }
}
