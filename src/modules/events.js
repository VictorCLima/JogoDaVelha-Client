import {
    enterLobbyEvent,
    exitLobbyEvent,
    loadUserEvent,
    getUserlistEvent,
    receiveNotificationEvent,
} from '../events';

export const initEvents = connection => {
    loadUserEvent(connection);

    getUserlistEvent(connection);

    enterLobbyEvent(connection);

    receiveNotificationEvent(connection);
    exitLobbyEvent(connection);
};
