import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import { useState } from 'react'
import ItemDisplay from '../../components/ItemDisplay/ItemDisplay'

const Home = () => {

  const [menu,setMenu]=useState("All")

  return (
    <div>
      <Header/>
      <ExploreMenu menu={menu} setMenu={setMenu}/>
      <ItemDisplay menu={menu} setMenu={setMenu}/>
    </div>
  )
}

export default Home
