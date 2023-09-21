import axios from "axios";

const apiClient=axios.create(
    {
        baseURL:"http://localhost:8080"
    }
)

const username='username'
const password='password'
const baToken='Basic '+window.btoa( username+ ":" + password )


apiClient.interceptors.request.use(
    (config)=>{
        console.log('intercepting and adding a token')
        config.headers.Authorization = baToken
        return config
    }
)

// this just function call the api 
export function retrieveHelloWorldBean(){
    return apiClient.get('/hello-world-bean')
}

