
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://www.drugemporiuminc.com/wp-content/uploads/2019/04/pharmacy-e1554920533243.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p className="text-dark">Pharmacy is the science of preparing and dispensing medical drugs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src='https://th.bing.com/th/id/R.c7ce637e98f700d95f2bb86b9d5e3e22?rik=dYbvGKONia%2fIRQ&pid=ImgRaw&r=0'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p className="text-dark">A pharmacisit is a licenced healthcare professional who specializes in providing information.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src='https://www.ambergristoday.com/sites/default/files/archivedimages/news/2018/02/05/ministry-of-health-over-the-counter-medications.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p className="text-dark">Pharmacist are health professional who dispense medications,advising patients regarding the use..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;