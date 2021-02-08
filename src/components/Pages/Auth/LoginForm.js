import React, { useState } from 'react'
import {Typography, TextField, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    formItem:{
        marginTop:"25%",
        display:"flex",
        width:"60%",
        flexDirection:"column",
        padding:"3%"
      }
})

export const LoginForm = () => {
    const classes = useStyles()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleOnChangeEmail= (user) =>{
        setEmail(user)
    }
    const handleOnChangePassword= (user) =>{
        setPassword(user)
    }
    return (
        <form className={classes.formItem} >
            <Typography variant="h6" color="initial" style={{marginBottom:"2vh"}} align="center">
            Login Page
            </Typography>
            <TextField id="username" autoComplete="off" label="Email" value={email} onChange={(e)=> handleOnChangeEmail(e.target.value)} />
            <TextField id="password" autoComplete="off" type="password" value={password} label="Password"  onChange={(e)=> handleOnChangePassword(e.target.value)} style={{marginTop:"5vh", marginBottom:"5vh"}} />
            <Button variant="contained" color="primary" type="submit" >
            Login
            </Button>
      </form>
    )
}
