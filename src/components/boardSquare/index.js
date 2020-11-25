import { createElement } from '../../utils';
import { getChildrenStyle } from './utils/getChildrenStyle';

export default function BoardSquare(item, onClick) {
    const innerText = getChildrenStyle(item);

    console.log(item, getChildrenStyle(item));

    const boardSquare = createElement('button', {
        innerText,
        onclick: onClick,
    });

    return boardSquare;
}
