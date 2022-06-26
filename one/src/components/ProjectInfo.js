import React, { useState } from 'react';
import './ProjectInfo.css';
import {useDispatch,useSelector} from 'react-redux';
import {openCreateTa,openInvite,openCreateCo} from '../actions'
import TaskProjectMaker from './TaskProjectMaker';

const ProjectInfo=(props)=>{
    const project=props.project;
    const members=[];
    const [windowProjectState,setWindowProjectState]=useState('open');
    const [showMembers,setShowMembers]=useState(false);
    const dispatch=useDispatch()

    for(let x in project.members){
        members.push(project.members[x]);
    }


  
    const select=useSelector(state=>state.pageCT);




    const click_members_button=()=>{
        setShowMembers(!showMembers);

    }
    const click_add_new_member=()=>{
        dispatch(openInvite());
        console.log('request for inviting memeber');

    }

 
    const click_comment_button=()=>{
        dispatch(openCreateCo())
    }
    return(
        <div className="allProjectInfo">
            <div className="generalInfoProjectInfo">
                <span>{project.projectName}</span>
   
                <span>{project.role}</span>
                <span>{project.endTimeProject}</span>
                <span><button className='commentBtnP' onClick={click_comment_button}></button ></span>
                <span><button className='deleteProjectBtn'></button></span>

                <span><button  className='members' value='memebers' onClick={click_members_button}></button></span>
            </div>

            <div className={showMembers ? "membersProjectInfoOpen":"membersProjectInfoClose"}>
                {members.map((itemM)=>{
                    return (
                       

                        <TaskProjectMaker name={itemM.name} tasks={itemM.tasks}/>
                    );
                
                })}
                <button className='addNewMember' onClick={click_add_new_member}>add_new_member</button>

            </div>

        </div>
    )
}

export default ProjectInfo;
