export default {
    // _name:means is a page
    // $name:means is a component
    routes: {
        dashboard: "Dashboard",
        users: "users",
        table: "table",
        chart: "chart",
        privilege: "privilege",
        chat: "chat",
        trash: "trash",
        setting: "setting",
        contacts: "contacts",
        contacts: "contacts",
    },
    alert: {
        switchLocale: "language has been successfully changed",
        success: "The operation completed successfully !",
        error: "The operation did not complete. Try again later !",
    },
    asker: {
        title: "Are you sure !",
        message: "Are you sure to {opt} this {obj}",
    },
    qst:{
        accepte: "Accepte",
        cancel: "Cancel",
        yes: "Yes",
        no: "No",
        ok: "Ok",
    },
    label: {
        email: "Email",
        username: "Username",
        lastname: "Last name",
        firstname: "First name",
        fullname: "Fullname",
        password: "Password",
        password_confirmation: "Password confirmation",
        new_password: "New Password",
        phone: "Phone",
        sex: "Sex",
        man: "Man",
        woman: "Woman",
        code: "Code activation",
        creation_date: "Creation date",
        state: "State",
        roles: "Roles",
        subject: "Subject",
        actions: "Actions",
    },
    tooltip: {
        delete: "Delete",
        delete_it: "Delete it",
        recycle: "Recycle",
        read_it: "Read it",
        blocked: "blocked"
    },
    $navbar: {
        account: "My Account",
        setting: "setting",
        home: "Home",
        logout: "Logout"
    },
    $notification: {
        show_more: "show more",
        empty: "You have no notifications"
    },
    _login: {
        title: "Vus",
        submit: "login",
        register: "Register",
        errorAuth: "Email or password is wrong!",
        successAuth: "welcome back!"
    },
    _register: {
        title: "Vus",
        log: "Register",
        submit: "Register",
        errorAuth: "Email or password is wrong!",
        successAuth: "Please confirm your email address"
    },
    _mail: {
        title: "Vus",
        submit: "Verifie",
        resend: "Resend",
        success: "Welcome to your dashboard"
    },
    _setting: {
        tab_1: "Information",
        tab_2: "Password",
        submit: "update",
        change_avatar: "Change avatar",
        error: "The setting was not updated.",
        success: "The setting was updated successfully !",
    },
    _contact: {
        delete_tooltip: "Delete",
        delete_contact_tooltip: "Delete it",
        read_tooltip: "Read it",
        read: "Reading",
    },
    _trash: {
        tab_1: "Contact",
    },
    _user_table: {
        verified: "account verified",
        not_verified: "account not verified",
        success: "the role was assigned to user successfully !",
        select_roles:"Select roles",
        others:"others",
    }
}