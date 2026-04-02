import {useState} from "react";

const Deleteitems = ()=>{

    const [prodid, setProdid] = useState([]);
    const [message, setMessage] = useState("");

    const handleDelete = async (e) =>{
        e.preventDefault();
        setMessage("");

        const cmfdelete = window.confirm("are you sure?")
        if(!cmfdelete){
            return;
        }
        try{
            const response =await fetch(`http://localhost:3000/api/delete/${prodid}`,{
                method: "DELETE",
            })
            const data = await response.json()
            if(response.ok){
                setMessage("deleted successfully!")
            }

        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <>
        <h1>Delete product</h1>
        <form onSubmit = {handleDelete}>
            Name: <input type = "text"
            placeholder = "enter id "
            value = {prodid}
            onChange = {(e)=> setProdid(e.target.value)}
           /> 
           <button type = "submit">Delete</button>
        </form>
        </>
    )

}

export default Deleteitems;