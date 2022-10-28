import React,{useState} from "react";
import AddUser from "./Comonents/User/AddUser";
import UserList from "./Comonents/User/UserLIst";

function App() {
  const[userList,setUserList]=useState([]);
  
  const addUserHandler=(uName,uAge,uCollege)=>{
   setUserList((prevUserList)=>{
       return [...prevUserList,{name:uName,age:uAge,college:uCollege,id:Math.random().toString()}]
   })
  }

  return (
 <div>
    <AddUser  onAddUser={addUserHandler}/>
    <UserList users={userList}/>
 </div>
  );
}

export default App;
