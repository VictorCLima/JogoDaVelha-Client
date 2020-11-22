import { createElement } from '../../utils';

const UserListItem = user => {
    const userListItem = createElement(
        'div',
        {
            id: user.id,
            className: 'players',
        },
        [
            createElement('label', {
                innerText: user.name,
            }),
            createElement('a', {
                innerText: 'Convidar',
            }),
        ],
    );

    return userListItem;
};

export default UserListItem;
