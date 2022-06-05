import React,{useState} from 'react';
import './MakeSprint.css';
import TaskMaker from './TaskMaker'

const MakeSprint=(props)=>{
    const [showTasks,setShowTasks]=useState(false);
    const click_tasks_button=()=>{
        setShowTasks(!showTasks);
    }
    return (
        <div className="allMakeSprint ">

            <div className='sprintTask'>        
                <div className='sprintTitle'>
                    <span>{props.name}</span>
                    <span><button onClick={click_tasks_button}>tasks</button></span>
                </div>
                <div className={showTasks ?'tasksOpen':'tasksClose'}>
                    {props.tasks.map(itemT=>{
                        return(
                            <TaskMaker name={itemT.name} description={itemT.description} endTime={itemT.endTime}/>
                        )
                                   
                    })}
                </div>
            </div>

        </div>
    );

}

export default MakeSprint;