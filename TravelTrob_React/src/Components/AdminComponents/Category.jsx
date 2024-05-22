import { Link } from "react-router-dom"
import { useState } from "react"

export const Category = ({categories = []}) => {
    const [category, setcategory] = useState(
        {
            _id: '',
            name: '',
            content: ''
        }
    )

    const noData = (
        <>
            <div>
                No hay Categorias('si usted ve este mensaje, por favor llamar al técnico')
            </div>
        </>
    )

    const getCategories = (category) => {
        setcategory(category)
    }

    const categoryArray = Object.values(categories)

    return (
        <>
            <div><h1>Categorías</h1></div>
            <div>
                <Link to={'/admin/newCategory'}>
                    <button>Añadir Categoría</button>
                </Link>
            </div>
            <h4>{console.log(categoryArray)}</h4>
            {
                categoryArray.length == 0 ? noData:(
                    categoryArray.map((category)=>(
                        <div key={category._id}>
                            <div className="card-body">
                                <h5>
                                    {category.name}
                                </h5>
                            </div>
                        </div>
                    ))
                )
            }
        </>
    )
}
