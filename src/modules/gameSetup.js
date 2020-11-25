import Board from '../components/gameBoard';

import { haveIWon, isMyTurn, removeElementsChilds, push } from '../utils';

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

    const iWon = haveIWon(board);
    console.log(iWon);
    if (iWon !== null) {
        connection.socket.emit('endgame', {
            name: connection.username,
            winner: iWon,
            gameBoard: connection.userInfo.gameBoard,
        });
        alert(`${connection.username} ganhou. Você retornará para o lobby`);
        push('/lobby');
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
