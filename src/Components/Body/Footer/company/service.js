import React from 'react'
import './service.css';

export default function Service() {
    return (
        <div className="main"> 
            <div className="Container">
                <div className="services">
                    <h1>customer services</h1>
                </div>
            <div className="row">
                <div className="col-md-3 text-center">
                    <div className="icon">
                        <i className="fa fa-motorcycle"></i>
                    </div>
                    <h3>Your orders</h3>
                    <p>
                        Order done by mistakes?Don't worry go to <a href="/faq" >FAQ.
                        </a>If any further quarry then must check <a href="/help">HELP </a>
                        Or <a href="/contact-us">contact us</a>.
                    </p>
                </div>  
                <div className="col-md-3 text-center">
                    <div className="icon">
                        <i className="fa fa-shopping-basket"></i>
                    </div>
                    <h3>Return & refunds</h3>
                    <p>
                        Dot't happy with products?No probelem return & refund policy is for you.Cancel your order
                         and get your money back.
                    </p>
                </div>  
                <div className="col-md-3 text-center">
                    <div className="icon">
                        <i className="fa fa-ban"></i>
                    </div>
                    <h3>covid19 safety</h3>
                    <p>
                        Here we are for your safe delivery.Our team always try to maintain all safety precautions.Please be with us.
                    </p>
                </div>     
                <div className="col-md-3 text-center">
                    <div className="icon">
                        <i className="fa fa-cog"></i>
                    </div>
                    <h3>account settings</h3>
                    <p>
                        Log in problem?Can i have one more accounts?Forgot password, what should i do now?
                        Dont worry go to <a href="/faq" >FAQ.</a>
                    </p>
                </div>     
            </div>
        </div>
        </div>
    );
}