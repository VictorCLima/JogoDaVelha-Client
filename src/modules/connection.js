 import  io  from 'socket.io-client';

  const Connection = () => {

    const socket = io('http://localhost:5000/'); 

  } 
  export default Connection; 
/* 
    $('#name').submit(function(event) {
      event.preventDefault();
  
      var name = $('input[name=username]').val();
  
      if(name.length != 0) {
        var userObject = {
        name: name, 
      }
      socket.emit('sendUser', name)
      }
    })  

    
  } 
    export default Connection;*/