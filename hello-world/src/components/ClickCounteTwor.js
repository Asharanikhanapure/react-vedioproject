import React, { Component } from 'react'

 class ClickCounteTwor extends Component {
    // constructor(props) {
    //     super(props)
      
    //     this.state = {
    //        count:0
    //     }
    //   }
    //   incrementCount=()=>{
    //       this.setState(prevState=>{
    //           return {count:prevState.count+1}
    //       })
    //   }
  render() {
    const  {count,incrementCount}=this.props
    return (
      <button onClick={incrementCount} >Clicked {count} item</button>
    )
  }
}

export default ClickCounteTwor