import { enterLobbyEvent, getUserlistEvent } from '../events';

export const initEvents = connection => {
    const { socket, username } = connection;

    enterLobbyEvent(socket);
    getUserlistEvent(socket, username);
};
