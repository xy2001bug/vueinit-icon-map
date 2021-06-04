import { httpPost, httpGet } from '../utils/http'

class Contact {
    static sendMsg (data) {
        return httpPost('/app/dongguan/sendMessage', data)
    }

    static getDetail (data) {
        return httpGet('/app/dongguan/detail', data)
    }

    static getContact (data) {
        return httpGet('/app/dongguan/webContact', data)
    }
}

export default Contact
