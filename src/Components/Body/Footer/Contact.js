import React from 'react'
import './Contact.css';



const contact = () => 
{
    return ( 
<>
<div className="background">
  <div className="container-x">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
          <div className="screen-header-button close"></div>
          <div className="screen-header-button maximize"></div>
          <div className="screen-header-button minimize"></div>
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact"><i class="fa fa-phone" aria-hidden="true"></i> +91 9876543210 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<i class="fa fa-address-card-o" aria-hidden="true"></i> Kolkata ,WestBengal, India</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME" />
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      Check us also at:&nbsp;
      <div>
      <a href="https://www.facebook.com/ishita.pahari.39" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
      &nbsp;
      <a href="https://www.facebook.com/dig.dasgupta/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      &nbsp;
      <a href="https://www.facebook.com/udayanmisra36" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </div>
    </div>
  </div>
</div>


</>


    )
}

export default contact
