import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCategory } from "../../Shared/Hooks/useCategory"
import './Category.css'

export const Category = ({ categories = [] }) => {
    const navigate = useNavigate()

    const navigateToUpdate = (category) => {
        navigate(`/admin/updateCategory/${category._id}`, { state: { category } })
    }

    const { deleteCategoryHook } = useCategory()

    const noData = (
        <>
            <div>
                No hay Categorias('si usted ve este mensaje, por favor llamar al técnico')
            </div>
        </>
    )

    const deleteCategory = (id, name) => {
        if (name === 'DEFAULT') {
            return console.log('No se puede borrar Default')
        }
        deleteCategoryHook(id)
        console.log(id);
        window.location.reload()
    }

    return (
        <>
            <div className="add">
                <Link to={'/admin/newCategory'}>
                    <button style={{ width: '100%' }}>Añadir</button>
                </Link>
                <Link to={'/admin/Adminfeed'}>
                    <button>Regresar</button>
                </Link>
            </div>
            <div style={{ marginTop: '1em', marginBottom: '5em' }}>
                <h1 style={{ textAlign: 'center' }}><strong>Categories</strong></h1>
                <div className="card-container">
                    {
                        categories.length == 0 ? noData : (
                            categories.map((category) => (
                                <div key={category._id}>
                                    <div style={{ padding: '10px 0 10px 10px' }} className="card-content">
                                        <p><strong>ID:</strong> {category._id}</p>
                                        <p><strong>Name:</strong> {category.name}</p>
                                        <p><strong>Content:</strong></p>
                                        <div className="parraf">
                                            {category.content}
                                        </div>
                                        <div style={{display:'flex', gap:'40%'}}>
                                            <button className="category-add-button" onClick={() => navigateToUpdate(category)} style={{ width: '100px' }}>Editar</button>
                                            <button className="category-delete-button" onClick={() => deleteCategory(category._id, category.name)} style={{ width: '100px' }}>Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </>
    )
}
