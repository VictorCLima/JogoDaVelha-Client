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

const onClickSquare = (userInfo, connection) => (x, y) => {
    const {
        gameBoard: { board },
        playerTurn,
        playerType,
    } = userInfo;

    if (!isMyTurn(playerTurn, playerType)) return;

    board[x][y] = playerType;

    userInfo.gameBoard.board = board;
    userInfo.playerTurn = !playerTurn;

    connection.socket.emit('newMove', {
        name: connection.username,
        gameBoard: userInfo.gameBoard,
    });

    renderGameboard(userInfo.gameBoard, onClickSquare(userInfo, connection));
    showMyTurn(userInfo);
};

export const setupGame = (userInfo, connection) => {
    console.log(userInfo);

    renderGameboard(userInfo.gameBoard, onClickSquare(userInfo, connection));
    showMyTurn(userInfo);
};
