const enterLobbyEvent = connection => {
    const userNameInput = document.querySelector('#username-input');
    const submitButton = document.querySelector('#register-button');

    submitButton.addEventListener('click', () => {
        const name = userNameInput.value;

        if (!name) return;

        connection.connect(name);
    });
};

export default enterLobbyEvent;
