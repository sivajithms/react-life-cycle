import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add';

const Home = () => {
    var [students,setStudents] = useState([]);
    var [ update,setUpdate] = useState(false);
    var [singleValue,setSingleValue] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/see")
        .then((response)=>{
            setStudents(response.data);
            console.log(response.data)
        })
        .catch()
    },[])

    const deleteValue = (id)=>{
        console.log("delete id is:",id);
        axios.delete("http://localhost:8080/delete/"+id)
        .then((response)=>{
            alert("deleted")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
    }
    const updateValue = (val)=>{
        console.log("clicked update button:",val);
        setSingleValue(val)
        setUpdate(true);

    }

    var finalJSX =<div style={{paddingTop:'100px'}}> 
    <TableContainer>
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Grade</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {students.map((val,index)=>{
                  return(
                      <TableRow key={index}>
                          <TableCell>{val.sname}</TableCell>
                          <TableCell>{val.sgrade}</TableCell>
                          <TableCell>
                              <Button onClick={()=>deleteValue(val._id)}>Delete</Button>  
                          </TableCell>
                          <TableCell>
                              <Button onClick={()=>updateValue(val)}>Update</Button>  
                          </TableCell>

                      </TableRow>
                  )
              })}
          </TableBody>
      </Table>
    </TableContainer>
  </div>
  if(update){
    finalJSX = <Add data ={singleValue} method = 'put'/>
  }
  return (
    finalJSX
  )
}

export default Home
