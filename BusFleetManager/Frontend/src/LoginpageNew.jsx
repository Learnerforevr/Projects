import React, { useState } from 'react';
import { Chip, Container, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import AdminLoginForm from './adminloginform';
import StudentLoginForm from './studentloginform';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import './lpmui.css';

// Styled AntSwitch component with primary color
const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 32,
  height: 20,
  padding: 0,
  borderRadius: 50,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 4,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.warning.main, // Use primary color when checked
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 20,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)', // Default background color when not checked
    boxSizing: 'border-box',
    '&.Mui-checked': {
      backgroundColor: theme.palette.primary.main, // Switch track color when checked
    },
  },
}));

function LoginpageNew() {
  // Define state for switch
  const [checked, setChecked] = useState(true);

  // Handle switch toggle
  const handleSwitchChange = (event) => {
    setChecked(event.target.checked);
  };


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center', // Horizontally centers the content
        alignItems: 'center', // Vertically centers the content
        height: '100vh', // Takes full viewport height
      }}
    >
      <Container
        elevation={3}
        maxWidth='md'
        sx={{
          padding: '30px',
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(20px)',
          textAlign: 'center',
          alignContent: 'center',
          borderRadius:5,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column', // Centers elements vertically
          justifyContent: 'center', // Centers elements inside the Paper
        }}
      >
        <h1>Login Page</h1>
        <br/>
        {/* Conditionally rendered Chip */}
        {checked ? (
          <Chip
            icon={<AdminPanelSettingsRoundedIcon />}
            label="Admin"
            sx={{minWidth:'20%'}}
            variant="filled"
            color="warning"
          />
        ) : (
              <Chip
              icon={<SchoolRoundedIcon />}
              label="Student"
              sx={{minWidth:'20%'}}
              variant="outlined"
              color="warning"
              />
        )}

        {/* Switch centered below the Chip */}
        <div style={{ marginTop: '20px' }}>
          <AntSwitch checked={checked} onChange={handleSwitchChange} />
        </div>
        <br/>
        <div style={{ width: '100%' }}> {/* Ensure full width for form elements */}
          {checked ? <AdminLoginForm /> : <StudentLoginForm />}
        </div>
      </Container>
    </div>
  );
}

export default LoginpageNew;
