

const initialState={
    showInput:false,
    showOutput:false,
    Output:''
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
    case "SHOWINPUT":
     return{
         ...state,
         showInput:!state.showInput,
     };
     case "SHOWOUTPUT":
     return{
         Output:action.result,
         showInput:false,
         showOutput:true
     };
     case "CLOSEOUTPUT":
     return{
         ...state,
         showOutput:false
     };  
  }
  return state
};

export default reducer;