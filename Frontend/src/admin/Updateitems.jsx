import {useState, useEffect} from "react";

const Updateitems = ()=>{

    const [data, setData] = useState({
        product_name: "",
        product_price: "",
        product_image: "",
        product_description: ""
    })
    const [prodid, setProdid] = useState("");
    const [message, setMessage] = useState("");

    const handleChange =(e)=> {
        const {name, value} = e.target;
        setData({
            ...data,
            [name]:value
        })

    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setMessage("");

        try{
            const response = await fetch(`http://localhost:3000/api/update/${prodid}`,{

                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
    
            })
            const fdata = await response.json();
            if(response.ok){
                setMessage("data updated");
            }
            else{
                setMessage("Data not updated")
            }
            }
            catch(err){
                console.log("server error not updated", err)
            }



    }
    return (
        <>
        <h1>Update Page</h1>

        <form onSubmit = {handleSubmit}>

            Id: <input type = "text"
            placeholder = "enter prod id"
            value = {prodid}
            onChange = {(e)=> setProdid(e.target.value)}
             />
            Name: <input type = "text"
             placeholder = "Update product name"
              value = {data.product_name}
               name = "product_name"
                onChange = {handleChange}/>

            Price: <input type = "number"
             placeholder = "Update product name"
              value = {data.product_price}
               name = "product_price"
                onChange = {handleChange}/>

            Image: <input type = "text"
             placeholder = "Update product name"
              value = {data.product_image} 
              name = "product_image"
               onChange = {handleChange}/>

            Description: <input type = "text"
             placeholder = "Update product name"
              value = {data.product_description}
               name = "product_description"
               onChange = {handleChange}/>

               <button type = "submit">Update</button>

        </form>
        <p>{message}</p>
        </>
    )

}
export default Updateitems;
