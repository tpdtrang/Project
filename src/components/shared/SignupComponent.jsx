import React, { Component } from 'react';

class SignupComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"",
            lastname:"",
            username:"",
            password:""
        }
    }
    onChanger =(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onSignup(this.state);
    }
    render() {
        return (
            <section className="signup-container">
                <div className="container">
                    <h2 className="heading-2">SIGN UP</h2>
                    <form className="p-signup" onSubmit={this.onSubmit}>
                        <div className="container">
                            <label htmlFor="email"><b>FirstName</b></label>
                            <br />
                            <input type="text" placeholder="FirstName" name="firstname" required onChange={this.onChanger} value={this.state.firstname} />
                            <br />
                            <label htmlFor="psw"><b>LastName</b></label>
                            <br />
                            <input type="text" placeholder="LastName" name="lastname" required onChange={this.onChanger} value={this.state.lastname}/>
                            <br />
                            <label htmlFor="email"><b>Email</b></label>
                            <br />
                            <input type="text" placeholder="Username" name="username" required onChange={this.onChanger} value={this.state.username}/>
                            <br />
                            <label htmlFor="psw"><b>Password</b></label>
                            <br />
                            <input type="password" placeholder="Password" name="password" required onChange={this.onChanger} value={this.state.password}/>
                            <br />
                            <label>
                                <input type="checkbox" defaultChecked="checked" name="remember" /> Remember me</label>
                            <div className="btn-signcan">
                                <button type="submit" className="btn btn-danger">Cancel</button>
                                <button type="submit" className="btn btn-primary">Signup</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default SignupComponent;