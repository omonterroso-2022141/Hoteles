import { Toaster } from "react-hot-toast"
import { useRoutes } from "react-router-dom"
import {routes} from './routes.jsx'

function App() {
  const element = useRoutes(routes)

  return (
    <>
     {element}
     <Toaster position='bottom-right' reverseOrder={false}/>
    </>
  )
}

export default App
