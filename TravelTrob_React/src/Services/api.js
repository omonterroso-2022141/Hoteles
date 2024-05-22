import axios from "axios";
import { useNavigate } from "react-router-dom";

//Configuraciones base
const apiClient = axios.create({
    baseURL: 'http://localhost:3200',
    timeout: 5000
})
//Interceptor = middleware para agregar datos como Headers
apiClient.interceptors.request.use(
    config=> {
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = token
        }
        return config
    },
    err=> Promise.reject(err)
)

export const loginRequest = async(user)=>{
    try{
        return await apiClient.post('user/login', user)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const getHabitacionesRequest = async(id)=>{
    try{
        return await apiClient.get(`/Habitacion/viewHabitacion/${id}`)
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const registerRequest = async(user)=>{
    try{
        return await apiClient.post('user/register',user)
    }catch(err){
        return{
            error: true,
            err
        }
    }
}

export const getHotelsRequest = async()=>{
    try{
        return await apiClient.get('/Hotel/viewHotel')
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const getHotelsRequestId = async(id)=>{
    try{
        return await apiClient.get(`/habitacion/viewHotelForHabitacion/${id}`)
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const saveHotel = async(hotel)=>{
    try{
        return await apiClient.post('hotel/saveHotel', hotel, {'Content-Type': 'multipart/form-data'})
    }catch(err){
        return {
            error: true,
            err
        }
    }
}

export const saveReservaRequest = async(data)=>{
    try{
        return await apiClient.post('/Reservacion/addReservacion', data)
    }catch(err){
        return {
            error: true,
            err
        }
    }
}