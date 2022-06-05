import React ,{Component}from 'react';
import './App.css';
import UserPage from './components/UserPage';
import {useSelector,DispatchProp} from 'react-redux';
import LRPage from './components/LRPage';
import { useState } from 'react';




function App() {

    const [refresh,setRefresh]=useState(true);
    const [content,setContent]=useState(<div></div>);
    const login=useSelector(state=>state.mystore1.isLogin);
    const selectAll=useSelector(state=>state.mystore1);
    console.log(selectAll)
    
    const set_refresh=()=>{
        setRefresh(true);
    }
    if(refresh){
        if(login){
            setContent(<UserPage refresh={set_refresh}/>)
        }else{
            setContent(<LRPage refresh={set_refresh}/>)
        }


        setRefresh(false)
    }


    
    const select=useSelector(state=>state.mystore1);
    

    return ( <div>{content}</div>

    );
}

export default App;
