import React from 'react';
// import axios from 'axios';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
          email:'',
          password:''
        };
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
   
    signIn(){
       fetch('http://localhost:4000/signin',{
           method:'post',
           headers: {'Content-Type' : 'application/json'},
           body:JSON.stringify({
               email:this.state.email,
               password:this.state.password
           })
       })
        // axios.post('https://localhost:4000/signin', {
        //     email: this.state.email,
        //     password: this.state.password
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });           
    }
    render() {
        return (
            <div className="container">
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <label htmlFor="inputEmail" className="sr-only"> Email address
                </label>
                <input onChange={this.handleEmailChange} type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
                <label htmlFor="inputPassword" className="sr-only"> Password</label>
                <input onChange={this.handlePasswordChange} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <button  onClick={this.signIn} className="btn btn-lg btn-primary btn-block" type="button"> Sign in
                </button>
            </form>
            <br/><br/>
            </div>
        )
    }
}
export default Signin;