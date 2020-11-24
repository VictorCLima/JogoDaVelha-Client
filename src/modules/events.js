import {
    enterLobbyEvent,
    getUserlistEvent,
    receiveNotificationEvent,
} from '../events';

export const initEvents = connection => {
    enterLobbyEvent(connection);
    getUserlistEvent(connection);
    receiveNotificationEvent(connection);
};
