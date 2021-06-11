import axios from "axios"

export default class TechnologyService{
    getByCurriculumVitae_id(id){
        return axios.get("http://localhost:8080/api/technologiescontroller/getByCurriculumVitae_id?id="+id)
    }
}