import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const [bookingDetail, setBookingDetail] = useState({})
    const { id } = useParams()
    const { serviceId } = useParams()
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const ExactIteam = data.find(booking => booking.id == id)
                setBookingDetail(ExactIteam)
            })
    }, [])



    return (
        <div>
            <h1>This is service Detail Page:{serviceId} </h1>

            <img width="75%" src={bookingDetail?.img} alt="" srcset="" />

            <h3 className="text-info">Description : {bookingDetail?.description}</h3>
        </div>
    );
};

export default Booking;