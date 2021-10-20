import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const [bookingDetail, setBooking] = useState([])
    const { detailId } = useParams()
    const { serviceId } = useParams()
    useEffect(() => {
        fetch('/details.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    const ExactIteam = bookingDetail.find(booking => booking.id === detailId);


    return (
        <div>
            <h1>This is service Detail Page:{serviceId} </h1>

            <img width="75%" src={ExactIteam?.img} alt="" srcset="" />

            <h3>Description : {ExactIteam?.description}</h3>
        </div>
    );
};

export default Booking;