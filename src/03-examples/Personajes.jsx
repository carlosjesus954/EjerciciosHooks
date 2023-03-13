import { useLayoutEffect, useRef, useState } from "react"

export const Personajes = ({author, quote}) => {
  const pRef = useRef()
  const [boxSize, setBoxSize] = useState({width: 0, height: 0})
  useLayoutEffect(() => {
    const { width, height } = (pRef.current.getBoundingClientRect())
    setBoxSize({width, height})
  }, [quote])
  return (
    <>
        <p ref={pRef}>{ author }</p>
        <h2>{ quote }</h2>
        <h3>{JSON.stringify(boxSize)}</h3>
        <hr />
    </>
  )
}
