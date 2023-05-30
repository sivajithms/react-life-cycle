import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = (props) => {
    var [datas,setDatas] = useState(props.data);
    console.log("add page:",props.method)

    const inputHandler = (e)=>{
        const {name,value} = e.target
        setDatas((datas)=>({...datas,[name]:value}));
        console.log(datas)
    }
    const addValues = () => {
      if (props.method === "post") {
        console.log("clicked");
        axios.post("http://localhost:8080/create", datas)
          .then((response) => {
            console.log("data", response.data);
            alert("Successfully added data");
          })
          .catch((err) => console.log(err));
      }
    
      if (props.method === "put") {
        console.log("entered to put method");
        axios.put('http://localhost:8080/edit/'+datas._id,datas)
          .then((response) => {
            alert("updated");
            window.location.reload();
          })
          .catch((err) => console.log(err));
      }
    };
    
  return (
    <div style={{paddingTop:'100px',marginLeft:'40%'}}>
      <TextField label='name' name='sname' value={datas.sname} onChange={inputHandler}/><br/><br/>
      <TextField label='grade' name='sgrade' value={datas.sgrade} onChange={inputHandler}/><br /><br />
      <Button variant='contained' onClick={addValues}>Add</Button>
    </div>
  )

}
export default Add
