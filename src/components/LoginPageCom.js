import React, {useRef} from "react";
import {useNavigate} from "react-router-dom";
//import { Link } from "react-router-dom";
import userData from "../data/usersData.json"


export default function Login(){
  const LoginUser = useRef();
  const LoginPas = useRef();
  
  let navigate = useNavigate();

  const Submit = e => {
    
      e.preventDefault();
      const InputName = LoginUser.current.value;
      const InputPas = LoginPas.current.value;
      let loginSeccess = false;
      //let loginIdentity;
      let loginID;
      userData.forEach((myname)=>{
        if(loginSeccess) return;
        loginSeccess = InputName === myname.id && InputPas === myname.password;
        //if(loginSeccess) loginIdentity = myname.identity;
        if(loginSeccess) loginID = myname.id;
      })
      if(loginSeccess){
        LoginUser.current.value='';
        LoginPas.current.value='';
    
        // if(loginIdentity === "student")
        // {
        //   alert("student");
        // }else if(loginIdentity === "teacher")
        // {
        //   alert("teacher");
        // }

        navigate('/course',{ state: { id: loginID } });
        console.log(loginID)
      }else{
        alert("帳號或密碼錯誤");
      }
    }

    return(
      <form onSubmit={Submit}>
        <div className="login-background"></div>
        <div className="login-title"></div>
        <div>
          <label className="user-name"><b>Username : </b></label>
          <input className ="input-name" ref={LoginUser} type="text" placeholder="Enter UserID" name="uname" required></input>
        </div>
        <div>
          <label className="password"><b>Password : </b></label>
          <input className ="input-password" ref={LoginPas} type="password" placeholder="Enter Password" name="psw" required></input>
        </div>
        <button className ="button-login" type="submit"></button>
        <div className="people-login"></div>
      </form>
    );
}