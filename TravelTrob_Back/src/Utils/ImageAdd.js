import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

// Convertir import.meta.url a una ruta de archivo
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Define la ruta del directorio de subidas
const uploadDir = path.join(__dirname, '../public/uploads')

// Verifica si el directorio de subidas existe, si no, créalo
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
}

const guardar = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir)
    },
    filename: (req, file, cb) => {
        if (file) {
            let ext = file.originalname.split('.').pop()
            cb(null, Date.now() + '.' + ext)
        }
    }
})

const filtro = (req, file, cb) => {
    if (file && (file.mimetype === 'image/jpg' || 
                 file.mimetype === 'image/jpeg' || 
                 file.mimetype === 'image/png')) {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

export const subirImagen = multer({
    storage: guardar,
    fileFilter: filtro
})
