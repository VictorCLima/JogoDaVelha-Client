import Modal from '../components/InviteModal';

export default function receiveNotification(connection) {
    connection.socket.on('newInvite', ({ inviterName }) => {
        if (!connection.username) return;

        const body = document.getElementById('notification-container');

        if (!body) return;

        const modal = Modal(
            inviterName,
            connection.username,
            connection.socket,
        );

        body.appendChild(modal);
    });
}
