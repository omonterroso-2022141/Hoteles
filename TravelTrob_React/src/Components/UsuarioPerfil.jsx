import { useEffect, useState } from 'react'
import { Footer } from './Footer.jsx'
import { Input } from './Input.jsx'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../Shared/Hooks/useUser.jsx'
import {
    validateEmail, validateUsername, validatePassword, validatePasswordConfirm,
    passConfirmationValidationMessage, passwordValidationMessage, usernameValidationMessage,
    emailValidationMessage, validatePhone, phoneValidationMessage,
    message
  } from '../Shared/Validators/validators.js'
import './CSS/Info.css'
import './CSS/UserConfig.css'

export const UsuarioPerfil = () => {
    //Contraseña
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const { getUsersInfoHook, updateUserHook, deleteUserHook, user, isFetchingUser } = useUser()
    const [hasFetched, setHasFetched] = useState(false)
    const navigate = useNavigate()

    const [formData, setFormData] = useState(
        {   
            id: {
                value: '',
                isValid: false,
                showError: false
            },
            name: {
                value: '',
                isValid: false,
                showError: false
            },
            surname: {
                value: '',
                isValid: false,
                showError: false
            },
            username: {
                value: '',
                isValid: false,
                showError: false
            },
            email: {
                value: '',
                isValid: false,
                showError: false
            },
            password: {
                value: '',
                isValid: false,
                showError: false
            },
            passwordConfirm: {
                value: '',
                isValid: false,
                showError: false
            },
            phone: {
                value: '',
                isValid: false,
                showError: false
            },
        }
    )

    useEffect(() => {
        const fetchData = async () => {
            await getUsersInfoHook()
            setFormData({
                id: { value: user._id, isValid: true, showError: false },
                name: { value: user.name, isValid: true, showError: false },
                surname: { value: user.surname, isValid: true, showError: false },
                username: { value: user.username, isValid: true, showError: false },
                email: { value: user.email, isValid: true, showError: false },
                password: { value: '', isValid: false, showError: false },
                passwordConfirm: { value: '', isValid: false, showError: false },
                phone: { value: user.phone, isValid: true, showError: false },
            })
            setHasFetched(true)
        }
        if (!hasFetched) {
            fetchData()
        }
    }, [hasFetched, getUsersInfoHook, user])
  
    if (isFetchingUser) {
      return (
          <span>Loading...</span>
      )
    }

    const onValueChange = (value, field) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }

    const handleValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formData.password.value, value)
                break
            case 'phone':
                isValid = validatePhone(value)
                break;
            default:
                break
        }
        setFormData((prevData) => (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        if(formData.password.value == '' || formData.passwordConfirm.value == '')
            alert('Debe de introducir la contraseña para asegurarnos que es usted')
        else{
            updateUserHook(
                formData.id.value,
                formData.name.value,
                formData.surname.value,
                formData.username.value,
                formData.email.value,
                formData.password.value,
                formData.phone.value,
            )
            navigate('/feed')
        }
    }
    const handleDelete = async (e)=>{
        e.preventDefault()
        deleteUserHook(
            formData.id.value
        )
        navigate('/info')
    }

    const isSubmitButtonDisable =
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.phone.isValid

    return (
        <div className='ContenedorFondoUsuario'>
            <div className="user-profile">
                <h2>Update User Profile</h2>
                <form>
                    <div>
                        <Input
                            field='name'
                            label='Nombre'
                            type='text'
                            value={formData.name.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.name.showError}
                        />
                    </div>
                    <div>
                        <Input
                            field='surname'
                            label='Apellido'
                            type='text'
                            value={formData.surname.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.surname.showError}
                        />
                    </div>
                    <div>
                        <Input
                            field='username'
                            label='Username'
                            type='text'
                            value={formData.username.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.username.showError}
                            validationMessage={usernameValidationMessage}
                        />
                    </div>
                    <div>
                        <Input
                            field='email'
                            label='Email'
                            type='email'
                            placeholder='example@gmai.com'
                            value={formData.email.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.email.showError}
                            validationMessage={emailValidationMessage}

                        />
                    </div>
                    <div>
                        <Input
                            field='password'
                            label='Contraseña'
                            type={'password'}
                            value={formData.password.value}
                            onChangeHandler={onValueChange}
                            onChange={e => setPassword(e.target.value)}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.password.showError}
                            validationMessage={passwordValidationMessage}

                        />

                    </div>
                    <div>
                        <Input
                            field='passwordConfirm'
                            label='Confirmar Contraseña'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.passwordConfirm.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.passwordConfirm.showError}
                            validationMessage={passConfirmationValidationMessage}
                        />
                    </div>
                    <div>
                        <Input
                            field='phone'
                            label='Telefono'
                            type='text'
                            value={formData.phone.value}
                            onChangeHandler={onValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.phone.showError}
                            validationMessage={phoneValidationMessage}
                        />
                    </div>
                    <button disabled={isSubmitButtonDisable} onClick={handleUpdate} type="submit">Update Profile</button>
                    <button onClick={handleDelete} style={{ marginTop: '20px', color: 'red' }}>
                        Delete Account
                    </button>
                </form>
                {message && <p>{message}</p>}

            </div>
            <Footer />
        </div>
    )
}
