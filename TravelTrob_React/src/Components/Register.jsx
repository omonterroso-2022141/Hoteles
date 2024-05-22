import { Input } from './Input.jsx'
import { useState } from 'react'
import { useRegister } from '../Shared/Hooks/useRegister.jsx'
import {
  validateEmail, validateUsername, validatePassword, validatePasswordConfirm,
  passConfirmationValidationMessage, passwordValidationMessage, usernameValidationMessage,
  emailValidationMessage, validatePhone, phoneValidationMessage
} from '../Shared/Validators/validators.js'
import { useNavigate } from 'react-router-dom'
import { Logo } from "./Logo.jsx";

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister()
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
    <div className='contorno-register'>
      <div className='Container'>
        <Logo className='Logo' />
        <h1 className='Titulo'>Registro</h1>
      </div>

      <form
        className='form-auth-Register'
        onSubmit={handleRegister}
      >
        <Input
          field='name'
          label='Nombre'
          type='text'
          value={formData.name.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.name.showError}
        />
        <Input
          field='surname'
          label='Apellido'
          type='text'
          value={formData.surname.value}
          onChangeHandler={onValueChange}
          onBlurHandler={handleValidationOnBlur}
          showErrorMessage={formData.surname.showError}
        />

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
        <button
          disabled={isSubmitButtonDisable}
        >
          Register
        </button>
        <span className="CambioRegister" onClick={switchAuthHandler}>
          ¿Ya tienes una cuenta? ¡Inicia sesión acá!
        </span>
      </form>
    </div>


  )
}