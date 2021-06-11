import axios from 'axios'

export default class CurriculumVitaeService{
    getByCandidate_id(candidateId){
        return axios.get("http://localhost:8080/api/curriculumVitaes/getByCandidate_id?candidateId="+ candidateId)
    }
    
}
