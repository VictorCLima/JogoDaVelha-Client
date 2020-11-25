import { createElement, push } from '../../utils';

const GameResult = (message, titleClass) => {
    const container = createElement('div', { className: 'result-container' }, [
        createElement('h2', { className: titleClass, innerText: message }),
        createElement('button', {
            className: 'back-button',
            onclick: () => push('/lobby'),
            innerText: 'Voltar para o Lobby',
        }),
    ]);

    return container;
};

export default GameResult;
