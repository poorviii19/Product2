import {useState, useEffect} from "react";

const Additems = ()=>{
    const [data, setData] = useState({
        product_name: "",
        product_price: "",
        product_image: "",
        product_description: ""
    })

const [message, setMessage] =  useState("");
const [loading, setLoading] = useState(false);

const handleChange = (e) =>{
    const {name, value} = e.target;
    setData({
        ...data,
        [name]:value
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try{
        const response = await fetch("http://localhost:3000/api/add",{
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const fdata = await response.json();
        if(response.ok){
            setMessage("Product added successfully")
            setData({
                product_name: "",
                product_price: "",
                product_image: "",
                product_description: ""

            })
        }
        else{
            setMessage(fdata.message || "Failed to add roduct");
        }


    }

    catch(err){
        console.log(err);
    }
    finally{
        setLoading(false);
    }

}


    return (
        <>
        <h1>Add Items</h1>
        <form onSubmit = {handleSubmit}>
            Name: <input type = "text"
              name = "product_name"
              placeholder = "Enter product name"
               value = {data.product_name}
                 onChange = {handleChange}/>

            Price: <input type = "number"
             name = "product_price"
              placeholder = "Enter product name"
               value = {data.product_price}
                 onChange = {handleChange}/>

            Image: <input type = "text"
             name = "product_image"
              placeholder = "Enter product name" 
              value = {data.product_image} 
               onChange = {handleChange}/>

            Description: <input type = "text"
             name = "product_description" 
             placeholder = "Enter product name"
              value = {data.product_description}
                onChange = {handleChange}/>

            <button type = "submit" disabled = {loading}>
                {loading ? "Saving...": "Submit"}</button>

        </form>

        <p>{message}</p>
        </>
    )
}
export default Additems;