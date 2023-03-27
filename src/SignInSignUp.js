import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
function SignInSignupWithLocalStorage(){
   const name=useRef()
   const email=useRef()
   const password=useRef()
   const [showHome,setShowHome]=useState(false)
   const [show,setShow]=useState(false)
    const localSignUp=localStorage.getItem("signUp")
    const localEmail=localStorage.getItem("email")
    const localPassword=localStorage.getItem("password")
    const localName=localStorage.getItem("name")
   useEffect(()=>{
    if(localSignUp){
        setShowHome(true)
    }
    if(localEmail){
        setShow(true)
    }
   })
   const handleClick=()=>{
       if(name.current.value&&email.current.value&&password.current.value)
      {
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        localStorage.setItem("signUp",email.current.value)
        alert("Account created successfully!!")
        window.location.reload()
      }
   }

   const handleSignIn=()=>{
    if(email.current.value==localEmail&&password.current.value==localPassword){
        localStorage.setItem("signUp",email.current.value)
        window.location.reload()
    }else{
        alert("Please Enter valid Credential")
    }
   }
    return(
        <div>
            {showHome?<Home/>:
            (show?
                <div className="container">
                        <h1>Hello {localName}</h1>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                </div>
                :
                <div className="container">
                        <div className="input_space">
                            <input placeholder="Name" type='text' ref={name} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Email" type='text' ref={email} />
                        </div>
                        <div className="input_space">
                            <input placeholder="Password" type='password' ref={password} />
                        </div>
                        <button onClick={handleClick}>Sign Up</button>
                </div>)
            }
        </div>
    );
}
export default SignInSignupWithLocalStorage;

// import React, { useEffect } from "react";
// import { useState } from "react";
// import './App.css'



// export default function App(){

//   const[name,setName]=useState("")
//   const[email,setEmail]=useState("")
//   const[pswd,setPswd]=useState("")


// const handle=()=>{
//   localStorage.setItem("name",name)
//   localStorage.setItem("email",email)
//   localStorage.setItem("password",pswd)
// }


//   return(
//     <div className="form">
//       <input type="name" placeholder="Enter your Name" onChange={(e)=>setName(e.target.value)} />
      
//       <input type="email" placeholder="Email or Phone number" onChange={(e)=>setEmail(e.target.value)}/>
      
//       <input type="password" placeholder="Enter your password" onChange={(e)=>setPswd(e.target.value)} />
      

//       <button onClick={handle} >Click Me</button>
//       <div>
//       <div>{localStorage.getItem("name")}</div>
//       <div>{localStorage.getItem("email")}</div>
//       <div>{localStorage.getItem("password")}</div>

//       </div>
//     </div>
    
//   )
// }






//fetch data from API using axios

// import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// In default function in app.js
// export default function App() {

//   const [databs, setdatabs] = useState([]);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         setdatabs(res.data)

//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }, [])
//   return (

//     <div className='App'>
//       <table>
//         <tr className='row'>
//           <th>UserId</th>
//           <th>Id</th>
//           <th>Title</th>
//           <th>Body</th>
//         </tr>
//         {
//           databs.map((item, key) => {
//             return (
//               <tr key={key}>
//                 <td>{item.userId}</td>
//                 <td>{item.id}</td>
//                 <td>{item.title}</td>
//                 <td>{item.body}</td>
//               </tr>
//             )
//           })
//         }
//       </table>

//     </div>
//   );
// }