import React, { useState } from 'react';
import './MainMenue.css';
import { useDispatch ,useSelector} from 'react-redux';
import {goProjectPage,goTaskPage,goProfilekPage} from '../actions';

// import './public/project-icon.png'

const MainMenue=(props)=>{
    const dispatch=useDispatch();
    const [openMenue,setOpenMenue]=useState({firstRun:true,open:false});
    

    const click_project_btn=()=>{
        // alert("salqam")
        dispatch(goProjectPage());
        props.refresh();
        console.log('request for project page')
    }

    // click_project_btn();

    const click_task_btn=()=>{
        dispatch(goTaskPage());
        props.refresh();
    }

    const click_main_menue=()=>{
        
        setOpenMenue({firstRun:false,open:!openMenue.open});
        
        console.log(openMenue);

        
        

    }

    const click_profile_btn=()=>{
        dispatch(goProfilekPage());
        props.refresh();
    }

    const click_close_btn=()=>{}
   

    return (
        <div className="allMainMenue" style={{}}  >

            <div className="controlerMainMenue"> 
                <div className="nextPart"><button className='buttonClose' onClick={click_main_menue}></button><button  className={'buttonNext '+(!openMenue.firstRun ?(!openMenue.open ? 'closeMainMenue':'openMainMenue'):'')}></button></div>
                <div className="leftPart"><button className={"buttonLeft "+(!openMenue.firstRun ?(!openMenue.open ? 'closeMainMenue':'openMainMenue'):'')}></button></div>
            </div>
             <div className="itemsMainMenue" >
                <div className="part2MainMenue">
                    <button className={"button2MainMenue "+(!openMenue.firstRun ?(!openMenue.open ? 'closeMainMenue':'openMainMenue'):'')} onClick={click_project_btn}></button> 
                </div>
                <div className="part3MainMenue ">
                    <div className={"button3MainMenue "+(!openMenue.firstRun ?(!openMenue.open ? 'closeMainMenue':'openMainMenue'):'')}onClick={click_task_btn}></div>
                </div>
                <div className="part4MainMenue">
                     <div className={"button4MainMenue "+(!openMenue.firstRun ?(!openMenue.open ? 'closeMainMenue':'openMainMenue'):'')} onClick={click_profile_btn}></div>
                </div>
            </div>



            

        </div>
    )
}


export default MainMenue;