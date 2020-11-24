import { push } from '../utils';

export default function loadUser(connection) {
    window.addEventListener('load', () => {
        const username = localStorage.getItem('username');

        if (!username) push('/');

        connection.connect(username);
    });
}
