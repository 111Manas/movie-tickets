import React from 'react';

function Footer() {
  return (
    <div style={{
              color:'white', 
              backgroundColor:'#151c26',
              }}>
      <div style={{padding:'0 50px'}}>
        <div className='row mt-1' 
              style={{padding:'15px 0 10px '}}>
          <div className='col-md-8 col-sm-6' 
                style={{color:'#919eb5'}}>
            <h3>About Me</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, aut ullam qui expedita dolor ad sed nulla, illum vel ipsam vitae dolores error sapiente, asperiores quo neque cum modi minima!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reiciendis magni atque modi id in quod fuga voluptate quisquam veniam porro, beatae aliquam quo nam quidem consequatur totam iure eaque.</p>

            <ul className='list-inline'>
                <li className='list-inline-item'>
                  <i className='fab fa-facebook'></i>
                </li>
                <li className='list-inline-item'>
                  <i className='fab fa-youtube'></i>
                </li>
                <li className='list-inline-item'>
                  <i className='fab fa-instagram'></i>
                </li>
                <li className='list-inline-item'>
                  <i className='fab fa-twitter'></i>
                </li>
            </ul>
        </div>
        <div className='col-md-4 col-sm-6' 
                style={{color:'#919eb5'}}>
            <h3>Keep In Touch</h3>
            <ul className='list-unstyled'>
              <li>
                <p><strong><i className='fas fa-map-marker-alt'/> Address:</strong> State, City, Country</p>
              </li>
              <li>
              <p><strong><i className='fas fa-phone'/> Phone:</strong> +91 00 00 00 98</p>
              </li>
              <li>
              <p><strong><i className='fas fa-envelope'/> Email:</strong> manaspasayat3@gmail.com</p>
              </li>
            </ul>
        </div>
        <p style={{color:'#919eb5', paddingLeft:'15px'}}>Copyright @ The Movie Tickets 2020.</p>
    </div>
    </div>
  </div>
  )
}

export default Footer;
