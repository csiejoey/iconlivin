import React, { Component } from 'react';
import './Home.sass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>csiejoey</h1>
        </div>
        <div>
          <h4>coachers.sass</h4>
          <li>
            <a>fb</a>
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
