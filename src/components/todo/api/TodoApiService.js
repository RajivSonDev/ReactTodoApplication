import axios from "axios";

const apiClient = axios.create(
    {
        baseURL:"http://localhost:8080"
    }
)

export function retrieveAllTodosForUsername(username){
    return apiClient.get(`/users/${username}/todos`)
}

export function deleteTodoWithId(id,username){
    return apiClient.delete(`http://localhost:8080/users/${username}/todos/${id}`)
}


export function retrieveTodoDetails(id){
    return apiClient.get(`http://localhost:8080/users/todos/${id}`)
}