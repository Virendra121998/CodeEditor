import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-monokai"
import './editor.css';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';
import Output from '../Output/Output';
import Input from '../Input/Input';

import * as actionTypes from '../../store/action';

class Editor extends React.Component{
 constructor(props,context){
    super(props,context); 
    this.onChange=this.onChange.bind(this);
 }

state={
      value:'',
      valuejava:'',
      valuepython:'',
      mode:'java',
  }

  onChange=(newValue)=>{
    if(this.state.mode==='java')  
     this.setState({value:newValue,valuejava:newValue});
    else
     this.setState({value:newValue,valuepython:newValue});
     
  }

 onSelect=(event)=>{
       if(event==='java')
        this.setState({value:this.state.valuejava,mode:event});
       else
       this.setState({value:this.state.valuepython,mode:event});
  }
  
  

  render(){
    let InputModal=null;
    if(this.props.modalShow)
     InputModal=<Input mode={this.state.mode} code={this.state.value}/>
    let OutputModal=null;
    if(this.props.showOutput)
      OutputModal=<Output/> 
      return(
      <div className="grid">
       <div className="editor"> 
        <div className="head">
            <label>Select Language</label>
            <select  value={this.state.mode} onChange={(event)=>this.onSelect(event.target.value)}>
                <option>java</option>
                <option>python</option>
            </select>
        </div>
        <AceEditor
        placeholder={"Enter "+this.state.mode+" code"}
        mode={this.state.mode}
        theme="monokai"
        name="blah2"
        onBeforeLoad={this.onLoad}
        onChange={this.onChange}
        fontSize={19}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.state.value}
        height='700px'
        width='800px'
        setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        }}/>
        <Button variant="info" style={{margin:'4px'}} onClick={this.props.onClickListener}>Input/Execute</Button>
        {InputModal}
        </div>
        <div class="output">
        {OutputModal}
        </div>
     </div>  
      );
  }
}

const mapStateToProps= state =>{
    return{
        modalShow:state.showInput,
        showOutput:state.showOutput
    };
  };
  
const mapDispatchToProps=dispatch=>{
    return{
       onClickListener:()=>dispatch(actionTypes.ShowInput())
    }
  };

export default connect(mapStateToProps,mapDispatchToProps)(Editor);