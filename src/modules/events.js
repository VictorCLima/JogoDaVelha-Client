import {
    enterLobbyEvent,
    getUserlistEvent,
    receiveNotificationEvent,
} from '../events';
import loadUser from '../events/loadUser';

export const initEvents = connection => {
    loadUser(connection);
    enterLobbyEvent(connection);
    getUserlistEvent(connection);
    receiveNotificationEvent(connection);
};
