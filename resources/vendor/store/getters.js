export default {
    user: state => state.auth.user,
    roles: state => state.auth.roles,
    permissions: state => state.auth.permissions,
    channel: state => state.auth.channel,
    routes: state => state.app.routes,
    dialog: state => state.app.dialog,
    loading: state => state.app.loading,
    vSnackbar: state => state.app.vSnackbar,
    sidebar: state => state.layout.sidebar,
    RTL: state => state.layout.RTL,
    dark: state => state.layout.dark,
    locale: state => state.layout.locale,
}
