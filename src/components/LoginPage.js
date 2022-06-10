import React, {useRef} from "react";
import {useState} from "react";
import userData from "../data/users.json"


export default function Login(){
  const LoginUser = useRef();
  const LoginPas = useRef();
  const [Names,setNames] = useState(userData);

  const Submit = e => {
      e.preventDefault();
      const InputName = LoginUser.current.value;
      const InputPas = LoginPas.current.value;
      let loginSeccess = false;
      //let loginIdentity;
      let loginID;
      Names.forEach((myname)=>{
        if(loginSeccess) return;
        loginSeccess = InputName === myname.name && InputPas === myname.password;
        //if(loginSeccess) loginIdentity = myname.identity;
        if(loginSeccess) loginID = myname.id;
      })
      if(loginSeccess){
        LoginUser.current.value='';
        LoginPas.current.value='';

        /*
        if(loginIdentity === "student")
        {
          alert("student");
        }else if(loginIdentity === "teacher")
        {
          alert("teacher");
        }
        */
      }else{
        alert("帳號或密碼錯誤");
      }
    }

    return(
      <form onSubmit={Submit}>
        <div>
          <label><b>Username : </b></label>
          <input ref={LoginUser} type="text" placeholder="Enter Username" name="uname" required></input>
        </div>
        <div>
          <label><b>Password : </b></label>
          <input ref={LoginPas} type="password" placeholder="Enter Password" name="psw" required></input>
        </div>
          
        <button type="submit">Login</button>
      </form>
    );
}