import room from "./room"
import messages from "./messages"
export default {
    ...room,
    ...messages,
    MessageEcho() {
        Echo.private(`App.User.${this.user.id}`)
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
                    title: "Invite User"
                },
                {
                    name: "removeUser",
                    title: "Remove User"
                },
                {
                    name: "quitRoom",
                    title: "Quit Room"
                }
            ];
        else
            this.menuActions = [
                {
                    name: "quitRoom",
                    title: "Quit Room"
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