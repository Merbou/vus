import { isCancel } from "axios";
import {
    fetchRoomApi
} from "@/api/chat/room.js";
import {
    fetchMessagesApi,
    sendMessagesApi,
    editMessagesApi,
    deleteMessagesApi,
    viewMessagesApi
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
        const index = this.replyMessageOrMessage(v_message, reply_message && reply_message.id)


        sendMessagesApi(room_id, {
            content,
            reply_id: reply_message && reply_message.id
        })
            .then(res => {
                //update lastMesage of room to apears in list room if room exist
                if (this.putRoomIndex(this.room.room_id) > -1)
                    //update message or reply message
                    this.pushRoomContent({ last_message: this.updateReplyMessageOrMessage(res, reply_message, index) });
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

        let first_index = this.messages.findIndex(e => e.id == message_id);
        const content = this.messages[first_index].content;
        this.messages[first_index].content = new_content;

        //descend message to last messages
        const message = this.messages[first_index];
        message["created_at"] = date()
        message["updated_at"] = date()
        this.messages.splice(first_index, 1);
        let second_index = this.messages.push(message);

        editMessagesApi(message_id, { content: new_content })
            .then(res => {
            })
            .catch(err => {

                message.content = content;
                this.messages.splice(first_index, 0, message);

                if (err.data === "Room Not existe") {
                    this.messages = [];
                    this.shiftRoom({ room_id });
                }

            });
    },
    deleteMessage({ room_id, message_id }) {

        const index = this.messages.findIndex(e => e.id == message_id);
        const message = this.messages.splice(index, 1);

        deleteMessagesApi(message_id)
            .then()
            .catch(err => {

                console.log(err);
                this.messages.splice(index, 0, message);

                if (err.data === "Room Not existe") {
                    this.messages = [];
                    this.shiftRoom({ room_id });
                }

            });
    },
    focusMessageFrom({ room_id }) {
        if (!room_id) return;
        this.messages.forEach(e => e.seen = 1)
        viewMessagesApi(room_id).catch(err => console.log(err));

    },
    MessageEcho() {
        Echo.private(`App.User.${this.user.id}`).listen("MessageEvent", e => {
            if (!e.message) return;
            this.channelChat(e.message);
            notify.browser();
        });
    },
    channelChat(message) {
        console.log(message)
        //set timestemp format according to chat room
        message.timestamp = this.timestamp(message.created_at);

        // if we get meesage of current room push directly
        if (message.room_id === this.room.room_id) {
            this.replyMessageOrMessage(message, message.reply_id)
        }
        // update lastMessage every time
        if (this.putRoomIndex(message.room_id) > -1) this.pushRoomContent({ last_message: message });
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
        var date = new Date();
        return {
            id: "v" + this.messages.length,
            content,
            sender_id: this.user.id,
            username: this.user.username,
            timestamp: this.timestamp(),
            seen: 1
        };
    },
    replyMessageOrMessage(v_message, reply_id) {
        let index
        if (reply_id) {
            index = this.messages.findIndex(e => e.id == reply_id);
            this.messages[index]["reply_message"] = v_message;
            const message = this.messages[index];
            this.messages.splice(index, 1);
            index = this.messages.push(message);
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
        let date
        if (_date)
            date = new Date(_date);
        else
            date = new Date();
        return date.getHours() + ":" + date.getMinutes()
    }

}