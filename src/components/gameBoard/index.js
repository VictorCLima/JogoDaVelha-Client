import { createElement } from '../../utils';
import BoardSquare from '../boardSquare';

export default function Board(gameBoard, onClick) {
    const children = gameBoard.map((row, rowIndex) =>
        createElement(
            'div',
            {},
            row.map((item, columnIndex) =>
                BoardSquare(item, () => {
                    onClick(rowIndex, columnIndex);
                }),
            ),
        ),
    );

    const board = createElement('div', {}, children);

    return board;
}
