import UserListItem from '../components/UserListItem';

// Utils
import { removeElementsChilds } from '../utils';

export default function getUserlistEvent(socket, loggedUsername) {
    socket.on('userlist', userlist => {
        const usersDiv = document.querySelector('#waiting-room');

        if (!usersDiv) {
            return;
        }

        removeElementsChilds(usersDiv);

        userlist.forEach(user => {
            const listItem = UserListItem(user, loggedUsername, socket);

            usersDiv.appendChild(listItem);
        });
    });
}
