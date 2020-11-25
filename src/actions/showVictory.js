import GameResult from '../components/gameResults';

const renderVictoryResult = container => {
    const result = GameResult('Você venceu!', 'victory');

    container.appendChild(result);
};

const renderDefeatResult = container => {
    const result = GameResult('Você perdeu...', 'defeat');

    container.appendChild(result);
};

const showVictory = (myType, winner) => {
    const resultsDiv = document.querySelector('#game-results');

    if (!resultsDiv) return;

    const myTurnContainer = document.querySelector('.my-turn-container');

    if (myTurnContainer) myTurnContainer.style.display = 'none';

    if (myType === winner) renderVictoryResult(resultsDiv);
    else renderDefeatResult(resultsDiv);
};

export default showVictory;
