import React, { useEffect, useState } from 'react';
import './CreateProject.css';
import {useDispatch,useSelector} from 'react-redux';
import {closeCreatePr,openCreatePr} from '../actions';


const CreateProject=(props)=>{
    const [sprints,setSprints]=useState([]);
    const [refresh,setRefresh]=useState(false);
    const [sprintText,setSprintText]=useState([]);
    let windowState=false;
    // const [sprintsJSX,setSprintsJSX]=useState(<div>{sprints}</div>);

    const dispatch=useDispatch();
    const select=useSelector(state=>state.windowCP);
    if(select==='open'){
        windowState=true;

    }else{
        windowState=false;


    }

    const click_create_project=()=>{
        // props.createProject('taskManager','2022/11/6',[{name:'state1',tasks:[]}],[]);
    }
    const on_blur_sprint=(event)=>{
        let check=false;
        const fakeSprintText=sprintText;
        for(let i=0;i<sprintText.length;i++){
            if(sprintText[i].id==event.target.id){
                fakeSprintText[i].text=event.target.value;
                check=true;
            }
        }
        if(!check){
        fakeSprintText.push({id:event.target.id,text:event.target.value});
        }

        setSprintText(fakeSprintText)
        console.log('i:'+sprintText);
    }
    let fakeSprint=[];
    const  delete_sprint1=(event)=>{
        
        fakeSprint=sprints;
        fakeSprint= sprints;
        fakeSprint[event.target.value]='';
        setRefresh(!refresh);
        setSprints([]);
        setTimeout(()=>{
            setSprints(fakeSprint);

        },10);

    }


    const  delete_sprint = async(event)=>{
            // setSprints(fakeSprint);
            // setRefresh(!refresh)
    }


    
    const add_new_sprint=()=>{
        


        const fakeSprint=sprints;
        fakeSprint.push(<div><input type='text' key={'sprint'+sprints.length} id={'sprint'+sprints.length} onBlur={on_blur_sprint} /><button className="deleteSprint" onMouseUp={delete_sprint} value={sprints.length} onMouseDown={delete_sprint1}></button></div>)
        setSprints(fakeSprint)

        setRefresh(!refresh);
    }

    const close_create_project_window=()=>{
        dispatch(closeCreatePr())
        

    }
    
    return(
        <div className={windowState ? 'allCreateProjectOpen' : 'allCreateProjectClose'} >

            <div className="part1CreateProject">
                <button className='closeButton' onClick={close_create_project_window}></button>
            </div>

            <div className="part2CreateProject">
                <div className="leftPart2CreateProject">
                    <p>name:</p>
                    <p>description:</p>
                    <p>endTime:</p>
                    <p>sprint:</p>
                </div>

                <div className="rightPart2CreateProject">
                    <input type="text" /><br/>
                    <input type="text" /><br/>
                    <input type="date" />
                    <div className='newSprintPart'>
                    <div>{sprints}</div><button id="O" className='newSprintButton' onClick={add_new_sprint}></button>
                    </div>
                </div>

            </div>

            <div className="part3CreateProject">
                <button className='createButton' onClick={click_create_project}>create</button>
            </div>

        </div>
    );
}

export default CreateProject;