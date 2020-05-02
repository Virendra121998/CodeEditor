import axios from 'axios';


export const ShowInput=()=>{
    return{
        type:"SHOWINPUT"
    }
}

export const ShowOutput=(res)=>{
    return{
        type:"SHOWOUTPUT",
        result:res
    }
}

export const Compile=(mode,code,input)=>{
  return dispatch =>{
      axios.get('http://localhost:5000/compile',{params:{
          mode:input,
          code:code,
          input:input
      }}).then((result)=>{
          dispatch(ShowOutput(result.data.stdout+" "+result.data.stderr))
      }).catch((err)=>{
          dispatch(ShowOutput(err))
      });
  }
}

export const CloseOutput=()=>{
    return{
        type:"CLOSEOUTPUT"
    }
}