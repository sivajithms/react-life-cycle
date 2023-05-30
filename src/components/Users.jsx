import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");

    this.state = {
      planet:'earth'
    }
  }

  componentDidMount() {
    this.setState({planet:'jupiter'});
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProp,nextState){
    console.log('shouldComponentUpdate');
    console.log({nextProp,nextState});
    return true;
  }

  getSnapshotBeforeUpdate(prevProp,prevState){
    console.log('getSnapshotBeforeUpdate');
    console.log({prevProp,prevState});
    return true;
  }

  componentDidUpdate(){
    console.log(this.state);
  }

  componentWillUnmount(){
    console.log('i am component unmount');
  }

  render() {
    console.log("render");

    return (
      <div>
        <h1>{this.props.name}</h1>
        <h1>{this.state.planet}</h1>
      </div>
    );
  }
}

export default Users;


//Hooks -> Enable use of state in ur functional component - useState, useEffect

//props -> properties/params, a data that is passed from one cmponent to another
//LIFE CYCLE METHODS ->
//MOUNT- Component is initially rendered in ur dom
//Constructor, Render, componentDidMount - SIDE EFFECTS

//UPDATE- component is being updated
//UNMOUNT- componentis removed from the dom