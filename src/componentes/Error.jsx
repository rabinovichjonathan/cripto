import react from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    
`

 
function Error({children}) {
  return(
      <Texto>
          {children}
      </Texto>
  )
 
}

export default Error