import { useEffect } from 'react'
import { useCategory } from '../../../Shared/Hooks/useCategory'
import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export const UpdateCategoryForm = () => {
    const params = useParams()
    const { getCategoriesId, update } = useCategory()
    const { id } = params
    const navigate = useNavigate()
    const [formData, setformData] = useState({
        name: '',
        content: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setformData((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await update(id, formData.name, formData.content)
            console.log(formData.name, formData.content, formData._id)
            navigate('../categories')
            console.log(formData.name, formData.content, formData._id)
        } catch (error) {
            console.error('Error updating category', error)
        }
    }

    const handleNavigateToCategories = () => {
        navigate('../categories')
    }



    const location = useLocation()
    const category = location.state.category

    useEffect(() => {
        setformData({
            name: category.name,
            content: category.content
        })
    }, [category])


    return (
        <>
            <h1>Actualizar Categoría</h1>

            <form onSubmit={handleUpdate}>
                <div>
                    <h3>Name:</h3>
                    <input value={formData.name} onChange={handleChange} type="text" name="name" id="name" />
                    <h3>Content:</h3>
                    <textarea style={{maxHeight:'20em'}} value={formData.content} onChange={handleChange} type="text" name="content" id="content" />
                </div>
                <button type="submit">Actualizar</button>
                <button onClick={handleNavigateToCategories}>Cancelar</button>
            </form>
        </>
    )
}
