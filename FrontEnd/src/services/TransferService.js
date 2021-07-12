import axios from 'axios';

const TRANSFERS_REST_API_URL = 'http://localhost:8080/api/transfers';

class TransferService {
    getTransfers(){
        return axios.get(TRANSFERS_REST_API_URL);
    }
}

export default new TransferService();