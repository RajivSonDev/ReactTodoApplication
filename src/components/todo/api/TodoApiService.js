import axios from "axios";

const apiClient = axios.create(
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

const header={
    Authorization:'Basic dXNlcm5hbWU6cGFzc3dvcmQ='
}

export function retrieveAllTodosForUsername(username){
    return apiClient.get(`/users/${username}/todos`)
}

export function deleteTodoWithId(id,username){
    return apiClient.delete(`/users/${username}/todos/${id}`)
}


export function retrieveTodoDetails(id){
    return apiClient.get(`/users/todos/${id}`)
}


export function updateTodo(id,username,todo){
    return apiClient.put(`user/${username}/todos/${id}`, todo)
}

export function createTodo(id,username,todo){
    return apiClient.post(`user/${username}/todos`, todo)
}