import React from 'react';
import { useForm } from "react-hook-form";
import './AddProducts.css';
const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://gentle-temple-03216.herokuapp.com/products',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=>{
            if(result.insertedId){
                alert('product added successfully');
                reset()
            }
            console.log(result);
        })
    };
    return (
        <div>
            <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("img")} placeholder="Image Link" />
                <input {...register("pname")} placeholder="product name" />
                <input type="number" {...register("price")} placeholder="price" />
                <textarea {...register("description")} placeholder="short description" />


                <input className="form-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;