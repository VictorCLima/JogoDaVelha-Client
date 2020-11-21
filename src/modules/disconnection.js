const leaveRoom = document.getElementsByTagName('leave'); 

const disconnect  = function(client) {
  this.socket.emit('leaveRoom', client);
};


