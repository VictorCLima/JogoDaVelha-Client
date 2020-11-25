import { createElement } from '../../utils';

export default function Board(socket, data) {
    const board = createElement('div', {}, [
        createElement('div', {
            id: casa11
            onclick: () => {

                });
            },
        }),
        createElement('div', {
            onclick: () => {

                });
            },
        }),
        createElement('div', {

            onclick: () => {
                });
            },
        }),

        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),

        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),
        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),
        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),

        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),
        createElement('div', {
            onclick: () => {
                socket.emit('sendNewMove', {
                    playerName: socket.id,
                    data: [],
                });
            },
        }),
    ]);

    return board;
}
