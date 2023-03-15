import { useContext } from "react"
import { userContext } from "./context/UserContext"

export const HomePage = () => {
  const {user} = useContext(userContext)
  return (
    <>
      <h2>HomePage { user?.name }</h2>
    </>
  )
}
