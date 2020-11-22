// css
import './assets/css/style.css';
import './assets/css/gameStyle.css';
import './assets/css/reset.css';

// Modules
import { initEvents, initSocket } from './modules';

const socket = initSocket();

initEvents(socket);
