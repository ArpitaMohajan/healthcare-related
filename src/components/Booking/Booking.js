import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const Booking = () => {
    const [bookingDetail, setBookingDetail] = useState({})
    const { id } = useParams()
    const { serviceId } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            // .then(data => {
            //     const ExactIteam = data.filter(booking => booking.id == id)
            //     setBookingDetail(ExactIteam)
            // })
            .then(data => setBookingDetail(data))
    }, [])

    // }

    return (
        <div>
            <h1>This is service Detail Page:{serviceId} </h1>

            {/* <img width="75%" src={bookingDetail?.img} alt="" srcset="" /> */}

            {/* <h3 className="text-info">Description : {bookingDetail?.description}</h3> */}
            <h2>This:{bookingDetail.name}</h2>
            <img width="75%" src={bookingDetail?.img} alt="" srcset="" />
            <p>des:{bookingDetail.description}</p>
        </div>
    );
};

export default Booking;