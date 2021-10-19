import React, { useEffect, useState } from 'react';
import Bokks from './Bokks';

const Booking = () => {
    const [booking, setBooking] = useState([])
    const [boks, setBoks] = useState([])
    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking])


    return (
        <div >
            <h2 className="text-primary mt-5">Our services</h2>
            <div className="service-container">
                {
                    booking.map(bokks => <Bokks
                        key={bokks}
                        bokks={bokks}
                    ></Bokks>)

                }
            </div>

        </div>
    );
};

export default Booking;