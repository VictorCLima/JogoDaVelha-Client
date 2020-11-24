import io from 'socket.io-client';
import { SOCKET_URL } from '../constants/socket';

const connect = function (name) {
    this.registerUser(name);

    this.socket.emit('register', { name });
};

const registerUser = function (name) {
    this.username = name;

    localStorage.setItem('username', name);
};

export const initConnection = () => {
    const connection = {
        socket: io(SOCKET_URL),
        username: null,
    };

    connection.connect = connect.bind(connection);
    connection.registerUser = registerUser.bind(connection);

    return connection;
};
