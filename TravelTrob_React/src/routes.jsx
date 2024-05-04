import { Auth } from "./Pages/Auth/Auth.jsx";
import { Info } from "./Components/Info.jsx";
import { Login } from "./Components/Login.jsx";
import { Register } from "./Components/Register.jsx";

export const routes = [
    { path: '/auth', element: <Auth /> },
    { path: '/register', element: <Register /> },
    {path: '/*', element: <Info/>}
]
