import React from 'react';
import { useForm } from "react-hook-form";
import './MakeAdmin.css';
const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://gentle-temple-03216.herokuapp.com/users/admin',{
            method:"PUT",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
           if(result.acknowledged){
               alert('make admin successfully')
               reset();
           }
        })
    };
    return (
        <div>
            <form className="admin-form"  onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="Enter an email" {...register("email")} />                
                <input className="admin-btn" type="submit" value="Make Admin" />
            </form> 
        </div>
    );
};

export default MakeAdmin;