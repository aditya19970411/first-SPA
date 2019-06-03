import React from 'react';
import {List} from './List';


export class Home extends React.Component {
  constructor(props) {
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

  onButtonClick() {
    this.setState({
      s: true
    });
  }
  render() {
    return (
        <div>
          <ul>
            <div>
                <input type="text" name="id" onChange={this.handleId}/>
                <button variant="raised" onClick={this.onButtonClick}> See Friends</button>
                {this.state.s ? <List id={this.state.i}/> : null}           
            </div>
            {/*<div>
                <input type="text" name="id" onChange={this.handleId}/>
                <button variant="raised" onClick={this.onButtonClick}> See Friends of Frieds</button>
                {this.state.s ? <List id={this.state.i}/> : null}           
            </div>
            <div>
                <input type="text" name="id" onChange={this.handleId}/>
                <button variant="raised" onClick={this.onButtonClick}> See all users</button>
                {this.state.s ? <List id={this.state.i}/> : null}           
            </div>*/}
          </ul>
        </div>

      );
  }
}