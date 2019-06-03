import React, { Component } from 'react';

class Users extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      list: [],
      pgn: 1,
      c: 3
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('/users/'+this.state.pgn+'/'+this.state.c)
    .then(res => res.json())
    .then(list => this.setState({ list }))
  }

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        <h1>List of All Users</h1>
        {/* Check to see if any items are found*/}
        
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map((item) => {
              return(
                <div>
                  <table id = 'Users'>
                    <tbody>
                      <tr>
                        <td>{item.id}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.avatar}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
      </div>
    );
  }
}

export default Users;