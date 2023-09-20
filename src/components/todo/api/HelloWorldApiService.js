import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
)

// this just function call the api 
export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean')
}

