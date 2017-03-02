import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoTop from './components/TodoTop';
import TodoList from './components/TodoList'
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      list : []
    }    
    this.updateList = this.updateList.bind(this);
    this.deleteList = this.deleteList.bind(this);
  }
  updateList(inputValue,event)
  {
        this.state.list.push(inputValue);
        this.setState({ 
            list : this.state.list,
        })      
        event.preventDefault();       
  }
  deleteList(inputValue, event, dataKey)
  {
      console.log("Hi inside delete list");
      console.log(dataKey);
      this.state.list.splice(dataKey,1);
      this.setState({
        list:this.state.list,
      })
      event.preventDefault();
  }
  render() {
    console.log(this.state.list);
    return (
      <div>     
      <TodoTop updateList={this.updateList}/>
      <TodoList listdata = {this.state.list} deleteList = {this.deleteList}/>
      </div>
    );
  }
}

export default App;
