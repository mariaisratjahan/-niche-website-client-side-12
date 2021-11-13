import React from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users/admin',{
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
            <form  onSubmit={handleSubmit(onSubmit)}>
                <input  placeholder="Enter an email" {...register("email")} />                
                <input type="submit" value="Make Admin" />
            </form> 
        </div>
    );
};

export default MakeAdmin;