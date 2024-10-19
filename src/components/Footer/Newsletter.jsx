import React from 'react';

import SubHeading from '../SubHeading/SubHeading'
import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newsletter' >
    <div className='app__newsletter-heading' >
    <SubHeading title="Newsletter" />
    <h1 className='headtext__cormorant' > Subscribe To Our NewsLetter</h1>
    </div>
    <div className='app__newsletter-input flex__center ' >
    <input type='email'  placeholder='Enter Your Email-Address'  />
    <button className='custom__button' > subscribe </button>
    </div>
  </div>
);

export default Newsletter;
