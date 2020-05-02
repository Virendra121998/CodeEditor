import React from 'react';
import {Modal,Button} from 'react-bootstrap';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/action';
import './Input.css';

class MyVerticallyCenteredModal extends React.Component {
  
  state={
    input:''
  }
  

  render(){
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Input
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea value={this.state.input} cols="93" style={{height:'180px'}} placeholder="Enter Input if any " onChange={(event)=>this.setState({input:event.target.value})}></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
        <Button onClick={()=>this.props.onExecute(this.props.mode,this.props.code,this.state.input)}>Execute</Button>
      </Modal.Footer>
    </Modal>
  );
 }
}

class Input extends React.Component {
  
render(){
  return (
    <>
      <MyVerticallyCenteredModal
        {...this.props}
        show={this.props.modalShow}
        onHide={this.props.setModalShow}
      />
    </>
  );
 }
} 

const mapStateToProps=state=>{
  return{
     modalShow:state.showInput
  }
}

const mapDispatchToProps=dispatch=>{
  return{
     setModalShow:()=>dispatch(actionTypes.ShowInput()),
     onExecute:(mode,code,input)=>dispatch(actionTypes.Compile(mode,code,input))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Input);