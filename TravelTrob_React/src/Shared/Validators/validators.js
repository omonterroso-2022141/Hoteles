// VALIDACION DE CORREO/EMAIL
export const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
}

export const emailValidationMessage = 'Porfavor ingresa un correo valido'

//VALIDACION DE USUARIO
export const validateUsername = (username)=>{
    const regex =  /^\S{5,12}$/
    return regex.test(username)
}

export const usernameValidationMessage = 'Tu nombre de usuario tiene que tener mínimo 5 y  máximo 12 caracteres. No puede llevar espacios'

//VALIDACION DE CONTRASEÑA
export const validatePassword = (password) => {
    const regex = /^\S{6,25}$/
    return regex.test(password)
}

export const passwordValidationMessage =  'La contraseña debe tener entre 6 y 12 caracteres y no tenes espacios vacíos'

//VALIDACION DE CONFIRMACIÓN DE CONTRASEÑA

export const validatePasswordConfirm = (pass, confirmPass)=>{
    return pass === confirmPass
}

export const passConfirmationValidationMessage = '¡Lo siento! La contraseña no concide'

//VALIDACION DE TELEFONO

export const validatePhone = (phone)=>{
    const regex = /^\d{1,8}$/
    return regex.test(phone)
}

export const phoneValidationMessage = 'El numero de telefono tiene que ser maximo 8 numeros, no se aceptan letras'
