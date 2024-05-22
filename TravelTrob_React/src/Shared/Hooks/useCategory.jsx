import { useState } from "react"
import { delteCategoryRequest, getCategoryRequest, saveCategoryRequest, updateCategory } from "../../Services/api"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const useCategory = () => {
  const [categories, setcategories] = useState(null)
  const navigate = useNavigate()

  const getCategories = async () => {
    const res = await getCategoryRequest()
    if (res.error) {
      alert(
        res.err.res.data.message ||
        'Error al obtener Categorias'
      )
    }
    setcategories(res.data.category)
  }

  const [isLoading, setisLoading] = useState(false)
  const saveCategory = async (category) => {
    setisLoading(true)
    const res = await saveCategoryRequest(category)
    setisLoading(false)
    if (res.error) {
      return alert('error al agregar la categoría')
    }
    navigate('/admin/categories')
  }

  const update = async (id, name, content) => {
    setisLoading(true)
    const category = {
      name,
      content
    }
    const res = await updateCategory(id, category)
    setisLoading(false)
    if (res.error) {
      if (res?.err?.res?.data?.errors) {
        let arr = res?.err?.res?.data?.errors
        for (const error of arr) {
          return toast.error(
            error.msg
          )
        }
      }
      return toast.error(
        res?.err?.res?.data?.msg ||
        res?.err?.data?.msg ||
        'Error al actualizar el categoría, intenta de nuevo.'
      )
    }
    getCategories()
  }

  const deleteCategoryHook = async(id)=>{
    const res = await delteCategoryRequest(id)
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
        'Error al eliminar categoría'
      )
    }
  }

  return {
    categories,
    isFetching: !categories,
    getCategories,
    isLoading,
    saveCategory,
    update,
    deleteCategoryHook
  }
}
