import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    margin: 0,
    color: "#fff",
    height: '350px',

    lineHeight: '250px',
    textAlign: 'center',
    background: '#364d79',
};
const Products = () => (
    <>
        <div className='pl-25 w-190 p-5'>
            <Carousel arrows infinite={false} style={contentStyle} className='rounded-4xl'>
                <div style={contentStyle}>
                    <img src="https://www.bigbasket.com/media/uploads/flatpages/mailer-images-aug/30006887_100225_2.jpg" alt="" className='p-7' />
                </div>
                <div className='rounded-4xl'>
                    <img src="https://www.bigbasket.com/media/uploads/flatpages/mailer-images-aug/30006887_100225_2.jpg" alt="" className='p-7' />
                </div>
                <div>
                    {/* <h3 style={contentStyle}>3</h3> */}
                </div>
                <div>
                    {/* <h3 style={contentStyle}>4</h3> */}
                </div>
            </Carousel>
        </div>
    </>
);
export default Products;