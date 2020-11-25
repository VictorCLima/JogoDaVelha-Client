import {
    enterLobbyEvent,
    exitLobbyEvent,
    loadUserEvent,
    getUserlistEvent,
    receiveNotificationEvent,
} from '../events';
import getUserInfo from '../events/getUserInfo';

export const initEvents = connection => {
    loadUserEvent(connection);

    getUserlistEvent(connection);
    getUserInfo(connection);

    enterLobbyEvent(connection);

    receiveNotificationEvent(connection);
    exitLobbyEvent(connection);
};
