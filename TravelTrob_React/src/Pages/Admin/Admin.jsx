import { Route, Routes } from "react-router-dom"
import { Category } from "../../Components/AdminComponents/Category"
import { useCategory } from "../../Shared/Hooks/useCategory"
import { useEffect } from "react"
import { CategoryForm } from "../../Components/AdminComponents/Category/CategoryForm"

export const Admin = () => {
    const {categories, getCategories, isFetching} = useCategory()

    useEffect(() => {
        getCategories()
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
                <Route path="newCategory" element={<CategoryForm />} />
                <Route path="categories" element={<Category categories={categories}/>} />
            </Routes>
        </div>
    )
}
