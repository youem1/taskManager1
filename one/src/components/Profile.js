import React, { useState } from 'react';
import './profile.css';


const Profile=()=>{
    const [showSaveBtn,setShowSaveBtn]=useState(false);

    const change_name=()=>{
        setShowSaveBtn(true)

    }

    const change_password=()=>{
        setShowSaveBtn(true)

    }

    return(
        <div className="allProfile">
            <div className="headerProfile">
                <div className="imageProfile">

                </div>
                <div className="contentHeaderProfile">

                </div>   
            </div>

            <div className="bodyProfile">
                <div><span className='keyProfile'>name:</span ><span onChange={change_name} className='valueProfile'><input type="text" defaultValue={"yousef"}/></span></div>
                <div><span className='keyProfile' >password:</span><span onChange={change_password} className='valueProfile'><input type="text"  defaultValue={"yousef"}/></span></div>
                <div><span className='keyProfile' >E-mail:</span><span className='valueProfile'> <input type="text" defaultValue={"yousef"}/></span></div>
                <div><span className={'sendChangeProfile '+(showSaveBtn ? 'visible':'hidden')}><button>save</button></span></div>
            </div>


        </div>
    )

}

export default Profile;