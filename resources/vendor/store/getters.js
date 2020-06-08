export default {
    user: state => state.auth.user,
    routes: state => state.app.routes,
    dialog: state => state.app.dialog,
    sidebar: state => state.app.sidebar,
    roles: state => state.auth.roles,
    permissions: state => state.auth.permissions,
    loading: state => state.app.loading,
    vSnackbar: state => state.app.vSnackbar,
}
