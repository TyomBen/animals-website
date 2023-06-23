import { handleCountIcrement, handleCountDecrement, deleteCurrentItem } from "../../feauters/slices/cartsSlices";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imgURL } from "../../Utills/constants";
const CurrentBusketCart = ({articul, color, imgSrc, price, title}) => {
    const [state, setState] = useState (true);
    const { count, total } = useSelector (({carts}) => carts);
    const dispatch = useDispatch ()
    const handleClickCounterIcrement = (articul) => {
        dispatch (handleCountIcrement (articul))
    }
    const handleClickCounterDecrement = (articul) => {
        dispatch (handleCountDecrement (articul))
    }

    const handleAddOrCancelClick = () => {
        setState (!state)
     }

     const handleDeleteCurrentItem = (articul) => {
        dispatch (deleteCurrentItem(articul))
        setState (!state)
     }
     return (
        
    <div className="all-items-container">
    <img src= {`${imgURL}/${imgSrc}`} 
    className="current-image" />
    <div className="current-items-contanier">
    <h3 className="current-title">{title}</h3>
    <p className="current-color">Color: {color}</p> 
    <p>Articul: {articul}</p>
    </div>
    <p className="current-color">{price} UAH</p>
    <div className="same-style-decrement" onClick={() => handleClickCounterDecrement (articul)}>-</div>
    <p> {count} </p>
    <div onClick={() => handleClickCounterIcrement (articul)} className="same-style-increment" 
    style={{backgroundColor : '#bec8f4', width : '30px', height : '30px', cursor : 'pointer', borderRadius : '50%'}}> + </div>
    <div>{total} UAH</div>  
    <button onClick={handleAddOrCancelClick} className="delete-btn">Clear</button>
    <article className = {state ? 'display-none-or-yep' : ''}>
    <div className="add-carting-window">
    <div className="add-carting-text-container">
    <h2 className="add-carting-text">Do you want to add this product to your cart?</h2>  
    </div>
    <p className = "p">This item will be available in the cart</p>
    <div className="action-buttons-style">
    <button onClick={() => handleDeleteCurrentItem(articul)} className='button'>Ok</button> 
    <button onClick={handleAddOrCancelClick} className='button'>Cancel</button> 
    </div>
    </div>
    </article>
    </div>
     )
}

export default CurrentBusketCart;