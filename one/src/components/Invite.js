import React from 'react'
import { useDispatch } from 'react-redux'
import './Invite.css';
import {closeInvite} from '../actions'

const Invite=()=>{
    const dispatch =useDispatch();
    const click_close_button=()=>{
        dispatch(closeInvite())

    }
    return(
        <div className="allInvite">
            <div className="part1Invite">
                <div className="closePartInvite"><button onClick={click_close_button}></button></div>
                
            </div>
            <div className="part2Invite">
                <p>please enter user name or e-mail</p>
                <span><input type="text" /></span><span><button>INVITE</button></span>
            </div>

        </div>

    )
}


export default Invite;