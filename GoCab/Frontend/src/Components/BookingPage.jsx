import React, { useState } from 'react';
import './Bookingpage.css';

function BookingPage() {
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        fromLocation: '',
        toLocation: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    function submitdata(event) {
        event.preventDefault();

        fetch('http://localhost:8080/api/booking/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.text()) 
        .then(data => {
            alert(data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error sending the email.');
        });
    }

    return (
        <div className='maindivbking'>
            <form className='frmtag' onSubmit={submitdata}>
                <label>Name:</label>
                <input 
                    type='text' 
                    name='name' 
                    value={bookingData.name} 
                    onChange={handleChange} 
                    required 
                />
                
                <label>Phone Number:</label>
                <input 
                    type='text' 
                    name='phone' 
                    value={bookingData.phone} 
                    onChange={handleChange} 
                    required 
                    maxLength={10} 
                />
                
                <label>From:</label>
                <input 
                    type="text" 
                    name='fromLocation' 
                    value={bookingData.fromLocation} 
                    onChange={handleChange} 
                    required 
                />
                
                <label>To:</label>
                <input 
                    type="text" 
                    name='toLocation' 
                    value={bookingData.toLocation} 
                    onChange={handleChange} 
                    required 
                />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default BookingPage;