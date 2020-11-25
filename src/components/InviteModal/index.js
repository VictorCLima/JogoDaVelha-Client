import { createElement, removeElementsChilds } from '../../utils';

export default function Modal(invitingUserName, loggedUserName, socket) {
    const modal = createElement(
        'div',
        {
            className: 'modal-container',
        },
        [
            createElement('div', { className: 'modal' }, [
                createElement('h2', {
                    innerText: `${invitingUserName} convidou você para uma partida`,
                }),

                createElement('footer', {}, [
                    createElement('button', {
                        innerText: 'Aceitar',
                        className: 'accept',
                        onclick: () => {
                            socket.emit('acceptInvite', {
                                inviterName: invitingUserName,
                                name: loggedUserName,
                            });
                            socket.emit('createNewGame', {
                                inviterName: invitingUserName,
                                name: loggedUserName,
                            });
                        },
                    }),

                    createElement('button', {
                        innerText: 'Recusar',
                        className: 'refuse',
                        onclick: () => {
                            socket.emit('refuseInvite', {
                                inviterName: invitingUserName,
                                name: loggedUserName,
                            });

                            const modalContainer = document.querySelector(
                                '#notification-container',
                            );

                            if (modalContainer)
                                removeElementsChilds(modalContainer);
                        },
                    }),
                ]),
            ]),
        ],
    );

    return modal;
}
