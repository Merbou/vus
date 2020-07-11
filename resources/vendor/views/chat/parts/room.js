
import {
    fetchRoomsApi,
    searchRoomsApi,
} from "@/api/chat/room.js";
import filterItems from "@/utils/filterItems";

export default {
    fetchRooms() {
        this.loadingRooms = true;
        //if there we are in last page of rooms
        if (!this.paginate("room")) { this.loadingRooms = false; this.vLoading(false) }

        fetchRoomsApi(this.pagination.room.current_page)
            .then(({ data, current_page, last_page }) => {
                this.rooms = this.marge([...data, ...this.rooms]);
                //store rooms in cache
                this.rooms_cache = [...this.rooms]
                //update pagination
                this.pagination.room = { current_page, last_page };
                this.pagination_cache = { ...this.pagination.room }
                this.isLastRoomList = current_page >= last_page

            })
            .catch(err => console.log(err))
            .finally(() => this.loadingRooms = false);
    },
    loadMore({ query }) {
        if (!this.pagination && !this.pagination.room)
            return;
        let current_page = this.pagination.room.current_page

        current_page++
        if (current_page <= this.pagination.room.last_page)
            if (query)
                this.debouncedServiceSearchRoom({ pattern: query }, current_page)
            else this.fetchRooms()
    },
    searchRoom({ pattern }) {
        //filter rooms in browser-side (search from existen data)
        this.rooms = [...this.rooms_cache]
        this.rooms = filterItems(this.rooms, this.nameSeries, pattern);
        this.debouncedServiceSearchRoom({ pattern })
    },
    serviceSearchRoom({ pattern }, page) {
        //save rooms in cache then use rooms saved as a init data 
        this.pagination.room = { ...this.pagination_cache };
        if (!pattern || pattern.length < 2)
            return;

        this.loadingRooms = true;
        //durring the time of request of search in server-side
        searchRoomsApi({ r_query: pattern }, page)
            .then(({ rooms }) => {
                //marge result in one list (delete deplicate)
                let { data, ...res } = rooms
                this.rooms = this.marge([...data, ...this.rooms]);
                this.pagination.room = Object.assign(this.pagination.room, res)

                this.isLastRoomList = this.pagination.room.current_page >= this.pagination.room.last_page

            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => this.loadingRooms = false);

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
                        content: this.$i18n.t("_chat.echo_leave_user", { username: user.username }),
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
                        content: this.$i18n.t("_chat.echo_join_user", { username: user.username }),
                        id: `_vv${this.messages.length + user.id}`,
                        sender_id: user.id,
                        username: user.username,
                        room_id: parseInt(room_id),
                        joind: true
                    }
                })
            });

    },
    pushRoom({ room }) {
        this.indexRoom = this.rooms && this.rooms.push(room) - 1;
    },
    shiftRoom({ room, room_id }) {
        const _room_id = (room) ? room.room_id : room_id
        if (!this.indexRoom) {
            this.indexRoom = this.rooms && this.rooms.findIndex(e => e.room_id === _room_id);
        }
        this.rooms.length && this.rooms && this.rooms.splice(this.indexRoom, 1);
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
        return (this.indexRoom = this.rooms && this.rooms.findIndex(e => e.room_id === id));
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
        return rooms && rooms.filter((e, i) => rooms.map(e => e.room_id).indexOf(e.room_id) === i);
    },
}

