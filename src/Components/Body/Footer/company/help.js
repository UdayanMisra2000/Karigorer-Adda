import React from 'react'
import './help.css';

export default function Help() {
    return (
        <div className="help">
            <h1>How can we help you?</h1>
            <div className="contain">
                <div className="Row">
                    <div className="col-md-4">
                        <div className="main_1">
                        <div className="service">
                            <div className="icon">
                                <i className="fa fa-question"/>
                            </div>
                            <h4>How do I track my order?</h4>
                            <p>Go to My Orders in your account to track your package.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="main_1">
                        <div className="service">
                           <div className="icon">
                                <i className="fa fa-question"/>
                            </div>
                            <h4>How do I track my delivery?</h4>
                            <p>You can track the location of your package by choosing the 'Track' option in My Orders section.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="main_1">
                        <div className="service">
                            <div className="icon">
                                <i className="fa fa-question"/>
                            </div>
                            <h4>How do I find my order details?</h4>
                            <p>Go to My Orders in your Flipkart account to find details for all your orders.</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        </div>
    )
}
