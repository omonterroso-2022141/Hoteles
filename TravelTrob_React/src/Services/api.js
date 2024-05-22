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

export const getCategoryRequest = async (list) => {
    try {
        return await apiClient.get('category/list')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getCategoryByIdRequest = async (id) => {
    try {
        return await apiClient.get(`category/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const saveCategoryRequest = async (category) => {
    try {
        return await apiClient.post('/category/create', category)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const updateCategory = async (id, data) => {
    try {
        return await apiClient.put(`/category/update/${id}`, data)
    } catch (err) {
        return {
            error: true,
            err: err
        }
    }
}

export const delteCategoryRequest = async (id) => {
    try {
        return await apiClient.delete(`/category/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err: err
        }
    }
}

//# -------------------- Users -------------------------
//? ----------------- GetUsersRequest ------------------
export const getUsersRequest = async (list) => {
    try {
        return await apiClient.get('user/list')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- GetUsersRequest ------------------
export const getUserInfoRequest = async () => {
    try {
        return await apiClient.get('user/getInfoUser')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//% -------------- GetUserByIDRequest -------------
export const getUserByIdRequest = async (id) => {
    try {
        return await apiClient.get(`user/${id}`)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- saveUserRequest ------------------
export const saveUserRequest = async (user) => {
    try {
        return await apiClient.post('/user/register', user)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- updateUserRequest ----------------
export const updateUserRequest = async (id, data) => {
    try {
        return await apiClient.put(`/user/update/${id}`, data)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- deleteUserRequest ----------------
export const deleteUserRequest = async (id) => {
    try {
        return await apiClient.delete(`/user/delete/${id}`)
    } catch (err) {
        return {
            error: true,
            err: err
        }
    }
}

//# --------------------- Hotels -----------------------
//? ----------------- GetHotelsRequest -----------------
export const getHotelsRequest = async () => {
    try {
        return await apiClient.get('/hotel/viewHotelRequest')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

export const getHotelsUser = async () => {
    try {
        return await apiClient.get('hotel/viewHotel')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- AddHotelRequest -----------------
export const addHotelRequest = async (hotel) => {
    try {
        const config = {
            headers: { 'Content-Type': 'multipart/form-data' }
        }
        return await apiClient.post('hotel/addHotel', hotel, config)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ----------------- DeleteHotelRequest -----------------
export const deleteHotelRequest = async (id) => {
    try {
        return await apiClient.delete(`hotel/deleteHotel/${id}`)
    } catch (err) {
        return {
            error: true,
            er
        }
    }
}

//? ----------------- UpdateHotelRequest -----------------
export const UpdateHotelRequest = async (id, data) => {
    try {
        return await apiClient.put(`/hotel/updateHotel/${id}`, data)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//# -------------------- CatHabitación -------------------------
//? ------------------ GetCatHabitaciónRequest -----------------
export const getCatHabitacionRequest = async (list) => {
    try {
        return await apiClient.get('CHabitacion/viewCHabitacion')
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ------------------ DeleteCatHabitaciónRequest -----------------
export const deleteCatHabRequest = async (id) => {
    try {
        return await apiClient.delete(`/CHabitacion/deleteCHabitacion/${id}`)
    } catch (err) {
        return {
            error: true,
            err: err
        }
    }
}

//? ------------------ AddCatHabitaciónRequest -----------------
export const addCatHabRequest = async (catHab) => {
    try {
        return await apiClient.post('/CHabitacion/addCHabitacion', catHab)
    } catch (err) {
        return {
            error: true,
            err
        }
    }
}

//? ------------------ UpdateCatHabitaciónRequest -----------------
export const updateCatHabRequest = async(id, data) =>{
    try {
        return await apiClient.put(`/CHabitacion/updateCHabitacion/${id}`, data)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

//# -------------------- Habitación -------------------------
//? ------------------ GetHabitaciónRequest -----------------
export const getHabitacionRequest = async(list)=>{
    try {
        return await apiClient.get('/Habitacion/viewHoteHabitacion')
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

//? ------------------ DeleteHabitaciónRequest -----------------
export const deleteHabitacionRequest = async(id)=>{
    try {
        return await apiClient.delete(`/Habitacion/deleteHabitacion/${id}`)
    } catch (err) {
        return{
            error: true,
            err: err
        }
    }
}

//? ------------------ AddHabitaciónRequest -----------------
export const saveHabitacionRequest = async(habitacion)=>{
    try {
        return await apiClient.post('/Habitacion/addHabitacion', habitacion)
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

//? ------------------ AddHabitaciónRequest -----------------
export const updateHabitacionRequest = async(id, data)=>{
    try {
        return await apiClient.put(`/Habitacion/updateHabitacion/${id}`, data)
    } catch (err) {
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

export const getTipoEventosHotel = async(id)=>{
    try{
        return await apiClient.get(`/TipoEvento/viewTipoEventoHotel/${id}`)
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const getTipoEventosRequest = async(id)=>{
    try{
        return await apiClient.get('/TipoEvento/viewTipoEvento')
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const addEvento = async(data)=>{
    try{
        return await apiClient.post(`/Evento/addTipoEvento`, data)
    }catch(err){
        console.log(err)
        return{
            error: true,
            err
        }
    }
}

export const getReservasRequest = async () => {
    try {
        return await apiClient.get('/Reservacion/getReservas');
    } catch (err) {
        console.log(err);
        return {
            error: true,
            err
        }
    }
}