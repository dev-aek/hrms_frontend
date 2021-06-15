import axios from "axios"

export default class advertisementService{
    getAllAdvertisements(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getall")
    }

    getAllByOrderByEmployerAt(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/findAllByOrderByEmployerAt")
    }

    getAllActiveAdvertList(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllIsActiveJobAdvertList")
    }

    getAllOpenJobAdvertByEmployer(idNo){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllOpenJobAdvertByEmployer?id="+idNo)
    }

    getAllAdvertsbyid(idNo){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getbyid?id="+idNo)
    }
    
    getAllPasiveAdvertList(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAllIsPasiveJobAdvertList")
    }

    changePasiveToActive(id){
        return axios.post(`http://localhost:8080/api/jobAdvertisements/changePasiveToActive?id=${id}`)
    }
}