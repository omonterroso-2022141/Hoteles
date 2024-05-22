import logo from './IMG/Logo.png'

export const Logo = ({text}) => {
    return (
        <div>
            <img  src={logo} alt="Travel Trob" />
            <span>&nbsp;&nbsp;{text}</span>
        </div>
    )
}
