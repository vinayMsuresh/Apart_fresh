import React, { useState } from 'react'
import {Box, Button, Container, TextField} from '@mui/material';
import { requestOtp, forgotChange } from '../config/MyService';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
function ChangePassword() {
    const [number, setNumber] = useState(0);
    const [otp, setOtp] = useState(null);
    const [num, setNum] = useState('');
    const [password, setPassword] = useState(null);
    const [cpassword, setCpassword] = useState(null);
    const navigate = useNavigate();

    const getOtp = (e) => {
        e.preventDefault()
        requestOtp(number)
        .then(res=>{
                setOtp(res.data.otp);
                swal('OTP has been sent to your mobile number','','success')
        })
    }

    const changePassword = (e) => {
        e.preventDefault();
        if(otp.toString() !== num){
            swal("OTP doen't match",'','error')
        }
        else if(password !== cpassword){
            swal("Passwords doen't match",'','error');
        }
        else{
            forgotChange({number, password})
            .then(res=>{
                if(res.data.status_code === 201){
                    swal(res.data.msg,'','success');
                    navigate('/login');
                }
                else{
                    swal(res.data.msg,'','error');
                }
            })
        }
    }
   return (
    <Container>
        <h1 style={{fontSize: '35px'}}>Forgot password</h1>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            mx: 35,
            mt: 5,
            p: 4,
            border: '2px solid black',
            backgroundColor: 'lightgrey',
            color: 'white'
        }}
        noValidate
        autoComplete="off"
        >
            {otp ? <>
                    <div>
                            <TextField
                                required
                                type='number'
                                label='OTP'
                                placeholder='Enter OTP'
                                value={num}
                                onChange={e=>setNum(e.target.value)}
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
                        <div>
                            <TextField
                                required
                                type='password'
                                id="cpassword"
                                label="Confirm Password"
                                placeholder='Confirm password'
                                onChange={e=>setCpassword(e.target.value)}
                            />
                        </div>
                        <Button type='submit' variant='contained' sx={{mt: 4}} onClick={changePassword}>Change Password</Button>
                        </>: <>
                    <div>
                        <TextField
                            required
                            type='tel'
                            id="number"
                            label="number"
                            placeholder='Enter phone number'
                            onChange={e=>setNumber(e.target.value)}
                        />
                    </div>
                    <Button type='submit' variant='contained' sx={{mt: 4}} onClick={getOtp}>Get OTP</Button>
                </>
                }
        </Box>
    </Container>
  )
}

export default ChangePassword