import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      {name: "Evgenia", age: "36"},
      {name: "Johannes", age: "51"},
      {name: "Maria", age: "38"},
    ],
    otherState: "some other value",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: "36"},
        {name: "Johannes", age: "51"},
        {name: "Maria", age: "36"},
  
      ]
    }
    )
  }

  nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: "Evgenia", age: "36"},
          {name: event.target.value, age: "51"},
          {name: "Maria", age: "38"},
    
        ]
      }
      )
  }

  togglePersonsHandler = () => {
const doesShow = this.state.showPersons;
this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor:"white",
      font:"inherit",
      border: "1px solid blue",
      padding:"8px"
    };

    return (
      <div className = "App">
       <h1>Hi, I am React App!</h1>
       <button 
       style={style}
       onClick={this.togglePersonsHandler}>Toggle Persons</button>
       { this.state.showPersons ? 
         <div>
       <Person 
       name= {this.state.persons[0].name} 
       age = {this.state.persons[0].age}/>
       <Person 
       name= {this.state.persons[1].name} 
       age = {this.state.persons[1].age}
       myclick = {this.switchNameHandler.bind(this,"EUGENE")}
       mychange = {this.nameChangedHandler}>My Hobbies: Racing </Person>
       <Person 
       name= {this.state.persons[2].name} 
       age = {this.state.persons[2].age}/>
       </div> : null
       }
      </div>

    );
  }
}

export default App;


