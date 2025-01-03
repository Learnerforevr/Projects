import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

function Homepage() {
  const navigate = useNavigate();

  function pagechange() {
    navigate('/booking');
  }

  return (
    <>    
      <div className='maindiv'>
        <div className='Hdiv1'>
          <h1 className='Htitle'>GoCab</h1>
        </div>
        <h1 className='Htitle1'>Need a ride?</h1>
        <button onClick={pagechange} className='btn1'>
          BOOK A RIDE
          <FontAwesomeIcon className='arw' icon={faArrowRight} size="sm" style={{ color: "#9acd32" }} />
        </button>
      </div>
      <div className='alrtbox'><h1 className='alrtboxcontent'>Note: Service only available in Andhra Pradesh</h1></div>
    </>
  );
}

export default Homepage;