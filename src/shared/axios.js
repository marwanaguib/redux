import axios from 'axios';
import {
    baseURL
} from '../environments'

var api = axios.create({
    baseURL: baseURL,
    headers: {
        common: {
            Accept: 'application/json',
            'JsonStub-User-Key': '769dac13-73da-40a9-bbb1-ea0857f7df00',
            'JsonStub-Project-Key': '5d1ed7f7-a64f-4447-ab32-88f55ec28ec4'
        },
        // 'Content-Type': 'application/json',
        // 'JsonStub-User-Key': '769dac13-73da-40a9-bbb1-ea0857f7df00',
        //         'JsonStub-Project-Key': '5d1ed7f7-a64f-4447-ab32-88f55ec28ec4'
    }
});

//   api.defaults.headers.common['Authorization'] = AUTH_TOKEN;
api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// api.defaults.headers.post['JsonStub-User-Key'] = '769dac13-73da-40a9-bbb1-ea0857f7df00';
// api.defaults.headers.post['JsonStub-Project-Key'] = '5d1ed7f7-a64f-4447-ab32-88f55ec28ec';

export default api;