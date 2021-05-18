import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Title extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      redirect: false
    };
  }

  logout() {
    sessionStorage.setItem('userData', '');
    sessionStorage.clear();
    this.setState({ redirect: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={'/'} />;
    }

    return (
      <div className="row">
        <a href="/" onClick={this.logout}>
          Logout
        </a>
      </div>
    );
  }
}

export default Title;
