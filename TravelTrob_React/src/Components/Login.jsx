import { emailValidationMessage, validateEmail } from "../Shared/Validators/validators.js";
import { passwordValidationMessage, validatePassword } from "../Shared/Validators/validators.js";
import { Input } from "./Input.jsx";
import { useState } from "react";
import { useLogin } from "../Shared/Hooks/useLogin.jsx";
import { Logo } from "./Logo.jsx";

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin()
  const [formData, setFormData] = useState(
    {
      email: {
        value: "",
        isValid: false,
        showError: false,
      },
      password: {
        value: "",
        isValid: false,
        showError: false,
      }
    }
  )
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const isSubmitButtonDisable =
    !formData.email.isValid ||
    !formData.password.isValid
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
  const handleLogin = (e) => {
    e.preventDefault()
    login(
      formData.email.value,
      formData.password.value
    )
  }
  const handleValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break
      case 'password':
        isValid = validatePassword(value)
        break
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

  
//Mostrar o oCULTAR cONTRASEÑA
  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    
    <div>
      <Logo className='Logo'/>  
      <div className='contorno-login'>

        <form
          className='form-auth'
          onSubmit={handleLogin}
        >
          <Input
            field='email'
            label='Email'
            type='email'
            value={formData.email.value}
            onChangeHandler={onValueChange}
            onBlurHandler={handleValidationOnBlur}
            showErrorMessage={formData.email.showError}
            validationMessage={emailValidationMessage}
          />

          <Input
            field='password'
            label='Contraseña'
            type={showPassword ? 'text' : 'password'}
            value={formData.password.value}
            onChangeHandler={onValueChange}
            onChange={e => setPassword(e.target.value)}
            onBlurHandler={handleValidationOnBlur}
            showErrorMessage={formData.password.showError}
            validationMessage={passwordValidationMessage}

          />
          <button
            disabled={isSubmitButtonDisable}
          >
            LogIn
          </button>
          <button onClick={handleTogglePassword}>
            {showPassword ? 'Ocultar' : 'Mostrar'} contraseña
          </button>
        </form>
        <span onClick={switchAuthHandler}>
          ¿Aún no tienes una cuenta? ¡Registrate...!
        </span>
      </div>
    </div>

  )
}
