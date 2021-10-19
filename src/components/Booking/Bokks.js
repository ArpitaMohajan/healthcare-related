import React from 'react';
import { useParams } from 'react-router';

const Bokks = ({ bokks }) => {
    const { id } = useParams()

    const { description, img } = bokks;
    return (
        <div className=" pb-3">
            <img src={img} alt="" />


            <p className="px-3">{description}</p>
        </div>
    );
};

export default Bokks;
