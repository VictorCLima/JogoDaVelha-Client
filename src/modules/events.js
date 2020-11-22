import { enterLobbyEvent, getUserlistEvent } from '../events';

export const initEvents = socket => {
    const { connection } = socket;

    enterLobbyEvent(connection);
    getUserlistEvent(connection);
};
