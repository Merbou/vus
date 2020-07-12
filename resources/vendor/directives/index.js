export default {
    can: {
        inserted: function (el, binding, vnode) {
            const vm = vnode.context
            let _permission = binding.value

            if (!(_permission instanceof Array)) _permission = [_permission]

            const _permissions = vm.$store.getters.permissions
                .filter(e => {
                    const elm = e.split(".")
                    return elm[elm.length - 1][0] === "@"
                }).map(e => {
                    const elm = e.split(".")
                    return elm[elm.length - 1].substring(1)
                })
            const _roles = vm.$store.getters.roles

            if (_roles.some(e => e !== "super-admin") &&
                !_permission.every(_p => _permissions.indexOf(_p) > -1))
                vnode.elm.remove()
        }
    }

}