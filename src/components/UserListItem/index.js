import { createElement } from '../../utils';

const UserListItem = (user, loggedUsername, socket) => {
    const children = [
        createElement('label', {
            innerText: user.name,
        }),
    ];

    if (user.name !== loggedUsername) {
        children.push(
            createElement('button', {
                innerText: 'Convidar',
                onclick: () => {
                    socket.emit('invite', {
                        inviterName: loggedUsername,
                        targetName: user.name,
                    });
                },
            }),
        );
    }

    const userListItem = createElement(
        'div',
        {
            id: user.id,
            className: 'players',
        },
        children,
    );

    return userListItem;
};

export default UserListItem;
