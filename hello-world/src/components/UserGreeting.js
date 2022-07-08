
import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props) {
super(props)
this.state = {
isLoggedIn : true
}
}
render() { 

return this.state.isLoggedIn && <div>welcomee Ashuuu</div> //either display value or null

//return this.state.isLoggedIn ? //Turnary operation
//(<div>welcome Asharani Khanapure</div> ) :
//(<div>welcome Ashu</div>)

// let message //using variable let
// if(this.state.isLoggedIn){
// message = <div>welcome Asharani</div>
// }else{
// message = <div>welcome Guest</div>
// }

// return <div>{message}</div>

// if(this.state.isLoggedIn){ //one method
// return(
// <div>
// welcome A Khanapure
// </div>
// )
//}else{
// return(
// <div>Welcome Guest</div>
// )
// }
// return (
// <div>
//<div>Welcome Ashuuu</div>
//<div>Welcome Guest</div>
//</div>
//)
}
}

export default UserGreeting

