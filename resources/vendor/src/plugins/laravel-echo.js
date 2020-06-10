import Echo from "laravel-echo"

window.io = require('socket.io-client');
import { getToken } from '@/utils/token';

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ':6001',
    auth:
    {
        headers:
        {
            Authorization: 'Bearer ' + getToken()
        }
    }
});

