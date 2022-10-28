import React,{useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

const AddUser = (props) => {
    const[input,setInput]=useState('')
    const[age,setAge]=useState('')
    const[college,setCollege]=useState('')
    const [error,setError]=useState();

    const inputHandler=(event)=>{
        setInput(event.target.value)
        //console.log(input)
    }
    const ageHandler=(event)=>{
      setAge(event.target.value)
     // console.log(age)
    }
    const collegeHandler=(event)=>{
        setCollege(event.target.value)
    }
    
    const addUserHandler = (event) => {
        event.preventDefault()
        if(input.trim().length===0 || age.trim().length===0 || college.trim().length===0){
            setError({
                title:'Invalid input',
                message:'Please enter valid name, age and college (non empty value).'
            })
        }
        if(age.trim().length <1){
            setError({
                title:'Invalid age',
                message:'Please enter valid age (must be greater than 0).'
            })
        }
       props.onAddUser(input,age,college)
        setInput('')
        setAge('')
        setCollege('')
    }

    const errorHandler=()=>{
        setError(null)
    } 

    return (
        <>
        {error &&<ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={input} onChange={inputHandler}/>

                <label htmlFor="age">Age( in Years)</label>
                <input type="number" id="age" value={age} onChange={ageHandler}/>

                <label htmlFor="college">College Name</label>
                <input type="text" id='college' value={college} onChange={collegeHandler}/>

                <Button type="submit">Add User</Button>
            </form>
        </Card>
        </>
    );
};

export default AddUser;
