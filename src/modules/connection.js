import io from 'socket.io-client';
import { SOCKET_URL } from '../constants/socket';

export const initConnection = () => {
    const connection = {
        socket: io(SOCKET_URL),
        username: null,
    };

    connection.connect = function (name) {
        this.socket.emit('register', { name });
        this.registerUser(name);
    };

    connection.resgisterUser = function (name) {
        this.username = name;
        localStorage.setItem('username', name);
    };
    return connection;
};
