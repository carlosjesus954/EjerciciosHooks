import { useState } from "react"
import { userContext } from "./UserContext"

export const UserProvider = ({children}) => {
    // const user = {
    //     id: 1,
    //     name: 'Joselu',
    //     genero: 'No se sabe'
    // }
    const [user, setUser] = useState()
    
  return (
    // <userContext.Provider value={{hola: 'Mundo', user: user }}>
    <userContext.Provider value={{user, setUser}}>

        { children }
    </userContext.Provider>
  )
}
