import { useState } from 'react'
import { deleteUserRequest, getUserInfoRequest, getUsersRequest, saveCategoryRequest, saveUserRequest, updateUserRequest } from '../../Services/api'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const useUser = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState(null)
    const [user, setUser] = useState(null)

    //# ------------- Get Users -------------
    const getUsersHook = async () => {
        const res = await getUsersRequest()
        if (res.error) {
            alert(
                res.err.res.data.message ||
                'Error al Obtener Usuarios'
            )
        }
        setUsers(res.data.user)
    }
    
    //# ------------- Save Users ------------
    const saveUserHook = async(user)=>{
        const res = await saveUserRequest(user)
        if(res.error){
            return alert('Error al Agregar Usuario')
        }
        navigate('/admin/users')
    }

    //# ------------- Update User ------------
    const updateUserHook = async(id, name, surname, username, email, password, phone, role)=>{
        const user ={
            name,
            surname,
            username,
            email,
            password,
            phone,
            role
        }
        const res = await updateUserRequest(id, user)
        if(res.error){
            if(res?.err?.res?.data?.errors){
                let arr = res?.err?.res?.data?.errors
                for(const error of arr){
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                res?.err?.res?.data?.msg ||
                res?.err?.data?.msg ||
                'Error al Actualizar Usuario'
            )
        }
        alert('Usuario actualizado con exito')
        getUsersHook()
    }

    //# ------------- Delete User ------------
    const deleteUserHook = async(id)=>{
        const res = await deleteUserRequest(id)
        if(res.error){
            if(res?.err?.res?.data?.errors){
                let arr = res?.err?.res?.data?.errors
                for(const error of arr){
                    return toast.error(
                        error.msg
                    )
                }
            }
            return toast.error(
                res?.err?.res?.data?.msg ||
                res?.err?.data?.msg ||
                'Error al Eliminar Usuario'
            )
        }
    }

    //# ------------- Get User Info ------------
    const getUsersInfoHook = async () => {
        const res = await getUserInfoRequest()
        if (res.error) {
            alert(
                res.err.res.data.message ||
                'Error al Obtener Usuarios'
            )
        }
        console.log('A');
        setUser(res.data.user)
    }

    return {
        users,
        user,
        isFetchingUser: !user,
        isFetchingUsers: !users,
        getUsersHook,
        getUsersInfoHook,
        saveUserHook,
        updateUserHook,
        deleteUserHook
    }
}
