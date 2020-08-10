export function routeCase(routes) {

    const _rs = routes.map(_ro => {
        if (_ro.is_layout) return;
        //Me:Layout if compenent need Adoption then adopte him PLS
        if (_ro.withLayout) _ro = layoutAdoption(_ro)

        let { children, view, ...rest } = _ro
        let route = {
            ...rest,
            component: () => import(`@/views/${view}.vue`),
            children: children && children.length && routeCase(children),
        }
        return route
    })

    return _rs

}

/**
 * layout Adoption of child 
 * @param {object} _ro 
 */
function layoutAdoption({ withLayout, ...child }) {

    if (!child.view)
        return Object.assign({ view: 'layout/index', is_layout: true }, child)

    const _ro_temp = { view: 'layout/index', is_layout: true, path: child.path }
    _ro_temp["children"] = [{ ...child }]


    return _ro_temp
}

