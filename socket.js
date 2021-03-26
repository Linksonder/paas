module.exports = {
    sendMessage: function(msg){
        this.socket.emit('msg', msg);
    },

    setHttp: function(server){
        //require('socket.io')(server)
        //this.io = require('socket.io')(server)
        this.socket = { 
            emit: function(name, msg){
                console.log(msg);
            }
        }
    }
}