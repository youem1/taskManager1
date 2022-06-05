import React from 'react';
import './profile.css';


const Profile=()=>{

    return(
        <div className="allProfile">
            <div className="headerProfile">
                <div className="imageProfile">

                </div>
                <div className="contentHeaderProfile">

                </div>   
            </div>

            <div className="bodyProfile">
                <div><span className='keyProfile'>name:</span ><span className='valueProfile'><input type="text" defaultValue={"yousef"}/></span></div>
                <div><span className='keyProfile'>password:</span><span className='valueProfile'><input type="text"  defaultValue={"yousef"}/></span></div>
                <div><span className='keyProfile'>E-mail:</span><span className='valueProfile'> <input type="text" defaultValue={"yousef"}/></span></div>
            </div>


        </div>
    )

}

export default Profile;