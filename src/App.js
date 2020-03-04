import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Zenya", age: 36},
      {name: "Johannes", age: 51},
      {name: "Maria", age: 38}
    ]
  }

  switchNameHandler = (newName) => {
// console.log("was clicked!");
this.setState( {
  persons: [
    {name: newName, age: 36},
    {name: "Johannes", age: 51},
    {name: "Maria", age: 37}
  ]
})
}

nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name: "Zenya", age: 36},
      {name: event.target.value, age: 51},
      {name: "Maria", age: 38}
    ]
  })

}

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler("Zenyaaaaaaaaa")}>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age}/>
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, "Zenya!")}
        changed= {this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement("div", {className: "App"}, React.createElement("h1", null, "hello, I am the h1!"));
  }
}

export default App;
