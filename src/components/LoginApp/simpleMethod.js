import React, { Component } from 'react'

class LoginApp extends Component {
  state = {
    isLoggedIn: false,
  }

  toggleLogin = () => {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }))
  }

  render() {
    const { isLoggedIn } = this.state

    return (
      <div>
        <h1>{isLoggedIn ? 'Welcome User' : 'Please Login'}</h1>
        <button onClick={this.toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    )
  }
}

export default LoginApp
