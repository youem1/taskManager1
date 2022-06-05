import React, { useState } from 'react';
import './LRPage.css';
import {useSelector,useDispatch} from 'react-redux' ;
import {login} from '../actions';
import axios from 'axios';

const LRPage=(props)=>{
    const dispatch=useDispatch();
    const [isCreate,setIsCreate]=useState(false);
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const click_login_btn=()=>{
        dispatch(login());
        
        const body={  "data": {
            "username": name,
            "password": password
          }}
        axios.post('http://localhost:9000/auth/login',body).then((response)=>{
            if(response.code!="ERR_BAD_REQUEST"){
                props.refresh();

            }else{
                console.log(response.code);
            }
        })

        props.refresh();


    }

      async function  click_create_btn () {
        // dispatch(login());
        // props.refresh();
        const body={  "data": {
            "username": name,
            "password": password,
            "email": email,
            "role": "Admin"
          }}
        axios.post('http://localhost:9000/user/createUser',body).then((response)=>{console.log(response)})

    }


    const click_create_account=()=>{
        setIsCreate(!isCreate);
    }


    const change_user_input=(event)=>{
        setName(event.target.value)

    }
    const change_password_input=(event)=>{
        setPassword(event.target.value)
        
    }
    const change_email_input=(event)=>{
        setEmail(event.target.value)
        
    }


    return(
        <div className="allLRPage">
            <div className="backgroundLRPage">

            </div>
            <div className="par1LRPage">
                <div className="part11LRPage">
                    <h1>Get started in minutes</h1>
                    <p>First, let's create your account. Once your account has been created you can choose the billing plan that is right for you and link your account with a server provider.</p>

                </div>
                <div className="part12LRPage">
                    <div className="part121LRP">
                        <span>username</span>
                    </div>
                    <div className="part122LRP">
                        <input type="text" onBlur={change_user_input} />
                    </div>
                    <div className="part123LRPage">
                        <span>password</span>

                    </div>
                    <div className="part124LRPage">
                        <input type="password" className='inputPassword' onBlur={change_password_input}/>

                    </div>
                    <div className={"part125LRPage "+(!isCreate ? 'noShowR':'')}>
                        <span>E-mail</span>

                    </div>
                    <div className={"part126LRPage "+(!isCreate ? 'noShowR':'')}>
                        <input type="text" className='inputEmail' onBlur={change_email_input}/>

                    </div>
                    <div className="lastPart12LRPage">
                        <button onClick={click_login_btn} className={(isCreate ? "noShowL":"showL")} >login</button>
                        <button onClick={click_create_btn} className={(!isCreate ? "noShowR":"showR")}>create</button>
                    </div>

                </div>
                <div className="part13LRPage">
                    <span>{!isCreate?"you are no create acount yet? ":""}</span>
                    <span className={"loginState "+(!isCreate ? "hidden":"visible")}><button onClick={click_create_account}>login</button></span>
                    <span className={isCreate ? "hidden":"visible"}><button onClick={click_create_account}>create account</button></span>
                </div>
            </div>

        </div>
    );
}

export default LRPage;