import { emailValidationMessage, validateEmail } from "../Shared/Validators/validators.js";
import { passwordValidationMessage, validatePassword } from "../Shared/Validators/validators.js";
import { Input } from "./Input.jsx";
import { useState } from "react";
import { useLogin } from "../Shared/Hooks/useLogin.jsx";
import { Logo } from "./Logo.jsx";
import { useNavigate } from "react-router-dom";
import { ClockLoader } from "react-spinners"

export const Login = ({ switchAuthHandler }) => {
  const { login, isLoading } = useLogin()
  const navigate = useNavigate()
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

  if(isLoading){
    return ( 
      <div className="container d-flex align-items-center justify-content-center vh-100">
        <ClockLoader />
      </div>
    )
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
  //Viajar a Feed
    const handlerNavigateToLogin = () =>{
      navigate('/feed')
    }

  return (
    <div className='contorno-login'>
      <div className="container">
        <Logo className='Logo' />
        <h1 className="TituloL">¡Bienvenido!</h1>
      </div>
      <form
        className='form-auth'
        onSubmit={handleLogin}
      >

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
        <button
          disabled={isSubmitButtonDisable}
        >
          LogIn
        </button>

        <span className="CambioRegister" onClick={switchAuthHandler}>
          ¿Aún no tienes una cuenta? ¡Regístrate...!
        </span>
      </form>


    </div>
  )
}
