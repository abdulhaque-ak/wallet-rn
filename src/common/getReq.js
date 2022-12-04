import axios from 'axios'
const baseUrl = 'http://dev1.websorbzdocker.online/users/api/'
export default (url, token) => new Promise(async (resolve, reject) => {
    let options = {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
    resolve(axios.get(baseUrl + url, options))
})