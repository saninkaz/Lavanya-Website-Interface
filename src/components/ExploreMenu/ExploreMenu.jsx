import React, { useState } from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({menu,setMenu}) => {

  return (
    <div className='explore-menu'>
      <h1> Explore our menu</h1>
      <p className='explore-menu-text'>Explore our thoughtfully curated selection of crockery that blends functionality with style. From timeless classics to contemporary designs, our collection caters to all your dining and hosting needs. Whether you’re setting the table for a casual family meal or an elegant dinner party, we have the perfect pieces to complement every occasion. Browse now and bring charm and sophistication to your dining experience!</p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setMenu(m=>m===item.menu_name? "All":item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={menu===item.menu_name? "active": ""} src={item.menu_image} alt="Image" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr/>
    </div>
  )
}

export default ExploreMenu


