'use strict'
import User from './User.model.js'
import { encrypt, checkPassword, checkUpdate } from '../Utils/Validator.js'
import { generateJwt } from '../utils/jwt.js'

export const test = (req, res) => {
    return res.send('USER | Function Test')
}

export const register = async (req, res) => {
    try {
        let data = req.body
        data.password = await encrypt(data.password)
        let user = new User(data)
        await user.save()
        return res.send({ message: 'Registered Successfully !!', user })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error Registering', err })
    }
}

export const login = async (req, res) => {
    try {
        let { username, password, email } = req.body
        let user = await User.findOne({ username })
        if (!user) {
            user = await User.findOne({ email })
        }
        if (user && await checkPassword(password, user.password)) {
            const loggedUser = {
                uid: user._id,
                username: user.username,
                name: user.name,
                role: user.role
            }
            let token = await generateJwt(loggedUser)
            return res.send({ message: `Welcome ${user.name}`, loggedUser, token })
        } else {
            return res.status(404).send({ message: 'Invalid Credentials' })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Failed to Login' })
    }
}

export const defaultAdmin = async () => {
    try {
        const exists = await User.findOne({ name: 'ADMIN' })
        if (exists) {
            console.log('Admin already exists')
            return
        }
        let data = {
            name: 'ADMIN',
            surname: 'ADMIN',
            username: 'ADMIN',
            email: 'ADMIN@gmail.com',
            password: '4DMIN@S3CR3TP4SSW0RD@',
            phone: '12345678',
            role: 'ADMIN'
        }
        data.password = await encrypt(data.password)
        let user = new User(data)
        await user.save()
        return console.log('Admin Has been Created')
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Admin Cannot be Created' })
    }
}


/*  
    @ Yerick Aguilar
    # To Update Password you need to Write the Actual Password and New Password
    # To Update Other things you can do it without write any Password
*/
export const updateProfile = async (req, res) => {
    try {
        let { id } = req.params
        let data = req.body
        let user = await User.findById(id)

        let update = checkUpdate(data, id)
        if (!update) return res.status(400).send({ message: 'Some Data Cannot Be Updated or Mising Data' })

        if (data.newPassword &&
            !await checkPassword(data.password, user.password))
            return res.status(401).send({ message: 'Incorrect Password' })

        if (user.role != 'ADMIN') { // # Role 'Client' cannot update own role
            if (data.role)
                return res.status(404).send({ message: 'Some Data Cannot Be Updated or Mising Data' })
        }

        if (data.password && data.newPassword) {
            data.password = await encrypt(data.newPassword)
            let updatedUser = await User.findOneAndUpdate(
                { _id: id },
                data,
                { new: true }
            )
            return res.send({ message: 'Updater Successfully', updatedUser })
        }
        let updatedUser = await User.findOneAndUpdate(
            { _id: id },
            data,
            { new: true }
        )
        if (!updatedUser) return res.status(404).send({ message: 'User not Found, Try Again' })
        return res.send({ message: 'Account Updated Successfully !!', updatedUser })
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error Updating Account' })
    }
}

/*
    @ Yerick Aguilar
    # To Delete an Acount/User is Required Write Username and Password
*/
export const deleteUser = async (req, res) => {
    try {
        let { id } = req.params
        let { password, username } = req.body
        let user = await User.findOne({ username })
        
        // # Validations To Delete Account
        if (user && await checkPassword(password, user.password)) {
            let deletedUser = await User.deleteOne({ _id: id })
            if (deletedUser.deleteCount == 0) return res.status(404).send({ message: 'User not found, not Deleted' })
            return res.send({ message: 'Account Deleted Successfully !!' })
        } else {
            return res.status(400).send({ message: 'Account Cannot be Deleted' })
        }
    } catch (err) {
        console.error(err)
        return res.status(500).send({ message: 'Error Deleting Account' })
    }
}

export const list = async (req, res) => {
    try {
        let user = await User.find()
        return res.send({ user })
    } catch (err) {
        console.error(err)
    }
}
