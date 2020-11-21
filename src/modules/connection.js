import  io  from 'socket.io-client';
import $ from 'jquery';

 const Connection = () => {

 /*   const renderUser = (user) => {
    $('.user').append('<div>'+ user.name +' </div>')
  } */

  $('#form').submit(function(event) {
    alert( "foi enviado" );
    event.preventDefault();  

    var user = $('input[name=username').val();

    if(user.length != 0) {
      var userObject = {
      name: name, 
    }
    renderUser(userObject);

    socket.emit('join', name)
    console.log('name');
    }
  })  
  
}
export default Connection; 

document.addEventListener('DOMContentLoaded', () => {
  connectButton = document.getElementById('connect');
  
});
 

