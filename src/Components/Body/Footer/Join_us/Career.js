import React from 'react';
import './Career.css';
import img30 from './join_us.png';
import { CardGroup} from 'react-bootstrap'

export default function Career() {
        return (
                <div className="Career">
                        <section class="home" id="home">
                                <div class="image">
                                        <img src={img30} alt=""/>
                                </div>
                                <div class="content">
                                        <h2>OPEN POSITIONS</h2>
                                        <p>We’re looking for people to join the team who are as excited as 
                                        we are to help build the platform that empowers the future generation of 
                                        creators to be successful online.</p>
                                </div>
                        </section>
                        <section class="home" id="home">
                                <div class="content">
                                        <p><b>KARIGORER ADDA</b> is an e-commerce platform leading online shopping,creativity and talents.</p>
                                </div>
                                <div class="content">
                                        <h2>Why work here?</h2>
                                        <p>We want to help artists bring ideas to life and earn.We work to 
                                        support a big community with artists and craftsmen all over West Bengal.Know more about us <a href="#About us">About us</a></p>
                                </div>
                        </section>
                        <div><h1>Where do you want to work??</h1>
                <CardGroup style={{ width: '60rem'}} className="card-columns mx-auto d-flex justify-content-center col-12">

                        <div className="card">
                                <div className="card-body">
                                        <h5 className="card-title">4</h5>
                                        <p>Business developement</p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">3</h5>
                                <p>Human resources & public relation</p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">1</h5>
                                <p>Front-end developer</p>
                                </div>
                        </div>
             </CardGroup>

             <CardGroup style={{ width: '60rem'}} className="card-columns mx-auto d-flex justify-content-center col-12">

                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">2</h5>
                                <p>Finance services</p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">3</h5>
                                <p>Leadership training</p>
                                </div>
                        </div>
                        <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">3</h5>
                                <p>Marketing</p>
                                </div>
                        </div>
                </CardGroup>
                </div>
                </div>
        );
}