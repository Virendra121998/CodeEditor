import React from 'react';
import './App.css';
import Editor from './Container/Code Editor/Editor';
import Head from './Component/Header/Header';
class App extends React.Component {
 
  render(){
  return (
    <div>
       <Head/>
       <Editor/>
    </div>
    
  );
 }
}

export default App;
