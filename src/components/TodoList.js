import React, { Component } from 'react';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import Listelement from './ListElement';




class TodoList  extends Component {
   constructor(props)
    {
        super(props);
        console.log("insied TodoList"); 
        console.log(this.props); 
    }
  render() {
   console.log(Listelement);
   const that = this;
  
    return (     
      <div>
      <h1> <b>Thing to do </b> </h1>
       <ListGroup>{
                this.props.listdata.map(function(list, index) {                  
                   return  <Listelement key={index} deleteList = {that.props.deleteList} dataKey={index} list = {list}> </Listelement>                  
                })
            }
       </ListGroup>
       </div>
    );
  }
}

export default TodoList;
