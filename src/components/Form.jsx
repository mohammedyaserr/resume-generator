import React, { useState } from "react";

import './form.css'
import { useNavigate } from "react-router-dom";

const Form =()=>{

    const navigate = useNavigate()
    const [profile, setProfile] = useState({
        name:"",
        designation:"",
        number:"",
        Email:"",
        address:"",
        website:"",
        photo:"",

        prfessional:"",

        highersecondary:"",
        hcourse:"",
        hyear:"",
        hcourse:"",
        hgrade:"",
        ugorpg:"",
        ugyear:"",
        ugcourse:"",
        uggrade:"",

        cpostion:"",
        cfrmto:"",
        ccompanyname:"",

        cpostion2:"",
        cfrmto2:"",
        ccompanyname2:"",

        skill1:"",
        skill2:"",
        skill3:"",
        skill4:"",
        skill5:"",

        project1:"",
        project2:""
        
    })
    
    const handleNavigate=()=>{
        navigate("/resume",{state: profile})
    }

    const handleImage=(e)=>{
        const file = e.target.files[0]
    

    const reader = new FileReader()
        reader.onloadend =()=> {
            setProfile ({...profile, photo: reader.result})
        }

        if (file) {
            reader.readAsDataURL(file)
        }

    }
    


    console.log()
        
    
    return(
        <>
        
            <div className="form-main-container">
                
                <div className="form-container">
                    <h2>Form</h2>
                    <div className="form-conents">
                        <div className="resume-line">
                            <h4>Contact Details</h4>
                        </div>
                        
                        <input type="text" value={profile.name} onChange={(e)=> setProfile({...profile, name :e.target.value})} placeholder="Name"  />
                        <input type="text" value={profile.designation} onChange={(e)=> setProfile({...profile, designation: e.target.value})} placeholder="Designation" />
                        <input type="text" value={profile.number} onChange={(e)=> setProfile({...profile, number: e.target .value})} placeholder="Number" />
                        <input type="text" onChange={(e)=> setProfile({...profile, Email: e.target.value})} placeholder="E Mail" />
                        <input type="text" onChange={(e)=> setProfile({...profile, website: e.target.value})} placeholder="Website" />
                        <input type="text" onChange={(e)=> setProfile({...profile, address: e.target.value})} placeholder="Address" />
                        <input type="file" accept="image/*" onChange={handleImage}/>

                        <div className="resume-line">
                            <h4>Professional Summary</h4>
                        </div>

                        <input type="text" value={profile.prfessional} onChange={(e)=> setProfile({...profile, prfessional: e.target.value})} placeholder="Professional Summary" />
                        
                        <div className="resume-line">
                            <h4>Academic details</h4>
                        </div>

                        <input type="text" value={profile.ugorpg} onChange={(e)=> setProfile ({...profile, ugorpg: e.target.value})} placeholder="UG or PG College" />
                        <input type="text" value={profile.ugcourse} onChange={(e)=> setProfile({...profile,ugcourse: e.target.value})} placeholder="Course" />
                        <input type="text" value={profile.ugyear} onChange={(e)=> setProfile ({...profile, ugyear: e.target.value})} placeholder="Year" />
                        <input type="text" value={profile.uggrade} onChange={(e)=> setProfile({...profile,uggrade: e.target.value})} placeholder="grade" />

                        <input type="text" value={profile.highersecondary} onChange={(e)=> setProfile({...profile,highersecondary: e.target.value})} placeholder="Higher Secondary" />
                        <input type="text" value={profile.hcourse} onChange={(e)=> setProfile({...profile,hcourse: e.target.value})} placeholder="Course" />
                        <input type="text" value={profile.hyear} onChange={(e)=> setProfile({...profile,hyear: e.target.value})} placeholder="Year" />
                        <input type="text" value={profile.hgrade} onChange={(e)=> setProfile({...profile,hgrade: e.target.value})} placeholder="grade" />
                        
                        <div className="resume-line">
                            <h4>CAREER HISTORY</h4>
                        </div>

                        <input type="text" value={profile.ccompanyname} onChange={(e)=> setProfile({...profile,ccompanyname: e.target.value})} placeholder="Company Name" />
                        <input type="text" value={profile.cpostion} onChange={(e)=> setProfile({...profile,cpostion: e.target.value})} placeholder="Position" />
                        <input type="text" value={profile.cfrmto} onChange={(e)=> setProfile({...profile,cfrmto: e.target.value})} placeholder="join Year/ End Year" />

                        <input type="text" value={profile.ccompanyname2} onChange={(e)=> setProfile({...profile,ccompanyname2: e.target.value})} placeholder="Company Name" />
                        <input type="text" value={profile.cpostion2} onChange={(e)=> setProfile({...profile,cpostion2: e.target.value})} placeholder="Position" />
                        <input type="text" value={profile.cfrmto2} onChange={(e)=> setProfile({...profile,cfrmto2: e.target.value})} placeholder="join Year/ End Year" />

                        <div className="resume-line">
                            <h4>Core Skills</h4>
                        </div>
                        
                        <input type="text" value={profile.skill1} onChange={(e)=> setProfile ({...profile, skill1: e.target.value})} placeholder="skill 1" />
                        <input type="text" value={profile.skill2} onChange={(e)=> setProfile ({...profile, skill2: e.target.value})} placeholder="skill 2" />
                        <input type="text" value={profile.skill3} onChange={(e)=> setProfile ({...profile, skill3: e.target.value})} placeholder="skill 3" />
                        <input type="text" value={profile.skill4} onChange={(e)=> setProfile ({...profile, skill4: e.target.value})} placeholder="skill 4" />
                        <input type="text" value={profile.skill5} onChange={(e)=> setProfile ({...profile, skill5: e.target.value})} placeholder="skill 5" />
                        

                        <div className="resume-line">
                            <h4>PROJECTS</h4>
                        </div>

                        <input type="text" value={profile.project1} onChange={(e)=> setProfile({...profile, project1: e.target.value})} placeholder="Project 1" />
                        <input type="text" value={profile.project2} onChange={(e)=> setProfile({...profile, project2: e.target.value})} placeholder="Project 2" />                        

    
                    </div>
                    <button onClick={handleNavigate}>Submit</button>
                </div>
            </div>
        </>
    )
}
export default Form