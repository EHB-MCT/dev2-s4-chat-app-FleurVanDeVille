"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch("https://dev2chat.onrender.com/messages")
            .then (function (response){
                return response.json();
            })
            .then (function (messages){
                console.log(messages);
                const message = messages[0];
            });

    },
    renderMessage(message) {
    document.querySelector('#messageContainer').innerHTML = messages[0].message;
    }

};

chat.init();