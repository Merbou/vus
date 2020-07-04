import room from "./room"
import messages from "./messages"
export default {
    ...room,
    ...messages,
    MessageEcho() {
        this.channel && this.channel
            .listen("MessageEvent", e => {
                this.channelChat(e)
            })
            .listen("userEvent", e => {
                this.channelRoomUser(e);
            });
    },
    paginate(name) {
        if (this.pagination[name].current_page && this.pagination[name].last_page)
            if (
                this.pagination[name].current_page < this.pagination[name].last_page
            ) {
                this.pagination[name].current_page += 1;
                return true;
            } else return false;
    },
    menuActionHandler({ room_id, action }) {
        switch (action.name) {
            case "inviteUser":
                this.openInviteUser = true;
                break;
            case "removeUser":
                this.openRemoveUser = true;
                break;
            case "quitRoom":
                this.openquitRoom = true;
                break;
        }
    },
    menuActionsOption(isOwner) {
        if (isOwner)
            this.menuActions = [
                {
                    name: "inviteUser",
                    title: this.$i18n.t("$menu_chat_room.inviteUser")
                },
                {
                    name: "removeUser",
                    title: this.$i18n.t("$menu_chat_room.removeUser")
                },
                {
                    name: "quitRoom",
                    title: this.$i18n.t("$menu_chat_room.quitRoom")
                }
            ];
        else
            this.menuActions = [
                {
                    name: "quitRoom",
                    title: this.$i18n.t("$menu_chat_room.quitRoom")
                }
            ];
    },
    close() {
        this.openAddRoom = false;
        this.openquitRoom = false;
        this.openInviteUser = false;
        this.openRemoveUser = false;
    }
}