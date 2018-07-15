import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import {Redirect} from 'react-router-dom';
import './Welcome.css';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // loginError: false,
      // redirect: false,
      // name:' ',
      // provider:'',
      // email:'',
      // provider_id:'',
      // provider_pic:'',
      // token:''
      loginError: false,
      redirect: false
    };

    this.responseGoogle = this.responseGoogle.bind(this);
    this.signup = this.signup.bind(this);

  }

//     signup(res, type){
//     if (type === 'google' && res.w3.U3) {
//       this.setState({
//         name: res.w3.ig,
//         provider: type,
//         email: res.w3.U3,
//         provider_id: res.El,
//         token: res.Zi.access_token,
//         provider_pic: res.w3.Paa
//       });
//       this.setState({redirect: true});
//     }
// }

signup(res, type) {
  let postData;
  if (type === 'google' && res.w3.U3) {
    postData = {
      name: res.w3.ig,
      provider: type,
      email: res.w3.U3,
      provider_id: res.El,
      token: res.Zi.access_token,
      provider_pic: res.w3.Paa
    };
     console.log(this.state.postData);
  }

  if (postData) {
      sessionStorage.setItem("userData", JSON.stringify(postData));
      this.setState({redirect: true});
  } else {}

}

    responseGoogle(response) {
      console.log("google console");
      console.log(response);
      this.signup(response, 'google');
    }

  render() {
    if (this.state.redirect === true) {
         return <Redirect to='/dashboard' />
       }
    return (
      <div>
          <div className="hero-bg">
             <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Anit</span>
                    <span className="heading-primary--sub-1">Kumar's</span>
                    <span className="heading-primary--sub-2">Publishing  <span className="heading-primary--sub-2__bold">System</span></span>
                </h1>
                {/* <a href="#contact" className="btn btn--white btn--animated"  style={{color:'#333'}}>Get In Touch</a> */}
                <GoogleLogin
                      clientId="Put your Client ID"
                      buttonText="Login with Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseGoogle}
                      className="btn btn--white btn--animated"
                      style={{color:'#333'}}/>
            </div>
        </div>
      
           
      </div>
    );
  }
}

export default Welcome;
