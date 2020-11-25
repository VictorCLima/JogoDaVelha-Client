import { push } from '../utils';

export default function getUserInfo(connection) {
    connection.socket.on('user', userInfo => {
        if (userInfo.inGame) push('/game');
        else push('/lobby');
    });
}
