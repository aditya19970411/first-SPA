import React from 'react';
//import {List} from './List';
import {Home} from './Home';

export class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      s: false,
      i: 0
      };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.handleId = this.handleId.bind(this);
  }

  handleId(e){
    this.setState({i: e.target.value});
  }

  /*onButtonClick() {
    this.setState({
      s: true
    });
  }*/
  render() {
    return (
        <div>
          <h1>Your World!</h1>
          <ul>
            <div>
                <Home />
            </div>
          </ul>
        </div>

      );
  }
}