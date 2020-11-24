import { push } from '../utils';

const enterLobbyEvent = connection => {
    const userNameInput = document.querySelector('#username-input');
    const submitButton = document.querySelector('#register-button');

    if (!userNameInput || !submitButton) return;

    submitButton.addEventListener('click', () => {
        const name = userNameInput.value;

        if (!name) return;

        connection.connect(name);

        push('/lobby');
    });
};

export default enterLobbyEvent;
