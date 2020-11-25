import Board from '../components/gameBoard';
import { removeElementsChilds } from '../utils';

const renderGameboard = (gameBoard, onClickSquare) => {
    const boardDiv = document.querySelector('.wrapper-board');

    if (!boardDiv) return;

    removeElementsChilds(boardDiv);

    const boardElement = Board(gameBoard.board, onClickSquare);

    boardDiv.appendChild(boardElement);
};

export default renderGameboard;
