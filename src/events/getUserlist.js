import UserListItem from '../components/UserListItem';

// Utils
import { removeElementsChilds } from '../utils';

export default function getUserlistEvent(connection) {
    connection.socket.on('userlist', userlist => {
        const usersDiv = document.querySelector('#waiting-room');

        if (!usersDiv) {
            return;
        }

        removeElementsChilds(usersDiv);

        userlist.forEach(user => {
            const listItem = UserListItem(
                user,
                connection.username,
                connection.socket,
            );

            usersDiv.appendChild(listItem);
        });
    });
}
