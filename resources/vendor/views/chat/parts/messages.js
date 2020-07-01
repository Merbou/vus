import { isCancel } from "axios";
import moment from "moment"
import {
    fetchRoomApi
} from "@/api/chat/room.js";
import {
    fetchMessagesApi,
    sendMessagesApi,
    editMessagesApi,
    deleteMessagesApi,
    viewMessagesApi,
    // typingMessagesApi
} from "@/api/chat/message.js";

import notify from "@/utils/notify";
export default {
    fetchMessages({ room }) {
        //if there we are in last page of message stop spinner
        if (!this.paginate("message")) this.messagesLoaded = true;
        //get instence of api object
        const MessagesApi = fetchMessagesApi(
            this.pagination.message.current_page,
            room.room_id
        );
        //lance spinner
        this.messagesLoaded = false;
        //get http broker
        this._httpCancel = MessagesApi._httpCancel;

        MessagesApi.request
            .then(({ data, current_page, last_page }) => {

                //do not change this cause there is auther messages of rooms 
                //every first page we init with data
                if (current_page == 1) this.messages = data && data.reverse();

                else this.messages.unshift(...(data && data.reverse()));
                //update pagination
                this.pagination.message = { current_page, last_page };

                //if there is no auther page stop spinner
                if (current_page == last_page) this.messagesLoaded = true;
            })
            .catch(err => {
                if (isCancel()) console.log("request cancelled");
                else console.log(err);
            });
    },
    sendMessage({ room_id, content, reply_message }) {
        const v_message = this.createVirtualMessage({ content })
        //push message or reply message
        const index = this.getIndexReplyMessageOrMessage(v_message, reply_message && reply_message.id)


        sendMessagesApi(room_id, {
            content,
            reply_id: reply_message && reply_message.id
        })
            .then(res => {
                //update lastMesage of room to apears in list room if room exist
                if (this.putRoomIndex(this.room.room_id) > -1) {
                    //update message or reply message
                    const updated_message = { ...this.updateReplyMessageOrMessage(res, reply_message, index) }
                    updated_message.timestamp = moment().format("DD/MM/YYYY HH:mm")
                    updated_message.date = moment().format("YYYYMMDDHHmmss")
                    this.pushRoomContent({ last_message: updated_message });
                }
            })
            .catch(err => {
                console.log(err);
                //if there is error except "Room Not existe" remove message 
                if (reply_message && reply_message.id) this.messages[index] = null;
                else this.messages.splice(index, 1);
                //if error throw "Room Not existe" delete room & messages
                if (err.data === "Room Not existe") {
                    this.messages = [];
                    this.shiftRoom({ room_id });
                }
            });
    },
    editMessage({ room_id, message_id, new_content, file, reply_message }) {
        let index = this.messages.findIndex(e => e.id == message_id);
        const content = this.messages[index].content;

        ///change som col
        this.messages[index].content = new_content;
        this.messages[index].edited = 1;

        editMessagesApi(message_id, { content: new_content })
            .then(res => {
            })
            .catch(err => {
                this.messages[index].content = content;
                this.messages[index].edited = 0;
                this.messages.splice(first_index, 0, message);

                if (err.data === "Room Not existe") {
                    this.messages = [];
                    this.shiftRoom({ room_id });
                }

            });
    },
    deleteMessage({ room_id, message_id }) {

        const index = this.messages.findIndex(e => e.id == message_id);
        const message = this.messages.splice(index, 1).pop();
        const vm = this
        deleteMessagesApi(message_id)
            .then()
            .catch(err => {

                this.messages.splice(index, 0, message);

                if (err.data === "Room Not existe") {
                    this.messages = [];
                    this.shiftRoom({ room_id });
                }

            });
    },
    focusMessageFrom({ room_id }) {
        if (!room_id) return;
        if (this.messages.findIndex(e => e.seen === 0) > -1) {
            if (this.room && this.room.last_message) this.room.last_message.new = 0
            viewMessagesApi(room_id).catch(err => console.log(err));
        }

    },
    typingMessage({ room_id, message }) {
        // if (!room_id || !message) return;
        // typingMessagesApi(this.user.id, room_id).catch(err => console.log(err));
    },
    channelChat({ message, is_updated, is_deleted, is_typing, is_view }) {
        console.log({ message, is_updated, is_deleted, is_typing, is_view })
        if (is_typing) {
            if (this.room)
                if (!this.room.typingUsers)
                    this.room.typingUsers = []
            this.room.typingUsers.push(message && message.typing_id)
            return;
        }
        if (is_view || !message) {
            this.messages.forEach(e => e.seen = 1)
            return;
        }
        //notify browser if is msg
        if (!is_updated && !is_deleted)
            notify.browser();


        let index = this.messages.findIndex(e => e.id == message.id);
        if (is_deleted) {
            this.messages[index].content = "this message has been deleted"
            this.messages[index].timestamp = this.timestamp(message && message.updated_at);
            this.messages[index].deleted = true

            return
        }

        //set timestemp format according to chat room
        if (message) {
            message.new = true;
            message.timestamp = this.timestamp(message && message.updated_at);
        }

        //if is updaated msg then delete origin before pushing the new
        if (is_updated) {
            this.messages.splice(index, 1);
            message.edited = true
            index = this.messages.push(message) - 1;
        }
        // if we get meesage of current room push directly
        else if (message.room_id === this.room.room_id) {
            this.getIndexReplyMessageOrMessage(message, message.reply_id)
        }
        // update lastMessage every time
        if (this.putRoomIndex(message.room_id) > -1) {
            const last_message = { ...message }
            last_message.timestamp = moment().format("DD/MM/YYYY HH:mm")
            last_message.date = moment().format("YYYYMMDDHHmmss")

            this.pushRoomContent({ last_message });
        }
        else
            //if message is from unexisted room fetch this room from server-side
            fetchRoomApi(message.room_id)
                .then(res => {
                    //push directly
                    this.rooms.push(res.room);
                })
                .catch(err => {
                    console.log(err);
                });
    },
    createVirtualMessage({ content }) {
        return {
            id: "v" + this.messages.length,
            content,
            sender_id: this.user.id,
            username: this.user.username,
            timestamp: moment().format("HH:mm"),
            seen: 0,
            new: 1
        };
    },
    getIndexReplyMessageOrMessage(v_message, reply_id) {
        let index
        if (reply_id) {
            index = this.messages.findIndex(e => e.id == reply_id);
            //descend msg&reply msg to the first messages
            this.messages[index]["reply_message"] = v_message;
            const message = this.messages[index];
            this.messages.splice(index, 1);
            index = this.messages.push(message) - 1;
        } else index = this.messages.push(v_message) - 1;

        return index

    },
    updateReplyMessageOrMessage(res, reply_message, index) {
        if (reply_message && reply_message.id) {
            this.messages[index]["reply_message"] = Object.assign(
                this.messages[index]["reply_message"],
                res
            );
            return this.messages[index]["reply_message"]
        }
        else this.messages[index] = Object.assign(this.messages[index], res);
        return this.messages[index]
    },
    timestamp(_date) {
        return moment(_date).format("HH:mm")
    },

}