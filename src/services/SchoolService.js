import axios from "axios"

export default class schoolService{
    getByCurriculumVitae_id(id){
        return axios.get("http://localhost:8080/api/schools/getByCurriculumVitae_id?id="+id)
    }
}