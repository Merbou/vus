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
    },
    label: {
        email: "Email",
        username: "Username",
        lastname: "Last name",
        firstname: "First name",
        fullname: "Fullname",
        name: "Name",
        password: "Password",
        password_confirmation: "Password confirmation",
        new_password: "New Password",
        phone: "Phone",
        sex: "Sex | Man | Woman",
        code: "Code activation",
        creation_date: "Creation date",
        state: "State",
        role: "Role | Roles",
        permission: "Permission | Permissions",
        room: "Room | Rooms",
        contact: "Contact | Contacts",
        search: "Search",
        subject: "Subject",
        actions: "Actions",
        invite_someone: 'Invite someone',
        optionnal: "(optionnal)",
    },
    roles: {
        "super-admin": "Super admin",
        "admin": "Admin",
        "writer": "Writer"
    },

    // permissions: {
    //     "dashboard": "dashboard",
    //     "users.table": "users.table",
    //     "users.chart": "users.chart",
    //     "users.privilege": "users.privilege",
    //     "chat": "chat",
    //     "trash": "trash",
    //     "setting": "setting",
    //     "contacts.@delete contacts": "contacts.@delete contacts",
    //     "contacts.@read contacts": "contacts.@read contacts",
    // },
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
        success_assign_role: "the role was assigned to user successfully !",
        select_roles: "Select roles",
        others: "others",
    },
    _user_privilege: {
        title: "Roles",
        create_role: "New role",
        success_role_store: "The role is stored successfully !",
        success_assign_permissions: "the permissions was assigned to role successfully !",
    },
    _user_curve_chart: {
        yaxis: "The number of registrations",
        xaxis: "Registration date",
        label: "series-1"
    },
    _chat: {
        rooms_empty: "no rooms",
        new_messages: "New messages",
        messages_deleted: "Messages deleted",
        messages_empty: "Messages empty",
        conversation_started: "conversation started on",
        type_messages: "type messages",
        search: "search",
        echo_messages_deleted: "this message has been deleted",
        echo_leave_user: "{username} has been leave the conversation",
        echo_join_user: "{username} has been joined the conversation",
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
    $new_role: {
        title: "New role",
        submit: "Save",
    },
    $assign_permission: {
        title: "Select",
        submit: "Save",
    },
    $curve_chart_selection: {
        one_month: "One month",
        six_months: "Six months",
        one_year: "One year",
        all: "All",
    },
    $new_room: {
        title: "New room",
        create: "Create room"
    },
    $invite_user_room: {
        title: "Invitation",
        submit: "Invite"
    },
    $remove_user_room: {
        title: "Kick someone out",
        submit: "Kick"
    },
    $menu_chat_room: {
        inviteUser: "Invite user",
        removeUser: "Remove user",
        quitRoom: "Quit room",
    },
    $menu_chat_message: {
        replyMessage: "Reply",
        editMessage: "Edit Message",
        deleteMessage: "Delete Message"
    },


    alert: {
        switchLocale: "language has been successfully changed",
        complete: "The operation completed successfully !",
        failed: "The operation did not complete. Try again later !",
    },
    asker: {
        title: "Are you sure !",
        message: "Are you sure to {opt} this {obj}.",
    },
    qst: {
        accepte: "Accepte",
        cancel: "Cancel",
        yes: "Yes",
        no: "No",
        ok: "Ok",
    },
    tooltip: {
        delete: "Delete {obj}",
        recycle: "Recycle {obj}",
        read: "Read {obj}",
        block: "blocked | block {obj}",
        assign: "Assign {obj}"
    },
}