import './styles.css' 
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { handleItemAdd, handleAddFavouriteItem } from '../../feauters/slices/cartsSlices';
import { getCartFromLS } from '../getItemLS';
const CartContent = ({datas, index}) => {
    const { initialValue, newfilterData, newArray} = useSelector (({carts}) => carts);
    const [state, setState] = useState (true);
    const dispatch = useDispatch()     
    const {title, price, articul, color, imgSrc} = datas;
    const handleAddOrCancelClick = () => {
       setState (!state)
    }
    const handleOkClick = () => {
        dispatch (handleItemAdd(articul))
        setState (!state)
    }
      
    const handleAddFavouriteItemAndRouting = () => {
        dispatch (handleAddFavouriteItem(articul))
    }
    return (
               <section>
            <img src = {`https://online-shop-react.vercel.app/${imgSrc}`} className="img" alt="Coming Soon" />
            <div className="data-info-container">
                <button className = "favourite-item" onClick={handleAddFavouriteItemAndRouting}></button>
                <h2 className="title samestyle">{title}</h2>
                 <span className="samestyle info-name-style">Color: {color}</span>
                <div style={{backgroundColor : `${color}`}} className="color-styles"></div>
                <p className="samestyle info-name-style ">Articul: {articul}</p>
                <p className="samestyle info-name-style price-style">{price} UAH</p>
                <div className="button-container">
                <button className="btn" onClick = {handleAddOrCancelClick}>Add to cart</button>
                </div>
            </div> 
            <article className = {state ? 'display-none-or-yep' : ''}>
               <div className="add-carting-window">
                    <div className="add-carting-text-container">
                        <h2 className="add-carting-text">Do you want to add this product to your cart?</h2>  
                    </div>
                    <p className = "p">This item will be available in the cart</p>
                    <div className="action-buttons-style">
                    <button onClick={handleOkClick} className='button'>Ok</button>
                    <button onClick={handleAddOrCancelClick} className='button'>Cancel</button> 
                    </div>
                </div>
                </article>
        </section>
 
    )
}

export default CartContent