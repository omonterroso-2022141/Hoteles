import { Auth } from "./Pages/Auth/Auth.jsx";
import { Info } from "./Components/Info.jsx";
import { Feed } from "./Pages/Feed/Feed.jsx";
import { Reserva } from "./Components/Reserva.jsx";
import { Register } from "./Components/Register.jsx";
import { ContentHabitacion } from "./Components/Habibtaciones/ContentHabitacion.jsx";
import { UsuarioPerfil } from './Components/UsuarioPerfil.jsx'
import { ReservaDeEventos } from "./Components/ReservaDeEventos.jsx";


export const routes = [
    { path: '/auth', element: <Auth /> },
    { path: '/feed', element: <Feed /> },
    { path: '/*', element: <Info /> },
    { path: '/reservacion', element: <Reserva /> },
    { path: '/register', element: <Register /> },
    { path: '/habitaciones/:idHotel', element: <ContentHabitacion /> },
    { path: '/habitaciones/:idHotel/reservacion/:idHabitacion', element: <Reserva /> },
    { path: '/UsuarioPerfil', element: <UsuarioPerfil /> },
    { path: '/ReservaEvento', element: <ReservaDeEventos /> }
]
