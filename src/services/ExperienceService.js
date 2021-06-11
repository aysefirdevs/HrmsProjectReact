import axios from "axios"

export default class ExperienceService{
    getByCurriculumVitae_id(id){
        return axios.get("http://localhost:8080/api/experiences/getByCurriculumVitae_id?id="+id)
    }
}