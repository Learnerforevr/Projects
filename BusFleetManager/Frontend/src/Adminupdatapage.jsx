import React, { useState } from 'react';
import './Adminadatapage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminupdatapage() {
  const navigate = useNavigate();
  const [busData, setBusData] = useState({
    busNumber: "",
    driverName: "",
    driverNumber: "",
    busLocation: "",
    startingPoint: "",
    destination: "",
    route: ""
  });

  const onInputChange = (e) => {
    setBusData({ ...busData, [e.target.name]: e.target.value });
  };

  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8082/bms/update?busNumber=${busData.busNumber}`, busData);
      if (response.status === 200) {
        alert('Bus data updated successfully');
        navigate('/Adminpage');
      }
    } catch (error) {
      console.error("Error updating bus data:", error);
      alert('Failed to update bus data');
    }
  };

  const adata = () => navigate('/Adminpage');
  const updata = () => navigate('/Updatedata');
  const rmdata = () => navigate('/Removedata');
  const getout = () => navigate('/');

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
                <td><input type='text' name='busNumber' className='inputfrm' value={busData.busNumber} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Driver name: </label></td>
                <td><input type='text' name='driverName' className='inputfrm' value={busData.driverName} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Phone number: </label></td>
                <td><input type='text' name='driverNumber' className='inputfrm' value={busData.driverNumber} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus location: </label></td>
                <td><input type='text' name='busLocation' className='inputfrm' value={busData.busLocation} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus starting point: </label></td>
                <td><input type='text' name='startingPoint' className='inputfrm' value={busData.startingPoint} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus Destination: </label></td>
                <td><input type='text' name='destination' className='inputfrm' value={busData.destination} onChange={onInputChange} required /></td>
              </tr>
              <br></br>
              <tr>
                <td><label className='labelfrm'>Bus Route: </label></td>
                <td><input type='text' name='route' className='inputfrm' value={busData.route} onChange={onInputChange} required /></td>
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

export default Adminupdatapage;