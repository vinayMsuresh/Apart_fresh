import React, { useState } from 'react'
import {Box, Button, Container, TextField} from '@mui/material';
import { registerUser } from '../config/MyService';
import { useNavigate } from 'react-router-dom';
function Register() {
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(null);
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [pincode, setPincode] = useState(null);
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        let registered_data = {firstname, lastname, email, phone, address1, address2, pincode, password};
        registerUser(registered_data)
        .then(res=>{
            if(res.status_code === 201){
                alert(res.data.msg);
                navigate('/login');
            }
            else{
                alert('Email address already registered!!');
                navigate('/login');
            }
        })
    }
  return (
      <Container>
          <h1 style={{fontSize: '35px'}}>Register User</h1>
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
                    id="fname"
                    label="Firstname"
                    placeholder='Enter First name'
                    onChange={e=>setFname(e.target.value)}
                />
                <TextField
                    required
                    id="lname"
                    label="Lastname"
                    placeholder='Enter Last name'
                    onChange={e=>setLname(e.target.value)}
                />

            </div>
            <div>
                <TextField
                    type='email'
                    required
                    id="email"
                    label="Email"
                    placeholder='Enter Email'
                    onChange={e=>setEmail(e.target.value)}
                />
                <TextField
                    required
                    type='tel'
                    id="phone"
                    label="Phone number"
                    placeholder='Enter Phone number'
                    onChange={e=>setPhone(e.target.value)}
                />
            </div>

            <div>
                <TextField
                    required
                    id="address1"
                    label="Address line 1"
                    placeholder='Enter Address line 1'
                    onChange={e=>setAddress1(e.target.value)}
                />
                <TextField
                    id="address2"
                    label="Address line 2"
                    placeholder='Enter Address Line 2'
                    onChange={e=>setAddress2(e.target.value)}
                />
                <TextField
                    required
                    id="pincode"
                    label="Pincode"
                    placeholder='Enter Pincode'
                    onChange={e=>setPincode(e.target.value)}
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
                <TextField
                    required
                    type='password'
                    id="cpassword"
                    label="Confirm Password"
                    placeholder='Enter Confirm password'
                    onChange={e=>setCpassword(e.target.value)}
                />
            </div>

            <Button type='submit' variant='contained' sx={{mt: 4}} onClick={submitHandler}>Register</Button>
            <p>
                Already registered <Button size='sm' href='/login'> login here</Button>
            </p>
        </Box>
    </Container>
  )
}

export default Register