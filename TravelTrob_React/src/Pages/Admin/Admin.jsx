import { Route, Routes, useNavigate } from "react-router-dom"
import { Category } from "../../Components/AdminComponents/Category"
import { useCategory } from "../../Shared/Hooks/useCategory"
import { useEffect } from "react"
import { CategoryForm } from "../../Components/AdminComponents/Category/CategoryForm"
import { UpdateCategoryForm } from "../../Components/AdminComponents/Category/UpdateCategoryForm"
import { AdminFeed } from "../../Components/AdminComponents/AdminFeed"
import { Users } from "../../Components/AdminComponents/Users/Users"
import { useUser } from "../../Shared/Hooks/useUser"
import { UserForm } from "../../Components/AdminComponents/Users/UserForm"
import { UpdateUserForm } from "../../Components/AdminComponents/Users/UpdateUserForm"
import { Hotels } from "../../Components/AdminComponents/Hotels/Hotels"
import { useHotel } from "../../Shared/Hooks/useHotel"
import { HotelsForm } from "../../Components/AdminComponents/Hotels/HotelsForm"
import { UpdateHotelsForm } from "../../Components/AdminComponents/Hotels/UpdateHotelsForm"
import { CatHabitacion } from "../../Components/AdminComponents/CatHabitacion/CatHabitacion"
import { useCatHabitacion } from "../../Shared/Hooks/useCatHabitacion"
import { UpdateCatHabitacion } from "../../Components/AdminComponents/CatHabitacion/UpdateCatHabitacion"
import { CatHabitacionForm } from "../../Components/AdminComponents/CatHabitacion/CatHabitacionForm"
import { Habitacion } from "../../Components/AdminComponents/Habitacion/Habitacion"
import { useHabitacion } from "../../Shared/Hooks/useHabitacion"
import { HabitacionForm } from "../../Components/AdminComponents/Habitacion/HabitacionForm"
import { UpdateHabitacion } from "../../Components/AdminComponents/Habitacion/UpdateHabitacion"
import { ReservaChart } from "../../Components/ReservaChart"
import { TypeEvent } from "../../Components/AdminComponents/TypeEvent/TypeEvent"

export const Admin = () => {
    const { categories, getCategories, isFetching } = useCategory()
    const { getCategoriesId } = useCategory()

    //# Users
    const { users, getUsersHook, isFetchingUsers } = useUser()

    //# Hotels
    const { hotels, getHotelsHook, isFetchingHotels} = useHotel()

    //# Cat. Habitación
    const { cHabs, getCatHabitacionHook, isFetchingCatHabs} = useCatHabitacion()

    //# Habitaciones
    const { habitaciones, getHabitacionesHook, isFetchingHabitaciones} = useHabitacion()

    const navigate = useNavigate()

    useEffect(() => {
        getCategories()
        getUsersHook()
        getHotelsHook()
        getCatHabitacionHook()
        getHabitacionesHook()
    }, [])

    if (isFetching) {
        return (
            <div>
                cargando...
            </div>
        )
    }

    return (
        <div>
            <Routes>
                <Route path="adminFeed" element={<AdminFeed />} />

                <Route path="newCategory" element={<CategoryForm />} />
                <Route path="newUser" element={<UserForm />} />
                <Route path="newHotel" element={<HotelsForm/>}/>
                <Route path="newCatHabitacion" element={<CatHabitacionForm/>}/>
                <Route path="newHabitacion" element={<HabitacionForm/>}/>

                <Route path="updateCategory/:id" element={<UpdateCategoryForm />} />
                <Route path="updateUser/:id" element={<UpdateUserForm />} />
                <Route path="updateHotel/:id" element={<UpdateHotelsForm/>}/>
                <Route path="updateCatHabitacion/:id" element={<UpdateCatHabitacion/>}/>
                <Route path="updateHabitacion/:id" element={<UpdateHabitacion/>}/>

                <Route path="/categories" element={<Category categories={categories} />} />
                <Route path="/users" element={<Users users={users} />} />
                <Route path="/hotels" element={<Hotels hotels={hotels} />} />
                <Route path="/catHabs" element={<CatHabitacion cHabs={cHabs}/>}/>
                <Route path="/habitaciones" element={<Habitacion habitaciones={habitaciones}/>}/>
                <Route path="/graficosReserva" element={<ReservaChart />}/>
                <Route path="/typeEvent" element={<TypeEvent />}/>
            </Routes>
        </div>
    )
}
