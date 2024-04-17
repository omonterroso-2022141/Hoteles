'use strict'

export const eliminarEspacios = (data)=>{
    let array = Object.entries(data)
    let modArray
    let dataInput
    array.forEach(([key, value]) => {
        console.log('key: ' + key + ' value: ' + value)
        if(typeof value === 'string'){
            console.log('String')
            value = value.trim()
        }
    })
    dataInput = Object.fromEntries(array)
    return dataInput
}