import React from 'react';
import {connect} from 'react-redux';
import {Card,Button} from 'react-bootstrap';
import * as actionTypes from '../../store/action';
import './Output.css';

class Output extends React.Component{

    render(){
        return(
          
            <Card style={{marginTop:'50px'}}>
               <Card.Header as="h5">Output</Card.Header>
                 <Card.Body style={{height:'300px',width:'300px'}}>
                   <Card.Title>{this.props.output}</Card.Title>
                    
                 </Card.Body>
               <Card.Footer> 
                     <Button variant="primary" onClick={this.props.onClick}>Close</Button>
               </Card.Footer>   
            </Card>
         
        )
    }
}

const mapStateToProps=state=>{
    return{
        output:state.Output
    }
}

const mapDispatchToProps=dispatch=>{
    return{ 
       onClick:()=>dispatch(actionTypes.CloseOutput())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Output);