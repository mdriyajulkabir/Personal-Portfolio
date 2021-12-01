import React from 'react';
import { Carousel } from 'react-bootstrap';
import testmonial from '../../Images/testimonial.bc1380d8.svg'
import comment1 from '../../Images/comment1.jpg'
import comment2 from '../../Images/comment2.jpg'
import comment3 from '../../Images/comment3.png'
const CustomerSay = () => {
    return (
        <div className='my-5 whatido mx-auto'>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <img src={testmonial}  alt="" />
                </div>
                <div className="col-md-5 ps-3 col-sm-12 my-auto">
                    <h4>CUSTOMER FEEDBACK</h4>
                    <h2>What Our Customer Say About Riyajul..</h2>
                    <div className='mt-3 '>
                    <Carousel variant='dark' fade>
  <Carousel.Item className="d-block w-100 h-100">
     <div className='mx-auto my-auto' style={{  width: '75%', height: '50%', alignItems: 'center'}}>
        <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
        <div className='row gap-1 mx-auto'>
            <div className='col-4'>
            <img src={comment1} className='w-75 rounded-pill' alt="" /> 
            </div>
            <div className='col-5'>
                <h5>Michel Been</h5>
                <small>Graphic Designer</small>
            </div>
        </div>
     </div>
     <div>
         <h1> &nbsp;</h1>
     </div>
    
  </Carousel.Item>
  <Carousel.Item className="d-block w-100 h-100">
     <div className='mx-auto my-auto' style={{ width: '75%', height: '50%', alignItems: 'center'}}>
        <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
        <div className='row gap-1 mx-auto'>
            <div className='col-4'>
            <img src={comment2} className='w-75 rounded-pill' alt="" /> 
            </div>
            <div className='col-5'>
                <h5>Mr Been</h5>
                <small>Graphic Designer</small>
            </div>
        </div>
     </div>
     <div>
         <h1> &nbsp;</h1>
     </div>
    
  </Carousel.Item><Carousel.Item className="d-block w-100 h-100">
     <div className='mx-auto my-auto' style={{ width: '75%', height: '50%', alignItems: 'center'}}>
        <p>Tidio has given our clients a quick and easy way to send over thoughts and questions without delay or wait time! No second guessing – just asked and answered quickly in order to make their purchasing decisions easier!</p>
        <div className='row gap-1 mx-auto'>
            <div className='col-4'>
            <img src={comment3} className='w-75 h-75 rounded-pill' alt="" /> 
            </div>
            <div className='col-5'>
                <h5>Andree Rassel</h5>
                <small>Graphic Designer</small>
            </div>
        </div>
     </div>
     <div>
         <h1> &nbsp;</h1>
     </div>
    
  </Carousel.Item>
</Carousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSay;