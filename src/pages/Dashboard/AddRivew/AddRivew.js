import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './AddRivew.css';
const AddRivew = () => {
    const {user}=useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const userName=user.displayName;
        data.name=userName;
        const userEmail=user.email;
        data.email=userEmail;
    //    console.log(data);
        fetch('http://localhost:5000/reviews',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
           if(result.insertedId){
               alert('Review added successfully')
             reset();

           }
        })
    };
    return (
        <div>
            <h2>add review</h2>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <textarea placeholder="Add Your Review here" {...register("review")} />
            <input className="submit-btn" type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddRivew;