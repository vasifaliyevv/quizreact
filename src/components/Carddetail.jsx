import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import {  useParams } from 'react-router-dom';

function Detail() {
    const [flags, setFlags] = useState([])
    const { id } = useParams()
    function Delete() {
        axios.delete(`https://northwind.vercel.app/api/products/${id}`)
            .then(() => console.log({ status: 'Delete successful' }));
            toast.success('Successfully deleted!')
    }
    useEffect(() => {
        axios
            .get(`https://northwind.vercel.app/api/products/${id}`)
            .then((res) => {
                setFlags(res.data);

            }, 3000);
    }, []);
    return (
      
        <div className='cardinfo'>
            <div className='cardinfotext'>
                <p>Name: {flags.name}</p>
                <p>quantityPerUnit: {flags.quantityPerUnit}</p>
                <p>InStock: {flags.unitsInStock}</p>
            </div>
                <button onClick={Delete}>Delete</button>
            <Toaster/>
        </div>
 
    );
}

export default Detail