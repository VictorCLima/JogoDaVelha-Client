import createElement from './createElement.js';

export default function createModal(invitingUserName) {
    const modal = createElement('div', {}, [
        document.createTextNode(
            `${invitingUserName} esta te chamando para a batalha`,
        ),

        createElement('button', {
            innerText: 'Aceitar',
        }),

        createElement('button', {
            innerText: 'Recusar',
        }),
    ]);

    return modal;
}
