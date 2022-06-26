import './ProjectList.css';
import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo';
import { useDispatch ,useSelector} from 'react-redux';
import {closeCreatePr,openCreatePr} from '../actions';
import CreateProject from './CreateProject';
import CreateTask from './CreateTask';
import CreateComment from './CreateComment';
import Invite from './Invite';

const ProjectList=(props)=>{
    const dispatch=useDispatch();

    const open_create_project_window=()=>{
        dispatch(openCreatePr());
    }
    const isOpenCC=useSelector(state=>state.pageCC.isOpen);
    const isOpenI=useSelector(state=>state.pageI.isOpen);
    const [projectInfo,setProjectInfo]=useState({});
   
    const getProjectInfo=props.projects;


    
    return (
        <div className="allProjectList">
            {isOpenI ?(<Invite/>):''}
            {isOpenCC ? (<CreateComment/>):''}
            <CreateProject createProject={props.createProject} refresh={props.refresh}/>
            <CreateTask/>
            <div className="headerProjectList">
               

            </div>
            <div className="bodyProjectList">
                {getProjectInfo.map((item) => {
                    return <ProjectInfo key={item.projectName} project={item}/>
                    
                })}
                <div>
                    <button onClick={open_create_project_window} className="addNewProject">add_new_project</button>
                </div> 

            </div>
 
        </div>
    );

}
export default ProjectList;