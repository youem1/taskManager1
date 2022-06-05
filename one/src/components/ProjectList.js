import './ProjectList.css';
import React, { useState } from 'react';
import ProjectInfo from './ProjectInfo';
import { useDispatch } from 'react-redux';
import {closeCreatePr,openCreatePr} from '../actions';
import CreateProject from './CreateProject';
import CreateTask from './CreateTask';

const ProjectList=(props)=>{
    const dispatch=useDispatch();

    const open_create_project_window=()=>{
        dispatch(openCreatePr());
    }

    const [projectInfo,setProjectInfo]=useState({});
   
    const getProjectInfo=props.projects;



    return (
        <div className="allProjectList">
            <CreateProject/>
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