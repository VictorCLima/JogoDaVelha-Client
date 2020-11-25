import { renderGameboard } from '../actions';
import { haveIWon, isMyTurn } from '../utils';

const showMyTurn = userInfo => {
    const myTurnDiv = document.querySelector('.my-turn-container');

    if (!myTurnDiv) return;

    if (isMyTurn(userInfo.playerTurn, userInfo.playerType))
        myTurnDiv.classList.add('visible');
    else myTurnDiv.classList.remove('visible');
};

const onClickSquare = connection => (x, y) => {
    const {
        gameBoard: { board },
        playerTurn,
        playerType,
    } = connection.userInfo;

    if (!isMyTurn(playerTurn, playerType)) return;

    board[x][y] = playerType;

    connection.userInfo.gameBoard.board = board;
    connection.userInfo.playerTurn = !playerTurn;

    const iWon = haveIWon(board);

    if (iWon !== null) {
        connection.socket.emit('endgame', {
            name: connection.username,
            winner: iWon,
            gameBoard: connection.userInfo.gameBoard,
        });
    } else
        connection.socket.emit('newMove', {
            name: connection.username,
            gameBoard: connection.userInfo.gameBoard,
        });
};

export const setupGame = connection => {
    renderGameboard(connection.userInfo.gameBoard, onClickSquare(connection));
    showMyTurn(connection.userInfo);
};
