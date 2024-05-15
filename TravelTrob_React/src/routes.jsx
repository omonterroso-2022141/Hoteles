import { Auth } from "./Pages/Auth/Auth.jsx";
import { Info } from "./Components/Info.jsx";
import { Feed } from "./Pages/Feed/Feed.jsx";
import { Reserva } from "./Components/Reserva.jsx";


export const routes = [
    { path: '/auth', element: <Auth /> },
    { path: '/feed', element: <Feed /> },
    { path: '/reserva', element: <Reserva /> },
    { path: '/*', element: <Info /> }
]
