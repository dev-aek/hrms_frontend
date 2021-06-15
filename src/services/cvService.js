import axios from "axios"

export default class cvService{
    getAllCvs(){
        return axios.get("http://localhost:8080/api/cvs/getAll")
    }
    getAllCvsByJobSeekerId(jobSeekerId){
        return axios.get("http://localhost:8080/api/cvs/getByJobSeekerId?id="+jobSeekerId)
    }
}