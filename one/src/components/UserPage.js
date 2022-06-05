import React from 'react';
import MainMenue from './MainMenue';
import ProjectList from './ProjectList';
import CreateProject from './CreateProject';
import TaskList from './TaskList';
import CreaTask from './CreateTask';
import { useSelector,useDispatch } from 'react-redux';
import { useState } from 'react';
import Profile from './Profile';


const UserPage=()=>{

    const getProjectInfo=[{'projectName':'project2','sprints':[{'name':'sprint2','tasks':[{'name':'task1','description':'good','endTime':'2022/9/12'},{'name':'task2','description':'good','endTime':'2022/9/12'}]},{'name':'sprint2','tasks':[{'name':'task3','description':'good','endTime':'2022/9/12'},{'name':'task4','description':'good','endTime':'2022/9/12'}]}],'dateOfCreate':'2022/2/1','role':'admin','endTimeProject':'2022/3/1','members':{'m1':{'name':'yousof','tasks':[{'name':'practice'},{'name':'lessoning'}]},'m2':{'name':'hassan','tasks':[{'name':'working'},{'name':'playing'}]}}},{'projectName':'project1','sprints':[{'name':'sprint1','tasks':[{'name':'task5','description':'good','endTime':'2022/9/12'},{'name':'task6','description':'good','endTime':'2022/9/12'}]}],'dateOfCreate':'2022/2/1','role':'admin','endTimeProject':'2022/3/1','members':{'m1':{'name':'yousof','tasks':[{'name':'practice'},{'name':'lessoning'}]},'m2':{'name':'arash','tasks':[{'name':'working'},{'name':'playing'}]}}}];
    const mystore1=useSelector(state=>state.mystore1);
    const [conten,setContent]=useState(<div></div>);
    const [refresh,setRefresh]=useState(false);
    if(refresh){
        switch(mystore1.page){
            
            case 'project':
                setContent( <ProjectList projects={getProjectInfo}/>);
                break;
            case 'task':
                setContent(<TaskList projects={getProjectInfo} refresh={need_refresh}/>);
                break;
            case 'profile':
                setContent(<Profile projects={getProjectInfo} refresh={need_refresh}/>);

        }

        setRefresh(false)
    }

    const need_refresh=()=>{
        setRefresh(true)
    }
    
    return (
        <div className="allUserPage">
            <MainMenue refresh={need_refresh}/>
            {conten}

            

        </div>
    );
}

export default UserPage;