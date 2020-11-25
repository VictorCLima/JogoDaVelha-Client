const checkWinnerOnRows = board => {
    for (let i = 0; i < 3; i++) {
        let thereIsAWinner = true;

        let actualValue = board[i][0];
        for (let j = 0; j < 3; j++) {
            if (board[i][j] !== actualValue) thereIsAWinner = false;

            actualValue = board[i][j];
        }

        if (thereIsAWinner) return actualValue;
    }

    return null;
};

const checkWinnerOnColumns = board => {
    for (let i = 0; i < 3; i++) {
        let thereIsAWinner = true;

        let actualValue = board[0][i];
        for (let j = 0; j < 3; j++) {
            if (board[j][i] !== actualValue) thereIsAWinner = false;

            actualValue = board[j][i];
        }

        if (thereIsAWinner) return actualValue;
    }

    return null;
};

const checkWinnerOnDescendingDiagonal = board => {
    let thereIsAWinner = true;

    let actualValue = board[0][0];
    for (let i = 0; i < 3; i++) {
        if (board[i][i] !== actualValue) thereIsAWinner = false;

        actualValue = board[i][i];
    }

    if (thereIsAWinner) return actualValue;

    return null;
};

const checkWinnerOnAscendingDiagonal = board => {
    let thereIsAWinner = true;

    let actualValue = board[2][0];
    for (let i = 0; i < 3; i++) {
        if (board[2 - i][i] !== actualValue) thereIsAWinner = false;

        actualValue = board[2 - i][i];
    }

    if (thereIsAWinner) return actualValue;

    return null;
};

export default function haveIWon(board) {
    let possibleWinner = checkWinnerOnRows(board);
    if (possibleWinner !== null) return possibleWinner;

    possibleWinner = checkWinnerOnColumns(board);
    if (possibleWinner !== null) return possibleWinner;

    possibleWinner = checkWinnerOnDescendingDiagonal(board);
    if (possibleWinner !== null) return possibleWinner;

    possibleWinner = checkWinnerOnAscendingDiagonal(board);
    if (possibleWinner !== null) return possibleWinner;

    return null;
}
