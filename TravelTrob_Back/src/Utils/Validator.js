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
