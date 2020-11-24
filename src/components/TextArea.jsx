import { TextField } from '@material-ui/core';
import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';

export const TextArea = (props) => (  
  <div className="form-group">
    <label className="form-label">{props.title}</label>
    <textarea
      className="form-control"
      name={props.name}
      rows={props.rows}
      cols = {props.cols}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder} />
  </div>
);

export const LoginTextArea=({Type="PhoneIcon",title="Phone Number",onChange=()=>console.log("Onchanged"),placeholder="Phone Number",value=""})=>(
  <div className="login--text--box">
    <label className="form-label">{title}</label>
    <TextField onChange={onChange}
    placeholder={placeholder}
    variant="outlined"
    value={value}
    />
    <div className="text-area-icons" style={{position:"absolute",}}>
    {/* <Type />*/}
    </div> 
  </div>
)