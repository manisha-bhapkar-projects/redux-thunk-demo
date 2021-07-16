const app = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = 8811


io.on('connection', (socket) => {
  console.log(`a user connected`);
  socket.emit('connection', null);
  socket.on('room', (roomId) => { 
    socket.join(roomId)
    socket.emit('room-joined')
    socket.on('message', (msg) => { 
      console.log(msg)
      io.to(roomId).emit('message',{
        message: msg,
        timsStamp: new Date()
      });
    })
  })
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});




// **************************************************************************

let chatModel = require('../models/chat.model');
let { send_notification } = require('../helpers/firebase.helper');
module.exports = (server) => {
    console.log("Socket started")
    const socket = require("socket.io");
    const io = socket(server, {
        path: '/taxtrak/api/chat/socket.io/',
    });  //merge socket with express server

    //handle incomming connections from clients
    io.sockets.on("connection", (socket) => {
        console.log("connection")
        //once a client has connected, we expect to get a ping from them saying what room they want to join
        // room-taskid
        socket.on("room", (room) => {
            console.log("room", room)
            //Whenever there is a socket connection, the socket is connected to the requested room
            socket.join(room)
            //Whenever a message is send, the message event is fired with the data received upon, stored in the database and then sent back
            // For Chat
            socket.on("message", async (data) => {
                let task_id = room.split('-')[2];
                let request = {
                    task_id: task_id,
                    message: data.message,
                    role: data.role
                }
                chatModel.addMessage(request, (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        let chat_id = response.insertId;
                        chatModel.getById(chat_id, (err, response) => {
                            if (err) {
                                console.log(err)
                            } else {
                                // if (role == 1) {
                                //     chatModel.getFcmId(task_id, (err, response) => {
                                //         if (err) console.log(err)
                                //         else {
                                //             console.log("fcm", response[0].fcm_id);
                                //             if (response && response.length > 0 && response[0].fcm_id !== null) {
                                                // var payload = {
                                                //     notification: {
                                                //       title: "New notification" ,
                                                //       body: data.message
                                                //     }
                                                //   };
                                                // send_notification(payload,'fcm_id')
                                //             }
                                //         }
                                //     })
                                // }else{
                                    
                                // }
                                io.to(room).emit("message", response[0]);
                            }
                        })
                    }
                })
            });

            socket.on("read", (chat_id) => {
                chatModel.updateSingleColumn({ key: 'read_status', value: '2', chat_id }, (err, response) => {
                    if (response) {
                        io.to(room).emit("read", chat_id);
                    }
                })
            })

            //Whenever a user starts typing, this event is fired.
            socket.on("typing", function (data) {
                io.to(room).emit("typing", data);
            });

            //Whenever a user stops typing, this event is fired.
            socket.on("stop_typing", function (data) {
                io.to(room).emit("stop_typing", data);
            });

        })
    })
}

