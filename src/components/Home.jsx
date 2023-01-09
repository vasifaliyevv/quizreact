import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Kart from './Kart'
import Carousel from './Carousel'
function Home() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://northwind.vercel.app/api/products')
            .then((res) => {setUsers(res.data)
            console.log(res.data);
            })
    }, [])
    return (
        
        
<div style={{background:'url("https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif")',height:'',backgroundRepeat:"no-repeat" ,width:"100%", backgroundSize:"100% "}}>
{

<Carousel/>

}

{
    users.map((user,idx) => {
        return (
            <div>
            
            <Kart key={idx} user={user} /></div>
            
        )
    }
    )
}

       
        </div>
    )
}

export default Home