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
    return apiClient.delete(`/users/${username}/todos/${id}`)
}


export function retrieveTodoDetails(id){
    return apiClient.get(`/users/todos/${id}`)
}


export function updateTodo(id,username,todo){
    return apiClient.put(`user/${username}/todos/${id}`, todo)
}