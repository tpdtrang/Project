import React, { Component } from 'react';
class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }
  onChanger = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin(this.state);
  }

  render() {
    return (
      <section className="login-container">
        <div className="container">
          <h2 className="heading-2">LOGIN</h2>
          <form className="p-login" onSubmit={this.onSubmit}>
            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input type="text" placeholder="Username" name="username" required onChange={this.onChanger} value={this.state.username} />
              <label htmlFor="psw"><b>Password</b></label>
              <input type="password" placeholder="Password" name="password" required onChange={this.onChanger} value={this.state.password} />
              <button type="submit">Login</button>

            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default LoginComponent;