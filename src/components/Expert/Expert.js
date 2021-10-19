import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';


const Expert = () => {
    const [abs, setAbs] = useState([]);
    const [allAbs, setAllAbs] = useState([]);
    useEffect(() => {
        fetch(
            'expert.json'
        )
            .then((res) => res.json())
            .then((data) => setAllAbs(data));
    }, [abs]);
    return (
        <div>
            <h2>Our Expert</h2>
            <div className="bodys">
                <div className="row">
                    {allAbs?.map((pd) => (
                        <div className="col-md-4 two">
                            <div className="cart">
                                <div className="cart-details">

                                    <img className="w-100 p-1 fluid " src={pd.img} alt="" />
                                </div>
                                <div className="text-area">
                                    <h4>Name :{pd.id}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer></Footer>
        </div>



    );
};

export default Expert;