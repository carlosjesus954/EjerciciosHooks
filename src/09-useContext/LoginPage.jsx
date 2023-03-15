import { useContext } from "react"
import { userContext } from "./context/UserContext"

export const LoginPage = () => {
  const {user, setUser} = useContext(userContext)

  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>
      <button
        onClick={()=> setUser({id:1, name: 'Carlos', genero: 'Macho'})}
      >
        Establecer Usuario
      </button>
    </>
  )
}
