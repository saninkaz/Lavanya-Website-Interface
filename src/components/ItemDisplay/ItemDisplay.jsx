import React from 'react'
import './ItemDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Item from '../Item/Item'

const ItemDisplay = ({ menu, setMenu }) => {

    const { items_list } = useContext(StoreContext)

    return (
        <div className='item-display'>
            <h2> Here are our top items </h2>
            <div className="item-display-list">
                {items_list.map((item, index) => {
                    if (menu === item.CATEGORY || menu === 'All') {
                        if (item.IMAGE) {
                            return (
                                <Item key={index} code={item.PRODUCT_CODE} description={item.ITEM_DESCRIPTION} type={item.PRODUCT_TYPE} brand={item.BRAND} mrp={item.MRP} image={item.IMAGE} />
                            )
                        }
                    }
                })}
            </div>
        </div>
    )
}

export default ItemDisplay
