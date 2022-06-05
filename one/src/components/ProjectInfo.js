import React, { useState } from 'react';
import './ProjectInfo.css';
import {useDispatch,useSelector} from 'react-redux';
import {openCreateTa} from '../actions'
import TaskProjectMaker from './TaskProjectMaker';

const ProjectInfo=(props)=>{
    const project=props.project;
    const members=[];
    const [windowProjectState,setWindowProjectState]=useState('open');
    const [showMembers,setShowMembers]=useState(false);

    for(let x in project.members){
        members.push(project.members[x]);
    }


  
    const select=useSelector(state=>state.pageCT);




    const click_members_button=()=>{
        setShowMembers(!showMembers);

    }


 

    return(
        <div className="allProjectInfo">
            <div className="generalInfoProjectInfo">
                <span>{project.projectName}</span>
                <span>{project.dateOfCreate}</span>
                <span>{project.role}</span>
                <span>{project.endTimeProject}</span>
                <span><button className='deleteProjectBtn'></button></span>

                <button  className='members' value='memebers' onClick={click_members_button}></button>
            </div>

            <div className={showMembers ? "membersProjectInfoOpen":"membersProjectInfoClose"}>
                {members.map((itemM)=>{
                    return (
                       

                        <TaskProjectMaker name={itemM.name} tasks={itemM.tasks}/>
                    );
                
                })}
                <button className='addNewMember' >add_new_member</button>

            </div>

        </div>
    )
}

export default ProjectInfo;
