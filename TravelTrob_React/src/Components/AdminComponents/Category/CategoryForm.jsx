import React from 'react'

export const CategoryForm = () => {
  return (
    <>
      <h1>CategoryForm</h1>
      <div style={{display:'grid', gridTemplateColumns:'auto auto'}}>
        <span>Nombre</span>
        <input type="text"/>
        <span>Contenido</span>
        <input type="text"/>
      </div>
    </>
  )
}
