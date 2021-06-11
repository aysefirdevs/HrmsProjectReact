import axios from "axios"

export default class ForeignLanguageService{
    getByCurriculumVitae_id(id){
        return axios.get("http://localhost:8080/api/foreignlanguages/getByCurriculumVitae_id?id="+id)
    }
}