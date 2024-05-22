import { useState } from 'react';
import { Footer } from './Footer.jsx'
import { Input } from './Input.jsx'
import { usePerfilSettings } from '../Shared/Hooks/usePerfilSettings.jsx';
import { useNavigate } from 'react-router-dom';
import {
  validateEmail, validateUsername, validatePassword, validatePasswordConfirm,
  passConfirmationValidationMessage, passwordValidationMessage, usernameValidationMessage,
  emailValidationMessage, validatePhone, phoneValidationMessage
} from '../Shared/Validators/validators.js'
import './CSS/UsuarioPerfil.css'

export const UsuarioPerfil = () => {
    const { register, isLoading } = usePerfilSettings()
    //Contraseña
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const navigate = useNavigate()


    const [formData, setFormData] = useState(
        {
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
            }
        }
    )

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

    const handleRegister = async (e) => {
        e.preventDefault()
        register(
            formData.name.value,
            formData.surname.value,
            formData.username.value,
            formData.email.value,
            formData.password.value,
            formData.phone.value
        )
        switchAuthHandler()
    }

    const handleTogglePassword = () => {
        setShowPassword(prevState => !prevState);
    };

    const isSubmitButtonDisable =
        !formData.email.isValid ||
        !formData.username.isValid ||
        !formData.password.isValid ||
        !formData.passwordConfirm.isValid ||
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
                    <button type="submit">Update Profile</button>
                </form>
                <button onClick={handleDelete} style={{ marginTop: '20px', color: 'red' }}>
                    Delete Account
                </button>
                {message && <p>{message}</p>}

            </div>
            <Footer />
        </div>
    );
};
