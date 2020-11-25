import { createElement } from '../../utils';

const UserListItem = (user, loggedUsername, socket) => {
    const children = [
        createElement('span', {
            innerText: `${user.name}${
                user.name === loggedUsername ? ' (Você)' : ''
            }`,
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
        'li',
        {
            id: user.id,
            className: 'player-list-item',
        },
        children,
    );

    return userListItem;
};

export default UserListItem;
