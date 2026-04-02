import {useState, useEffect} from "react";

const Menu = () =>{
    const [prod, setProd] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/api/show")
        .then((res)=>res.json())
        .then((data)=>setProd(data))
        .catch((err)=>console.log("error fetching data", err))

    })
    
    return (
        <>
        <h1>Menu Page</h1>
        {
            prod.map((prod, index)=>(
                <div key = {index}>

                    <li>{prod.product_name}</li>
                    <li>{prod.product_price}</li>
                    <li>{prod.product_image}</li>
                    <li>{prod.product_description}</li>
                    <br></br>
                </div>
            ))
        }
        </>
    )
}

export default Menu;