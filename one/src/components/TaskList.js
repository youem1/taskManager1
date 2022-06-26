import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './TaskList.css';
import TaskMaker from './TaskMaker';
import MakeSprint from './MakeSprint';
import './MakeSprint.css';
import { openCreateRe } from '../actions';
import CreateReport from './CreateReport'
// import MakeSprint from './MakeSprint';
// import TaskMaker from './TaskMaker'

const TaskList = (props) => {
        const projects = props.projects;
        const [buttonBG, setButtonBG] = useState(false);
        const openCreteRe = useSelector(state => state.pageCR.isOpen);

        let j = 0;
        console.log(showTasks);
        const [part2TaskMaker, setPart2TaskMaker] = useState( < div className = 'part2TaskList' > < /div>);
            // let sprints=[];
            let i = 0;
            const [showTasks, setShowTasks] = useState([]);
            const click_tasks_button = (event) => {
                let fakarray = [];
                for (let i = 0; i < showTasks.length; i++) {
                    if (event.target.value == i) {
                        fakarray[i] = !showTasks[i];
                    } else {
                        fakarray[i] = showTasks[i];
                    }
                }

                setShowTasks(fakarray);




            }

            const part2_task_maker = (event) => {


                let fakarray = [];
                for (let i = 0; i < projects[event.target.value].sprints.length; i++) {
                    fakarray[i] = false;


                }
                setShowTasks(fakarray);



                setPart2TaskMaker( <
                    div className = { 'part2TaskList' } >

                    <
                    div > < p > { event.target.id }: < /p></div >

                    {
                        projects[event.target.value].sprints.map(itemS => {


                            return ( <
                                MakeSprint name = { itemS.name }
                                tasks = { itemS.tasks }
                                />

                            )


                        })
                    } <
                    /div>
                );
            }


            return ( <
                div className = "allTaskList" > { openCreteRe ? < CreateReport / > : '' } <
                div className = "part1TaskList" > {
                    projects.map((item) => {

                        return (
                            // <span className='buttoneProjectTaskList'>
                            <
                            button key = { item.projectName }
                            id = { item.projectName }
                            value = { i++ }
                            onClick = { part2_task_maker } > { item.projectName } < /button>
                            // </span>
                        );

                    })
                }


                <
                /div> {

                    part2TaskMaker
                }



                <
                /div>
            );

        }

        export default TaskList;