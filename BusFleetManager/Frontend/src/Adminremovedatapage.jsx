import React, { useState } from 'react';
import './Adminadatapage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminremovedatapage() {
  const [busNumber, setBusNumber] = useState('');
  const navigate = useNavigate();

  const onInputChange = (e) => {
    setBusNumber(e.target.value);
  };

  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8082/bms/delete?busNumber=${busNumber}`);
      if (response.status === 200) {
        alert('Bus data removed successfully');
        navigate('/Adminpage');
      }
    } catch (error) {
      console.error('Error removing bus data:', error);
      alert('Failed to remove bus data');
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
              <tr>
                <td><label className='labelfrm'>Bus number: </label></td>
                <td><input type='text' name='busNumber' className='inputfrm' value={busNumber} onChange={onInputChange} required /></td>
              </tr>
              <tr>
                <td>
                  <button className='frmbtn1' type='submit'>Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </>
  );
}

export default Adminremovedatapage;