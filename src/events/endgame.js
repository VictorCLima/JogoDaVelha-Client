import { renderGameboard, showVictory } from '../actions';

export default function endgame(connection) {
    connection.socket.on('endgame', endgameInfo => {
        const { playerType } = connection.userInfo;

        connection.userInfo = endgameInfo.user;

        renderGameboard(endgameInfo.gameBoard, () => undefined);
        showVictory(playerType, endgameInfo.winner);
    });
}
