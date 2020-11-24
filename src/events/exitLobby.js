import { push } from '../utils';

export default function exitLobby(connection) {
    const cancelButton = document.querySelector('#btn-leave');

    if (!cancelButton) return;

    cancelButton.addEventListener('click', () => {
        connection.disconnect();

        push('/');
    });
}
