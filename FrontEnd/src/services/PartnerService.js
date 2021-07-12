import axios from 'axios';

const PARTNERS_REST_API_URL = 'http://localhost:8080/api/partners';

class PartnerService {
    getPartners(){
        return axios.get(PARTNERS_REST_API_URL);
    }
}

export default new PartnerService();