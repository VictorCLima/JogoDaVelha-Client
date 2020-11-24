import { createElement } from '../../utils';

export default function Modal(invitingUserName, loggedUserName, socket) {
    const modal = createElement('div', {}, [
        document.createTextNode(
            `${invitingUserName} esta te chamando para a batalha`,
        ),

        createElement('button', {
            innerText: 'Aceitar',
            onclick: () => {
                socket.emit('acceptInvite', {
                    inviterName: invitingUserName,
                    name: loggedUserName,
                });
            },
        }),

        createElement('button', {
            innerText: 'Recusar',
            onclick: () => {
                socket.emit('refuseInvite', {
                    inviterName: invitingUserName,
                    name: loggedUserName,
                });
            },
        }),
    ]);

    return modal;
}