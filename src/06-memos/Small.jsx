import { memo } from 'react'

const Small = memo( ({ value }) => {
  
    console.log('Me volví a dibujar')
    
    return (
      <small> { value } </small>
  )
});

export default Small
