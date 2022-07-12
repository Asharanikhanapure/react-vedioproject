import React, { Component } from 'react'
 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'


      }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    // eslint-disable-next-line no-undef
    handleCommentsChange = event => {
            this.setState({
                comments: event.target.value

            })
        }

            handleTopicChange= event => {
                this.setState({
                    topic: event.target.value
    
                })
        

    }

    handleSubmit = event =>{
        alert(`${this.state.username} $(this.state.comments) ${this.state.topic}`)
        event.preventDefault()
    }
  render() {
   // const { username, comments, topic} = this.state
    return (
        <form onsubmit={this.handlesubmit}>
      <div>
        <label>Username</label>
        <input type='text' 
        value={this.state.username} 
        onchange={this.handleUsernameChange}
        />
        
      </div>

      <div>
        <label>comments</label>
        <textarea 
        value={this.state.comments}
        onchange={this.handleCommentsChange}>

        </textarea>
        
       
      </div>

      <div>
        <label>Topic</label>
        <select value={this.statetopic} 
        onchange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
        </select>

      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form