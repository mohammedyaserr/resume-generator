import React from "react";
// ---css--
import './Resume-home.css'
// ---head_img---
import img from '../assets/resume-img.png'
// ---logo_imges---
import logo1 from '../assets/logo (1).png'
import logo2 from '../assets/logo (2).png'
import logo3 from '../assets/logo (3).png'
import logo4 from '../assets/logo (4).png'


import { useLocation } from "react-router-dom";

const Resume = () => {

    const location = useLocation()

    const data = location.state

    console.log(data,"API RES");
    

    return (
        <>
            <div className="resume-main-container">

                <div className="resume-container">
                    <div className="resume-inner-div">
                        <div className="resume-head-sec">
                            <div className="resume-img">
                                <img src={data.photo} alt="" />
                            </div>
                            <div className="resume-name-sec">
                                <h1>{data.name}</h1>
                                <p>{data.designation}</p>
                                <div className="resume-contact-logos">

                                    <div className="resume-contact-sec">
                                        <img src={logo3} alt="" />
                                        <p>{data.number}</p>
                                    </div>
                                    <div className="resume-contact-sec">
                                        <img src={logo4} alt="" />
                                        <p>{data.Email}</p>
                                    </div>
                                    <div className="resume-contact-sec">
                                        <img src={logo2} alt="" />
                                        <p>{data.website}</p>
                                    </div>
                                    <div className="resume-contact-sec">
                                        <img src={logo1} alt="" />
                                        <p>{data.address}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="resume-line">
                            <h4>PROFESSIONAL SUMMARY</h4>
                        </div>

                        <div className="resume-para">
                            <p>{data.prfessional}</p>
                        </div>

                        <div className="resume-line">
                            <h4>ACADEMIC BACKGROUND</h4>
                        </div>

                        <div className="container-academics">
                            <div className="academics-main">

                                <div className="academics-headign">
                                    <h4>{data.ugorpg}</h4>
                                    <h4>{data.ugyear}</h4>
                                </div>

                                <div className="academics-headign">
                                    <p>{data.ugcourse}</p>
                                    <p>{data.uggrade}</p>
                                </div>

                                <div className="academics-headign">
                                    <h4>{data.highersecondary}</h4>
                                    <h4>{data.hyear}</h4>
                                </div>

                                <div className="academics-headign">
                                    <p>{data.hcourse}</p>
                                    <p>{data.hgrade}</p>
                                </div>

                                
                            </div>

                            
                        </div>

                        <div className="resume-line">
                            <h4>CAREER HISTORY</h4>
                        </div>

                        <div className="container-academics">
                            <div className="academics-main">
                                <div className="academics-headign">
                                    <h4>{data.cpostion}</h4>
                                    <p>{data.cfrmto}</p>
                                </div>

                                <div className="academics-headign">
                                    <p>{data.ccompanyname}</p>

                                </div>

                                <div className="academics-headign">
                                    <h4>{data.cpostion2}</h4>
                                    <p>{data.cfrmto2}</p>
                                </div>

                                <div className="academics-headign">
                                    <p>{data.ccompanyname2}</p>

                                </div>

                                
                            </div>
                        </div>


                        
                        


                        <div className="container-core">
                            <div className="skill-main">
                                <div className="resume-line">
                                    <h4>CORE SKILLS</h4>
                                </div>

                                    <ul>
                                        <li>{data.skill1}</li>
                                        <li>{data.skill2}</li>
                                        <li>{data.skill3}</li>
                                        <li>{data.skill4}</li>
                                        <li>{data.skill5}</li>

                                    </ul>

                                
                            </div>

                            

                        </div>

                        <div className="container-core">
                            <div className="skill-main">
                                <div className="resume-line">
                                    <h4>Projects</h4>
                                </div>

                                    <ul>
                                        <li>{data.project1}</li>
                                        <li>{data.project2}</li>

                                    </ul>

                                
                            </div>

                            

                        </div>


                    </div>
                </div>
                
            </div>

        </>
    )
}
export default Resume