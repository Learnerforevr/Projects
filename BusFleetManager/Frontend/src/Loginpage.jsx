import React from 'react'
import "./App.css";
import Adminpage from './Adminpage';
import Studentpage from './Studentpage';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Loginpage() {
    const [redirectAdmin, setRedirectAdmin] = useState(false);
    const [redirectStudent, setRedirectStudent] = useState(false);
    const Navigate=useNavigate();
    function submitadmin()
    {
      var a = document.getElementById('adminusrname').value;
      var b = document.getElementById('adminpassword').value;
  
      var c = "admin";
      var d = "password";
      if(a===c && b===d)
      { 
        setRedirectAdmin(true); 
      }
      else
      {
        document.getElementById('adminusrname').value = "";
        document.getElementById('adminpassword').value = "";
        window.alert("Wrong password");
      }
  
      
    }
  
    function submitstudent()
    {
      var a = document.getElementById('studentusername').value;
      var b = document.getElementById('studentpassword').value;
  
      var c = "studentid";
      var d = "studentpassword";
      if(a===c && b===d)
      {
        setRedirectStudent(true);
      }
      else
      {
        document.getElementById('adminusrname').value = "";
        document.getElementById('adminpassword').value = "";
        window.alert("Wrong password");
      }
    }
  
    if (redirectAdmin) {
      Navigate('/Adminpage');
    }
  
    if (redirectStudent) {
      Navigate('/Studentpage');
    }
  
    return (
      <div className="App">
        <div className="Admindiv">
          <h1 className="Adutab">Admin</h1>
          <hr></hr>
          <br></br>
          <br></br>
          <label className="usrlable">Username:</label>
          <input type="text" className="usrnmeinput" placeholder="Username" id="adminusrname"/>
          <br></br>
          <br></br>
          <label className="usrpasswrd">Password:</label>
          <input type="password" className="usrpasswrdinput" placeholder="Password" id="adminpassword"/>
          <button className="admsub" id="submitadmin" onClick={submitadmin}>Submit</button>
        </div>
  
        <div className="Studentdiv">
        <h1 className="stutab">Student</h1>
          <hr></hr>
          <br></br>
          <br></br>
          <label className="usrlable">Username:</label>
          <input type="text" placeholder="Username" className="usrnmeinput" id="studentusername"/>
          <br></br>
          <br></br>
          <label className="usrpasswrd">Password:</label>
          <input type="password" placeholder="Password" className="usrpasswrdinput" id="studentpassword"/>
          <button className="stusub" id="submitstudent" onClick={submitstudent}>Submit</button>
        </div>
      </div>
    );
}

export default Loginpage