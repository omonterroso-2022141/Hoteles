import { compare, hash } from "bcrypt"

export const encrypt = (password) => {
    try {
        return hash(password, 10)
    } catch (err) {
        console.error(err)
        return err
    }
}

export const checkPassword = async (password, hash) => {
    try {
        return await compare(password, hash)
    } catch (err) {
        console.error(err)
        return err
    }
}

export const checkUpdate = async (data, userId) => {
    if (userId) {
        if (
            Object.entries(data).length === 0 ||
            data.name === '' ||
            data.surname === '' ||
            data.email === '' ||
            data.username === ''
        ) return false
        return true
    }
}

export const formatDate = (date) => {
    // Check if date is a Date object
    if (!(date instanceof Date)) {
        return 'Err';
    }

    // Convertir el objeto Date a una cadena de caracteres en formato ISO 8601
    const isoString = date.toISOString()

    // Expresión regular para coincidir con el formato ISO 8601
    let regex = /^(\d{4})-(\d{2})-(\d{2})T.*$/
    let match = isoString.match(regex)
    
    if (match) {
        const year = match[1]
        const month = match[2]
        const day = match[3]
        return `${day}/${month}/${year}`
    } else {
        return 'Err'
    }
}