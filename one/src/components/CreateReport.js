import React, { useState } from 'react';
import './CreateReport.css';
import {closeCreateRe} from '../actions'
import {useSelector,useDispatch} from 'react-redux';

const CreateReport=()=>{

    const isOpen=useSelector(state=>state.pageCR.isOpen)

    const dispatch=useDispatch();
    const close_create_project_window=()=>{
        dispatch(closeCreateRe());
        
    }
    return(
        <div className={ isOpen ?'allCreateReportOpen':'allCreateReportClose' }>
             <div className="part1CreateReport">
                <button className='closeButton' onClick={close_create_project_window}></button>
            </div>

            <div className="part2CreateReport">
                <div className="leftPart2CreateReport">
                    
                    <p>report message:</p>
                    <p >import file</p>
                    
                    
                </div>

                <div className="rightPart2CreateReport">
                    <input type="text" className='reportMessage'/><br/>
                    <input type="file" className='importFile'/><br/>

                    <div className='newSprintPart'>
                    
                    </div>
                </div>

            </div>

            <div className="part3CreateReport">
                <button className='createButton'>save</button>
            </div>
            
        </div>
    )
}

export default CreateReport;
