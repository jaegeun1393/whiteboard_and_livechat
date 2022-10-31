import io from 'socket.io-client';

const serverUrl = 'http://localhost:8080/';

const socket = io(serverUrl, {transports: ['websocket']});

export default socket;