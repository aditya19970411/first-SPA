import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0 };

    this.handleId = this.handleId.bind(this);
    }

    handleId(e){
    this.setState({i: e.target.value});
    }
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
      <ul>
      	<div>
          <input type="text" onChange={this.handleId}/>
  	      <Link to={'./list/'+this.state.i}>
  	      	<button variant="raised">
  	            Friends
  	        </button>
  	      </Link>
        </div>
        <div>
          <input type="text" onChange={this.handleId}/>
          <Link to={'./fof/'+this.state.i}>
            <button variant="raised">
                Friends of Friends
            </button>
          </Link>
        </div>
        <div>
          <Link to={'./Users'}>
            <button variant="raised">
                Users
            </button>
          </Link>
        </div>
       </ul>
    </div>
    );
  }
}
export default Home;