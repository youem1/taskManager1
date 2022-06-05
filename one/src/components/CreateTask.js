import React from 'react';
import './CreateTask.css';
import {useDispatch,useSelector} from 'react-redux';
import {closeCreateTa,openCreateTa} from '../actions';


const CreateTask=()=>{
    let windowTaState=false;

    const dispatch=useDispatch();
    const select=useSelector(state=>state.pageCT);
    const select1=useSelector(state=>state.pageCT);
    

    if(select==='open'){
        windowTaState=true;
    }else{
        windowTaState=false;
    }
    // console.log(windowState);
    const close_create_task_window=()=>{
        dispatch(closeCreateTa());
        console.log(select1)
    }
    return(
        <div className={ windowTaState ?'allCreateTaskOpen':'allCreateTaskClose' }>
            <div className="part1CreateTask">
                <button className='closeButton' onClick={close_create_task_window}></button>
            </div>

            <div className="part2CreateTask">
                <div className="leftPart2CreateTask">
                    <p>name:</p>
                    <p>description:</p>
                    <p>end Time:</p>
                    
                </div>

                <div className="rightPart2CreateTask">
                    <input type="text" /><br/>
                    <input type="text" /><br/>
                    <input type="date" />
                    <div className='newSprintPart'>
                    
                    </div>
                </div>

            </div>

            <div className="part3CreateTask">
                <button className='createButton'>create</button>
            </div>

        </div>
    );
}


export default CreateTask;