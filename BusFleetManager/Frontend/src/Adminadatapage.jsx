import React, { useState } from 'react';
import './Adminadatapage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminadatapage() {

  const [user, setUser] = useState({
    busNumber: "",
    driverName: "",
    driverNumber: "",
    busLocation: "",
    startingPoint: "",
    destination: "",
    route: ""
  });

  const { busNumber, driverName, driverNumber, busLocation, startingPoint, destination, route } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const Navigate = useNavigate();

  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8082/bms/add",user);
      if (response.status === 200) {
        alert('Bus data added successfully');
        Navigate('/Adminpage');
      }
    } catch (error) {
      console.error('Error in adding bus data:', error);
      alert('Failed to remove bus data');
    }
  };

  const adata = () => {
    Navigate('/Adminpage');
  };

  const updata = () => {
    Navigate('/Updatedata');
  };

  const rmdata = () => {
    Navigate('/Removedata');
  };

  const getout = () => {
    Navigate('/');
  };

  return (
    <>
      <div className='bsfleet'>
        <h1 className='headingBMS'>BUS MANAGEMENT SYSTEM</h1>
        <button className='logoutbtn' onClick={getout}>Logout</button>
      </div>
      <div className='operationsdiv'>
        <button className='postbtn' onClick={adata}>Add</button>
        <button className='updatebtn' onClick={updata}>Update</button>
        <button className='deletebtn' onClick={rmdata}>Remove</button>
      </div>
      <div className='formdiv'>
        <form className='formtag' onSubmit={submitdata}>
          <table>
            <tbody>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus number: </label></td>
                <td><input type='text' name='busNumber' className='inputfrm' value={busNumber} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Driver name: </label></td>
                <td><input type='text' name='driverName' className='inputfrm' value={driverName} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Phone number: </label></td>
                <td><input type='text' name='driverNumber' className='inputfrm' value={driverNumber} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus location: </label></td>
                <td><input type='text' name='busLocation' className='inputfrm' value={busLocation} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus starting point: </label></td>
                <td><input type='text' name='startingPoint' className='inputfrm' value={startingPoint} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus Destination: </label></td>
                <td><input type='text' name='destination' className='inputfrm' value={destination} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus Route: </label></td>
                <td><input type='text' name='route' className='inputfrm' value={route} onChange={onInputChange} required></input></td>
              </tr>
              <br></br>
              <tr>
                <td>
                  <button className='frmbtn' type='submit'>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Adminadatapage;