import React from 'react';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './TaskMaker.css';
import {openCreateRe} from '../actions'

const TaskMaker=(props)=>{
    const taskName=props.name;
    const taskDescription=props.description;
    const taskEndTime=props.endTime;
    const [sohowDescription,setShowDescription]=useState(false);
    const dispatch=useDispatch();

    const click_import_button=()=>{
        dispatch(openCreateRe());

    }

    console.log(useSelector(state=>state))
    const click_more_button=()=>{
        if(!sohowDescription){
            setShowDescription(true);
        }else{
            setShowDescription(false);

        }
    }
    return(
        <div className={'allTaskMaker'}>

            <div className='part1TaskMaker'>
                <div className='part11TaskMaker'>
                    <span className=""> {taskName}</span>
                    <span className=""> {taskEndTime}</span>
                    <span><button>next</button></span>
                    <span><button>back</button></span>
                    <span><button onClick={click_import_button}>import</button></span>
                    <span className=''><button onClick={click_more_button}>more</button></span>
                </div>
                
            </div>

            <div className={sohowDescription? 'part2TaskMakerOpen':'part2TaskMakerClose'}>
                <p>{taskDescription}</p>
            </div>

        </div>
    );

}

export default TaskMaker;