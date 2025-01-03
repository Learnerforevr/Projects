import React, { useEffect, useState } from 'react';
import './Adminpage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Adminpage() {
  const [busdata, setbusdata] = useState([]);
  const [searchType, setSearchType] = useState('None');
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    loaddata();
  }, []);

  useEffect(() => {
    if (searchType === 'None') {
      loaddata();
      setSearchValue('');  
    }
  }, [searchType]);

  const loaddata = async () => {
    const result = await axios.get("http://localhost:8082/bms/getall");
    setbusdata(result.data);
  };

  const handleSearch = async () => {
    if (searchType === 'None') {
      loaddata();
      return;
    }

    let endpoint = '';
    switch (searchType) {
      case 'Bus number':
        endpoint = `http://localhost:8082/bms/get?busNumber=${searchValue}`;
        break;
      case 'First location':
        endpoint = `http://localhost:8082/bms/getByFirstLocation?location=${searchValue}`;
        break;
      case 'Last location':
        endpoint = `http://localhost:8082/bms/getByLastLocation?location=${searchValue}`;
        break;
      default:
        return;
    }

    try {
      const result = await axios.get(endpoint);
      setbusdata(result.data ? [result.data] : []);
    } catch (error) {
      console.error('Error fetching bus data:', error);
      setbusdata([]);
    }
  };

  const adata = () => {
    navigate('/Adata');
  };

  const updata = () => {
    navigate('/Updatedata');
  };

  const rmdata = () => {
    navigate('/Removedata');
  };

  const getout = () => {
    navigate('/');
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
        <div className='srchmds'>
        <label className='serchlbl'>Search by:</label>
          <select className='serchinpt' value={searchType} onChange={(e) => setSearchType(e.target.value)}>
            <option>None</option>
            <option>Bus number</option>
          </select>
          <input
            className='serchinptpe'
            id='busdetails'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className='sbmitbtn1' onClick={handleSearch}>Submit</button>
        </div>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th className="header-cell">S.no</th>
            <th className="header-cell">Bus number</th>
            <th className="header-cell">Driver name</th>
            <th className="header-cell">Driver number</th>
            <th className="header-cell">Bus location</th>
            <th className="header-cell">Starting point</th>
            <th className="header-cell">Destination</th>
            <th className="header-cell">Route</th>
          </tr>
        </thead>
        <tbody>
          {busdata.map((bus, index) => (
            <tr key={index}>
              <td className="data-cell">{index + 1}</td>
              <td className="data-cell">{bus.busNumber}</td>
              <td className="data-cell">{bus.driverName}</td>
              <td className="data-cell">{bus.driverNumber}</td>
              <td className="data-cell">{bus.busLocation}</td>
              <td className="data-cell">{bus.startingPoint}</td>
              <td className="data-cell">{bus.destination}</td>
              <td className="data-cell">{bus.route}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Adminpage;