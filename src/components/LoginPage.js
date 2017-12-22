import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    document.title = 'login';
  }
  render() {
    return (
      <div>
        <div>
          <h1>
            <Link to="/">login first</Link>
          </h1>
        </div>
        <div>
          <h4>coachers.title = login</h4>
          <li>
            <a>fb</a>
          </li>
          <li>
            <a>ins</a>
          </li>
        </div>
      </div>
    );
  }
}

export default LoginPage;
