import io from 'socket.io-client';
import { SOCKET_URL } from '../constants/socket';

export const initSocket = () => {
    const socket = {
        connection: io(SOCKET_URL),
    };

    socket.connect = function (name) {
        this.socket.emit('register', { name });
    };

    return socket;
};
