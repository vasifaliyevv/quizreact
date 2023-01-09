import React from 'react'
import { Link } from 'react-router-dom'

function Kart({user}) {
    return (
        <div className="card">
            <div className="card-body">
            <img alt='sekil' src='https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg' width={300} height={300}/>
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Price:{user.unitPrice}$</p>
                <Link to={`/detail/${user.id}`}>Details</Link>
            </div>
        </div>
    )
}

export default Kart