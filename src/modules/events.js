import { enterLobbyEvent, getUserlistEvent } from '../events';

export const initEvents = connection => {
    enterLobbyEvent(connection);
    getUserlistEvent(connection);
};
