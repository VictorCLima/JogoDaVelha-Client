const enterLobbyEvent = socket => {
    const userNameInput = document.querySelector('#username-input');
    const submitButton = document.querySelector('#register-button');

    submitButton.addEventListener('click', () => {
        const name = userNameInput.value;

        if (!name) return;

        socket.emit('register', { name });
    });
};

export default enterLobbyEvent;
