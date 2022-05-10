import React, { useState } from 'react'
import {Box, Button, Container, TextField} from '@mui/material';
import {loginUser} from '../config/MyService';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const LoginHandler = e => {
        e.preventDefault();
        const body = {email, password};
        loginUser(body)
        .then(res=>{
            if(res.data.status_code === 200){
                alert(res.data.msg);
            }
            else{
                alert(res.data.msg);
            }
        })
    } 
    return (
    <Container>
        <h1 style={{fontSize: '35px'}}>Login User</h1>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            m: 5,
            p: 4,
            border: '2px solid black',
            backgroundColor: 'lightgrey',
            color: 'white'
        }}
        noValidate
        autoComplete="off"
        >
            <div>
                <TextField
                    required
                    type='email'
                    id="email"
                    label="Email"
                    placeholder='Enter Email'
                    onChange={e=>setEmail(e.target.value)}
                />
            </div>
            <div>
                <TextField
                    required
                    type='password'
                    id="password"
                    label="Password"
                    placeholder='Enter Password'
                    onChange={e=>setPassword(e.target.value)}
                />
            </div>
            <Button type='submit' variant='contained' sx={{mt: 4}} onClick={LoginHandler}>Register</Button>
        </Box>
    </Container>
    )
}

export default Login