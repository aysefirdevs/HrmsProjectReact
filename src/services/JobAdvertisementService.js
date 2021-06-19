import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getByIsActiveSorted")
    }

    add(advertisement){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add",advertisement)
    }
}