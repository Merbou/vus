export default {
    can: {
        inserted: function (el, binding, vnode) {
            const vm = vnode.context
            const _permission = binding.value
            const _permissions = vm.$store.getters.permissions.filter(e => e[0] === "@")
            const _roles = vm.$store.getters.roles
            if (_roles.some(e => e !== "super-admin") && _permissions.indexOf(_permission) === -1)
                vnode.elm.remove()
        }
    }

}