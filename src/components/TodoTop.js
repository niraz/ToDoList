import React, { Component } from 'react';
import { Button,Form,FormGroup,FormControl,ControlLabel } from 'react-bootstrap';


class TodoTop extends Component {

 constructor(props) {
   super(props);
   this.state = {
     inputValue: '',
     isDisabled: true,     
   }
  
   this.handleChange = this.handleChange.bind(this);
   this.handleClick = this.handleClick.bind(this);
 }
 handleChange(e) {
   var isDisabled;
   if(e.target.value)
   {
        isDisabled =false;
   }
   else
   {
        isDisabled =true;
   }

   this.setState({
     inputValue: e.target.value,  
     isDisabled : isDisabled,
                 
   });
   e.preventDefault();
 }

 handleClick(e) {
   this.props.updateList(this.state.inputValue,e);
   this.setState({
     inputValue:'',
     isDisabled:true,
   })
 }
  render() {
    return (
      <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>To Do List</ControlLabel>
      {' '}
      <input type="text"  placeholder="Add item"  value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
    </FormGroup>
    {' '}
    <Button type="submit"  disabled={this.state.isDisabled} onClick={this.handleClick} >
      Add
    </Button>
  </Form>
    );
  }
}

export default TodoTop;
