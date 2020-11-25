import Board from '../components/gameBoard';
import { isMyTurn, removeElementsChilds } from '../utils';

const renderGameboard = (gameBoard, onClickSquare) => {
    const boardDiv = document.querySelector('.wrapper-board');

    if (!boardDiv) return;

    removeElementsChilds(boardDiv);

    const boardElement = Board(gameBoard.board, onClickSquare);

    boardDiv.appendChild(boardElement);
};

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

    connection.socket.emit('newMove', {
        name: connection.username,
        gameBoard: connection.userInfo.gameBoard,
    });
};

export const setupGame = connection => {
    renderGameboard(connection.userInfo.gameBoard, onClickSquare(connection));
    showMyTurn(connection.userInfo);
};
