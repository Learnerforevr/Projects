import { Alert, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AdminLoginForm() {
    const [redirectAdmin, setRedirectAdmin] = useState(false);
    const [loginError, setLoginError] = useState(false); // State to track login error
    const Navigate = useNavigate();

    useEffect(() => {
        if (redirectAdmin) {
            Navigate('/Adminpage');
        }
    }, [redirectAdmin, Navigate]);

    const submitadmin = () => {
        const a = document.getElementById('adminusrname').value;
        const b = document.getElementById('adminpassword').value;

        const c = "admin";
        const d = "password";

        if (a === c && b === d) {
            setLoginError(false);
            setRedirectAdmin(true);
        } else {
            document.getElementById('adminusrname').value = "";
            document.getElementById('adminpassword').value = "";
            setLoginError(true); // Set error state if login fails
        }
    };

    return (
        <div>
            <TextField id="adminusrname" label="Username" variant="outlined" color="warning" margin="normal" sx={{ width: '80%' }} />
            <br />
            <TextField id="adminpassword" type="password" color="warning" label="Password" variant="outlined" margin="normal" sx={{ width: '80%' }} />
            <br /><br />
            <Button variant="contained" onClick={submitadmin} color="warning" size="large" startIcon={<LoginIcon />} sx={{ width: '80%' }}>Log In</Button>
            <br /><br />
            {loginError && ( // Conditionally render the Alert component
                <center>
                    <Alert severity="error" sx={{ width: '77%' }} color="error" onClose={() => {setLoginError(false)}}>
                    Invalid Username or Password
                    </Alert>
                </center>
            )}
        </div>
    );
}
