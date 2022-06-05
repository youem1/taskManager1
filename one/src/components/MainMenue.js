import React, { useState } from 'react';
import './MainMenue.css';
import { useDispatch ,useSelector} from 'react-redux';
import {goProjectPage,goTaskPage} from '../actions';
// import './public/project-icon.png'

const MainMenue=(props)=>{
    const dispatch=useDispatch();
    const [openMenue,setOpenMenue]=useState(false);

    const click_project_btn=()=>{
        dispatch(goProjectPage());
        props.refresh();
    }

    const click_task_btn=()=>{
        dispatch(goTaskPage());
        props.refresh();
    }

    const click_main_menue=()=>{
        setOpenMenue(!openMenue);

    }


    return (
        <div className="allMainMenue" >
            <div className="part1MainMenue">
                <div className="button1MainMenue"  ></div>

            </div>
            <div className="part2MainMenue">
            <div className="button2MainMenue" onClick={click_project_btn}></div>
                
            </div>
            <div className="part3MainMenue ">
            <div className="button3MainMenue"onClick={click_task_btn}></div>
                
            </div>
            <div className="part4MainMenue">
            <div className="button4MainMenue"></div>
                
            </div>
            <div className="part5MainMenue">
            <div className="button5MainMenue"></div>
            <div className={"buttonMainMenue "+(openMenue ? 'open':'close')} onClick={click_main_menue}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                
            </div>
            

        </div>
    )
}


export default MainMenue;