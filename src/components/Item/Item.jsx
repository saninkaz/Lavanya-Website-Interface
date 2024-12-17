import React from 'react'
import './Item.css'
import { useState } from 'react'
import { assets } from '../../assets/assets'

const Item = ({ code, description, type, brand, mrp, category, image }) => {


    const [itemCount, setItemCount] = useState(0)

    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className='item'>
            <div className="item-image-container">
                <img className="item-image" src={image} alt={`IMAGE ${code}`} />
            </div>

            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="item-info" id='item-info'>
                <div className="item-name">
                    <p>{description}</p>
                </div>
                <hr />

                <div className="item-below-info">
                    <p className='item-price'>{`₹${mrp}`}</p>
                    {isHovered && !itemCount ? <img className="add-button" onClick={()=>{setItemCount(i=>i+1)}}src={assets.add_icon_white} /> : null}
                    {isHovered && itemCount ? <div className='item-counter'> 
                            <button onClick={()=>{setItemCount(i=>i-1)}} className="remove-button">-</button>
                            <p>{itemCount}</p>
                            <button onClick={()=>{setItemCount(i=>i+1)}} className="add-button">+</button>
                    </div>: null
                    }
                    <p className='item-type'>{type}</p>
                </div>
                {/* <p className='item-brand'>{brand}</p> */}
            </div>
        </div>
    )
}

export default Item
