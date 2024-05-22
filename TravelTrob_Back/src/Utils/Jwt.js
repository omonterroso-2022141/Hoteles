'use strict'
import jwt from "jsonwebtoken"

const secretKey = '@M4ST3R_K3Y@'

export const generateJwt = async (payload) => {
    try {
        return jwt.sign(payload, secretKey, {
            expiresIn: '3h',
            algorithm: 'HS256'
        })
    } catch (err) {
        console.error(err)
        return err
    }
}