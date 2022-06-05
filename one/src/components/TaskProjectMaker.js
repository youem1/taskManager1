import React,{useState} from 'react';
import './TaskProjectMaker.css';
import {useDispatch} from 'react-redux';
import {openCreateTa} from '../actions'


const TaskProjectMaker=(props)=>{
    const [showTasks,setShowTasks]=useState(false);

    const dispatch=useDispatch();
    const add_new_task=(member)=>{
        dispatch(openCreateTa());
        // console.log('add'+select);
    }

    const click_tasks=()=>{
        setShowTasks(!showTasks);

    }
    return (
        <div className="allTaskProjectMaker">
            <div key={props.name} className='specialMember'>
                <div className='generalInfo'>
                    <span>{props.name}</span>
                    <span><button  value='tasks' onClick={click_tasks} className="taskBtn"></button></span>
                    <span><button className='deleteMemberBtn'></button></span>
                </div>
                <div className={showTasks ?'taskInfoOpen':'taskInfoClose'}>

                    {
                    props.tasks.map((itemT)=>{

                        return(
                            <div key={itemT.name}>
                                <span>{itemT.name}</span>

                            </div>
                        );})
                    }
                    <button value={props.name} onClick={add_new_task} className="addNewTask">add new task</button>
            </div>
        </div>
    </div>
    );

}

export default TaskProjectMaker;