import React from 'react';
import './App.css';
import {connect} from 'react-redux'

function FormData(props) {
  
  return (
    <div>
    <h1>Input values</h1>
    {props.formdata.firstInput}
    <br />
    {props.formdata.secondInput}
    <br />
    {props.formdata.thirdInput}
    </div>
  );
}

const mapStateToProps=(state)=>{
    return{
        formdata:state.form.myForm.values
    }
}

 

export default connect(mapStateToProps)  
(FormData);