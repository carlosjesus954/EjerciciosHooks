import React from "react"


export const Small = React.memo(({value}) => {
    
    console.log('hheeheh')
  return (
    <small>{ value }</small>
  )
})
