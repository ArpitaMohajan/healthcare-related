import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';

const About = (props) => {

    const [abos, setAbos] = useState([]);
    const [allAbos, setAllAbos] = useState([]);
    useEffect(() => {
        fetch(
            'about.json'
        )
            .then((res) => res.json())
            .then((data) => setAllAbos(data));
    }, [abos]);
    return (
        <div>
            <h2>About Us</h2>
            <div className="bodys">
                <div className="row">
                    {allAbos?.map((pd) => (
                        <div className="col-md-4 two">
                            {/* <div className="cart"> */}
                            <div className="cart-details">

                                <img className="w-100 p-1 fluid " src={pd.img} alt="" />
                            </div>

                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>




    );
};

export default About;