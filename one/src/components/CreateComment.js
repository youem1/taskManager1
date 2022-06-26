import React from 'react';
import './CreateComment.css';
import {useDispatch, useSelector} from 'react-redux';
import {closeCreateCo} from '../actions'
const CreateComment=()=>{
    const isOpen=useSelector(state=>state.pageCC.isOpen);
    const dispatch=useDispatch();
    const close_create_comment_window=()=>{
        dispatch(closeCreateCo());
        
    }
    return(
        <div className={ isOpen ?'allCreateCommentOpen':'allCreateCommentClose' }>
           
             <div className="part1CreateComment">
                <button className='closeButton' onClick={close_create_comment_window}></button>
            </div>

            <div className="part2CreateComment">
                <div className="rightPart2CreateComment">
                    <div  className='comments'></div><br/>
                    <input type="text" className='importFile'/>
                    <button></button>

                    <div className='newSprintPart'>
                    
                    </div>
                    <div className="leftPart2CreateComment">
                    

                    
                    
                </div>
                </div>

            </div>

            <div className="part3CreateComment">
                {/* <button className='createButton'>SEND</button> */}
            </div>
            
        </div>

  
    )
}

export default CreateComment;
