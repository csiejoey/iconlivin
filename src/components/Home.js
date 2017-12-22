import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HM from './Helmet';
import './Home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {
    // document.title = 'Home';
  }
  render() {
    return (
      <div>
        {HM('home')}
        <div>
          <h1>
            <Link to="/">csiejoey</Link>
          </h1>
        </div>
        <div>
          <h4>coachers.sass</h4>
          <li>
            <Link to="/login">fb</Link>
          </li>
          <li>
            <a>ins</a>
          </li>
          <li>
            <span className="error">error</span>
          </li>
          <li>
            <span className="warning">warning</span>
          </li>
        </div>
      </div>
    );
  }
}

export default Home;
