import UserListItem from '../components/UserListItem';

const inviteNotification = socket => {
    const confirmButton = document.querySelector('#confirm-button');
    const cancelButton = document.querySelector('#cancel-button');

    confirmButton.addEventListener('click', () => {
        socket.on('username', username => {
            const inviteButton = document.querySelector('#invite-player');

            username.socket.on('send to server', function (data) {
                socketId = getSocketIdFromUserId(user_id);
                io.to(socketId).emit('notification', 'test data');
            });
        });
    });
};

export default inviteNotification;
