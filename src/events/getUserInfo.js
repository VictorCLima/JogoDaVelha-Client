import { setupGame } from '../modules';
import { push } from '../utils';

export default function getUserInfo(connection) {
    connection.socket.on('user', userInfo => {
        if (userInfo.inGame) {
            push('/game');
            setupGame(userInfo, connection);
        } else push('/lobby');
    });
}
