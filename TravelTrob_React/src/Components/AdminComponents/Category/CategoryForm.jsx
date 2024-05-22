import { useState } from "react"
import { useCategory } from "../../../Shared/Hooks/useCategory"
import { useNavigate } from "react-router-dom"

export const CategoryForm = () => {
  const { isLoadin, saveCategory } = useCategory()
  const [formData, setformData] = useState({
    name: '',
    content: ''
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setformData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveCategory(formData)
  }

  const handleNavigateToCategories = ()=>{
    navigate('/admin/categories')
  }


  return (
    <>
      <h1>Agregar Categoría</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <h3>name:</h3>
          <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" />
          <h3>Content:</h3>
          <input value={formData.content} onChange={handleChange} type="text" name="content" id="content" />
        </div>
        <button type="submit">Agregar</button>
        <button onClick={handleNavigateToCategories}>Cancelar</button>
      </form>
    </>
  )
}
