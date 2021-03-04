
import './App.css';

import React, { Component } from 'react';
import User from './component/User';
import UniqueId from 'react-html-id';

class App extends Component {
  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      user : [
        {id:this.nextUniqueId() ,  name:"Sarthak", age:21},
        {id:this.nextUniqueId() , name:"Anmol", age:22},
        {id:this.nextUniqueId() , name:"Anush", age:20},
        {id:this.nextUniqueId() , name:"Deepanar", age:25},
        {id:this.nextUniqueId() , name:"Drishti", age:19},
      ]
    }

    console.log(this.state);
  }
 

  deleteElement = (index, e) =>{
    const delUser = Object.assign([], this.state.user);
    delUser.splice(index, 1);
    this.setState({
      user : delUser
    });

  }

  changeNewName = (id, e) =>{
     const index =  this.state.user.findIndex((userid) => {
       return userid.id === id
     });

     const userobj = Object.assign({}, this.state.user[index]);
     userobj.name = e.target.value;

     const userarr = Object.assign([], this.state.user);
     userarr[index] = userobj;

     this.setState({
       user: userarr
     });
  }
  render() {
    return (
      <div className="App">
       <ul> {
          this.state.user.map((user, index) => {
            return (<User age={user.age} key={user.id} changeName={this.changeNewName.bind(this, user.id)} delEvent={this.deleteElement.bind(this, index)}>{user.name}</User>)
          })
        }
        </ul>
        
      </div>
    );
  }
}


export default App;
