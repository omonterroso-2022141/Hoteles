import axios from "axios";

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

export const getCategoryRequest = async(list)=>{
    try {
        return await apiClient.get('category/list')
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}
