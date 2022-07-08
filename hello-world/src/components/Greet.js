import React from 'react'

//function Greet() {
//   return <h1>
//       Hello Asharani Khanapure
//  </h1>
//   }

const Greet = props => {
    const {name, cityname} = props

return (
<div>
    <h1>
        Hello {name} a.k {cityname}
        </h1>

</div>
)
}

export default Greet 
