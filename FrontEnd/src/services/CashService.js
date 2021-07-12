import axios from 'axios';

const CASHS_REST_API_URL = 'http://localhost:8080/api/cashs';

class CashService {
    getCashs(){
        return axios.get(CASHS_REST_API_URL);
    }
}

export default new CashService();