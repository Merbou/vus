export default {
    user: state => state.auth.user,
    roles: state => state.auth.roles,
    permissions: state => state.auth.permissions,
    channel: state => state.auth.channel,
    routes: state => state.app.routes,
    dialog: state => state.app.dialog,
    sidebar: state => state.app.sidebar,
    loading: state => state.app.loading,
    vSnackbar: state => state.app.vSnackbar,
}
