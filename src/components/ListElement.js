import React, { Component } from 'react';
import { ListGroupItem,Button, Form,FormGroup,controlId,Col } from 'react-bootstrap';
class Listelement  extends Component {
   constructor(props)
    {
        super(props);
        console.log("inside the render of list element constructor");
        console.log(this.props);
        this.state ={
          'inputValue' : ''
        }
    
    }
   
  render() {
   console.log("inside the render of list element");
   

   console.log(this.props.list);
    return (   
            <div className="row">
            
             <Form inline>
             <div className="col-sm-1">
             <FormGroup controlId="formInlineName">
                  <ListGroupItem>{this.props.list}</ListGroupItem>            
            </FormGroup>         
            </div>
            <div className="col-sm-1">   
            <FormGroup controlId="formInlineName">
                 <Button bsStyle="danger" onClick={(e) => {this.props.deleteList(this.state.inputValue,e, this.props.dataKey) }}>Delete</Button>
            </FormGroup>
            </div>           
            </Form>
            </div>
           
    );
  }
}

export default Listelement;
