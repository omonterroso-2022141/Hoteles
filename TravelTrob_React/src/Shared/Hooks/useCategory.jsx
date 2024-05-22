import { useState } from "react"
import { getCategoryRequest } from "../../Services/api"

export const useCategory = () => {
    const [categories, setcategories] = useState(null)

    const getCategories = async()=>{
        const res = await getCategoryRequest()
        if(res.error){
            alert(
                res.err.res.data.message ||
                'Error al obtener Categorias'
            )
        }
        setcategories(res.data)
    }

  return {
    categories,
    isFetching: !categories,
    getCategories
  }
}
