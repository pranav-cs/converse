import React, { Component, createRef } from 'react'
import { Redirect, withRouter } from "react-router-dom"

class Login extends Component {
  constructor(props) {
    super(props)
    this.username_ref = createRef()
    this.state = { login_success: false }
  }

  go() {
    console.log(this.username_ref.current.value)
    this.setState(() => ({
      login_success: true
    }))
  }

  render() {
    // if (this.state.login_success) {
    return <Redirect to='/home' />
    // }

    // return (
    //   <div className="columns is-mobile is-centered">
    //     <div id='Login' className="column is-full-mobile is-half-tablet is-two-thirds-desktop">

    //       <div id='title'>
    //         <span id='logo' className="fas fa-paw"></span>
    //         <h1 className="is-size-1">{process.env.REACT_APP_NAME}</h1>
    //       </div>

    //       <div className="field has-addons">
    //         <div className="control">
    //           <input
    //             className="input is-rounded is-large"
    //             type="text"
    //             placeholder="Enter a nickname"
    //             ref={this.username_ref} />
    //         </div>

    //         <div className="control">
    //           <button
    //             className="button is-info is-rounded is-large"
    //             onClick={() => this.go()}>Go</button>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // )
  }
}

export default withRouter(Login)
