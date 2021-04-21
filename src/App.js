import React, {useState} from 'react';
import './App.css';
import {Field, reduxForm} from 'redux-form'
import FormData from './FormData'

function App(props) {
   const {handleSubmit} = props;
   const [showFormData,setShowFormData] = useState(false)
  return (
    <div className="App">
    <form onSubmit={handleSubmit((formValues)=>{
      console.log(formValues)
      setShowFormData(true)
      
       
    })}>
             <Field type="text" name="firstInput" component="input" style={{margin:"10px"}}/>
             <br/>
             <Field type="text" name="secondInput" component="input"
             style={{margin:"10px"}}
             />
             <br/>
             <Field type="text" name="thirdInput" component="input"
            style={{margin:"10px"}}
             />
             <br/>
            <button type="submit">submit</button>
            <br />
            {showFormData?<FormData />:null}
            
    </form>
             
    </div>
  );
}

 

export default  reduxForm({
  form:"myForm"
})(App);