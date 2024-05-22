import '../Pages/Auth/Auth.css'
export const Input = (
    {
        field,
        label,
        value,
        onChangeHandler,
        type,
        showErrorMessage,
        validationMessage,
        onBlurHandler,
        textarea
    }
) => {
    const handleValueChange = (e) => {
        onChangeHandler(e.target.value, field)
    }

    const handleInputBlur = (e) => {
        onBlurHandler(e.target.value, field)
    }

    return (
        <>
            <div className="label-form">
                <span>{label}</span>
            </div>
            {
                textarea ? (
                    <textarea
                        type={type}
                        value={value}
                        rows={5}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                ) : (
                    <input className="FuncionaInput"
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )
            }
            <span className="messageValidate">
                {showErrorMessage && validationMessage}
            </span>
        </>
    )
}
