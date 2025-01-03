import { Alert, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
function StudentLoginForm() {
    const [redirectStudent, setRedirectStudent] = useState(false);
    const [loginError, setLoginError] = useState(false); // State to track login error
    const Navigate=useNavigate();
function submitstudent()
    {
      var a = document.getElementById('studentusername').value;
      var b = document.getElementById('studentpassword').value;
  
      var c = "studentid";
      var d = "studentpassword";
      if(a===c && b===d)
      {
        setLoginError(false);
        setRedirectStudent(true);
      }
      else
      {
        document.getElementById('studentusername').value = "";
        document.getElementById('studentpassword').value = "";
        setLoginError(true);
      }
    }
    if (redirectStudent) {
        Navigate('/Studentpage');
      }
    return(
            <div>
                <TextField id="studentusername" label="Username" color="warning" variant="outlined" margin="normal" sx={{width:'80%'}} />
                <br/>
                <TextField id="studentpassword" type="password" color="warning" label="Password" variant="outlined" margin="normal" sx={{width:'80%'}} />
                <br/><br/>
                <Button variant="contained" onClick={submitstudent} size="large" color="warning" startIcon={<LoginIcon />} sx={{width:'80%'}}>Log In</Button>
                <br /><br />
                {loginError && ( // Conditionally render the Alert component
                <center>
                    <Alert severity="error" sx={{ width: '77%' }} onClose={() => {setLoginError(false)}}>
                    Invalid Username or Password
                    </Alert>
                </center>
                )}
            </div>
    );
};
export default StudentLoginForm;