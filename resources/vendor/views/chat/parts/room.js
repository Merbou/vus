
import {
    fetchRoomsApi,
    searchRoomsApi,
} from "@/api/chat/room.js";
import filterItems from "@/utils/filterItems";

export default {
    fetchRooms() {
        this.loadingRooms = true;
        //if there we are in last page of rooms
        if (!this.paginate("room")) this.loadingRooms = false;

        fetchRoomsApi(this.pagination.room.current_page)
            .then(({ data, current_page, last_page }) => {
                this.rooms.push(...data);
                //store rooms in cache
                localStorage.setItem("rooms", JSON.stringify([...this.rooms]));
                //update pagination
                this.pagination.room = { current_page, last_page };
            })
            .catch(err => console.log(err))
            .finally(() => (this.loadingRooms = false));
    },
    searchRoom({ pattern }) {
        //save rooms in cache then use rooms saved as a init data  
        this.rooms = JSON.parse(localStorage.getItem("rooms"));
        if (pattern) {
            this.loadingRooms = true;
            //filter rooms in browser-side (search from existen data)
            this.rooms = filterItems(this.rooms, this.nameSeries, pattern);
            //durring the time of request of search in server-side
            searchRoomsApi({ pattern })
                .then(res => {
                    //marge result in one list (delete deplicate)
                    this.rooms = this.marge([...res.rooms, ...this.rooms]);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => (this.loadingRooms = false));
        }
    },
    fetchRoom({ room }) {
        this.room = room;
        this.room.typingUsers = []
        //if current user have access to
        this.menuActionsOption(room.owner == this.user.id);
        this._httpCancel && this._httpCancel.cancel();
        this.pagination.message = {
            current_page: 1,
            last_page: ""
        };
        this.messages = [];
        this.fetchMessages({ room });
    },
    channelRoomUser({ users, user_ids, room_id, is_invited, is_deleted }) {
        console.log(users)
        if (!users && !user_ids && !room_id) return;
        let index = this.rooms.findIndex(e => e.room_id === parseInt(room_id));

        if (is_deleted) {
            let users = this.rooms && this.rooms[index].users
            if (!users) return
            const kicked_users = users.filter(e => user_ids.indexOf(e.id) > -1)
            this.rooms[index].users = users.
                filter(_u => kicked_users.
                    findIndex(_k_u => parseInt(_k_u.id) === parseInt(_u.id)) !== -1)

            kicked_users.forEach(user => {
                this.channelChat({
                    message: {
                        content: `${user.username} has been leave the conversation`,
                        id: `_vv${this.messages.length + user.id}`,
                        sender_id: user.id,
                        username: user.username,
                        room_id: parseInt(room_id),
                        joind: true
                    }
                })

            });
            return;
        }
        if (is_invited)
            users.forEach(user => {
                this.rooms[index] && this.rooms[index].users.push(user)
                this.channelChat({
                    message: {
                        content: `${user.username} has been joined the conversation`,
                        id: `v${this.messages.length + user.id}`,
                        sender_id: user.id,
                        username: user.username,
                        room_id: parseInt(room_id),
                        joind: true
                    }
                })
            });

    },
    pushRoom({ room }) {
        this.indexRoom = this.rooms.push(room) - 1;
    },
    shiftRoom({ room }) {
        if (!this.indexRoom) {
            this.indexRoom = this.rooms.findIndex(e => e.room_id === room.room_id);
        }
        this.rooms.splice(this.indexRoom, 1);
        if (!this.rooms.length) this.messages = [];
    },
    pushRoomContent(Content) {
        for (const key in Content) {
            this.rooms[this.indexRoom][key] = Content[key];
        }
    },
    clearRoomIndex() {
        this.indexRoom = "";
    },
    putRoomIndex(id) {
        return (this.indexRoom = this.rooms.findIndex(e => e.room_id === id));
    },
    addRoom() {
        this.openAddRoom = true;
    },
    nameSeries(_obj) {
        return _obj["users"]
            .reduce((acc, curr) => acc + "," + curr.username, "")
            .substring(1);
    },
    marge(rooms) {
        return rooms.filter(
            (e, i) => rooms.map(e => e.room_id).indexOf(e.room_id) === i
        );
    },
}

