import React from 'react';
import { useState } from 'react';
import './TaskList.css';
import TaskMaker from './TaskMaker';
import MakeSprint from './MakeSprint';
import './MakeSprint.css';
// import MakeSprint from './MakeSprint';
// import TaskMaker from './TaskMaker'

const TaskList=(props)=>{
    const projects=props.projects;
    const [buttonBG,setButtonBG]=useState(false)
    let j=0;
    console.log(showTasks);
    const [part2TaskMaker,setPart2TaskMaker]=useState(<div className='part2TaskList'></div>);
    // let sprints=[];
    let i=0;
    const [showTasks,setShowTasks]=useState([]);
    const click_tasks_button=(event)=>{
        let fakarray=[];
        for(let i=0;i<showTasks.length;i++){
            if(event.target.value==i){
                fakarray[i]=!showTasks[i];
            }else{
                fakarray[i]=showTasks[i];
            }
        }

        setShowTasks(fakarray);
        
        
        

    }
    
    const part2_task_maker=(event)=>{
        setButtonBG(!buttonBG);

        let fakarray=[];
        for(let i=0;i<projects[event.target.value].sprints.length;i++){
            fakarray[i]=false;


        }
        setShowTasks(fakarray);



        setPart2TaskMaker(
        <div className={ 'part2TaskList'} >
            <div><p>{event.target.id}:</p></div>
            
            {             
               projects[event.target.value].sprints.map(itemS=>{
                   
                    
                    return(
                        <MakeSprint name={itemS.name} tasks={itemS.tasks}/>
                        // <div className='sprintTask'>
                        //     <div className='sprintTitle'>
                        //         <span>{itemS.name}</span>
                        //         <span><button onClick={click_tasks_button} value={j++}>tasks</button></span>
                        //     </div>
                        //     <div className={"tasks "+(showTasks[event.target.value] ? "tasksOpen":"tasksClose")}>
                        //         {
                        //             itemS.tasks.map(itemT=>{
                        //                 return(
                        //                     <TaskMaker show={showTasks} name={itemT.name} description={itemT.description} endTime={itemT.endTime}/>
                        //                  )          
                        //             })
                        //         }
                        //     </div>
                        //  </div>
                    )
                    
                   
                })
            }
        </div>
    );
    }
    return(
        <div className="allTaskList">
            <div className="part1TaskList">
                {
                projects.map((item)=>{

                    return (
                        // <span className='buttoneProjectTaskList'>
                            <button key={item.projectName} id={item.projectName} value={i++} onClick={part2_task_maker} >{item.projectName}</button>
                        // </span>
                    );
                    
                })}


            </div>
            {

            part2TaskMaker
            }

 

        </div>
    );

}

export default TaskList;