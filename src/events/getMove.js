import { setupGame } from '../modules/gameSetup';

const getMove = connection => {
    connection.socket.on('newMove', data => {
        const { gameBoard, playerTurn } = data;
        const { userInfo } = connection;

        if (!userInfo) return;

        connection.userInfo = {
            ...userInfo,
            gameBoard,
            playerTurn,
        };

        setupGame(connection);
    });
};

export default getMove;
