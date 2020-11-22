import UserListItem from '../components/UserListItem';

// Utils
import { removeElementsChilds } from '../utils';

export default function getUserlistEvent(socket) {
    socket.on('userlist', userlist => {
        const usersDiv = document.querySelector('#waiting-room');

        removeElementsChilds(usersDiv);

        userlist.forEach(user => {
            const listItem = UserListItem(user);

            usersDiv.appendChild(listItem);
        });
    });
}
