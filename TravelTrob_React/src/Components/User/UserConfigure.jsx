import { useState } from "react";
import {
    validateEmail,
    validateUsername,
    validatePassword,
    validatePasswordConfirm,
    passConfirmationValidationMessage,
    passwordValidationMessage,
    usernameValidationMessage,
    emailValidationMessage,
    validatePhone,
    phoneValidationMessage
} from '../../Shared/Validators/validators.js';
import { Input } from '../Input.jsx';

export const UserConfigure = ({ settings, saveSettings }) => {
    const inputs = [
        { field: 'name', label: 'Nombre', type: 'text' },
        { field: 'surname', label: 'Apellido', type: 'text' },
        { field: 'username', label: 'Username', validationMessage: usernameValidationMessage, type: 'text' },
        { field: 'email', label: 'Email', validationMessage: emailValidationMessage, type: 'email' },
        { field: 'password', label: 'Contraseña', validationMessage: passwordValidationMessage, type: 'password' },
        { field: 'passwordConfirm', label: 'Confirmar Contraseña', validationMessage: passConfirmationValidationMessage, type: 'password' },
        { field: 'phone', label: 'Teléfono', validationMessage: phoneValidationMessage, type: 'text' }
    ];

    const [formState, setFormState] = useState(() => {
        const initialState = {};
        inputs.forEach(input => {
            initialState[input.field] = {
                isValid: input.field === 'passwordConfirm' ? validatePasswordConfirm(settings.password, settings.passwordConfirm) : eval(`validate${input.field.charAt(0).toUpperCase() + input.field.slice(1)}`)(settings[input.field]),
                showError: false,
                value: settings[input.field] || ''
            };
        });
        return initialState;
    });

    const handleInputValueChange = (value, field) => {
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    };

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'email':
                isValid = validateEmail(value);
                break;
            case 'username':
                isValid = validateUsername(value);
                break;
            case 'password':
                isValid = validatePassword(value);
                break;
            case 'passwordConfirm':
                isValid = validatePasswordConfirm(formState.password.value, value);
                break;
            case 'phone':
                isValid = validatePhone(value);
                break;
            default:
                break;
        }
        setFormState(prevState => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        saveSettings({
            name: formState.name.value,
            surname: formState.surname.value,
            username: formState.username.value,
            email: formState.email.value,
            password: formState.password.value,
            passwordConfirm: formState.passwordConfirm.value,
            phone: formState.phone.value
        });
    };

    const isSubmitButtonDisabled = Object.values(formState).some(input => !input.isValid);

    return (
        <form onSubmit={handleFormSubmit}>
            {inputs.map(input => (
                <Input
                    key={input.field}
                    field={input.field}
                    label={input.label}
                    value={formState[input.field].value}
                    onChangeHandler={handleInputValueChange}
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMessage={formState[input.field].showError}
                    validationMessage={input.validationMessage}
                    type={input.type}
                />
            ))}
            <button disabled={isSubmitButtonDisabled}>
                Guardar
            </button>
        </form>
    );
};
