import { Typography, Toolbar,Button, AppBar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }} align='left' variant='h3'>StudentApp</Typography>
                <Button><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>
                <Button><Link to={'/add'} style={{textDecoration:'none',color:'white'}}>Add</Link></Button>
            </Toolbar>
        </AppBar>
      
    </div>
  )
}

export default Navbar
