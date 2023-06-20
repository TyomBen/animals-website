import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import './styles.css'
import React, { useState } from "react";
import { handleCountIcrement, handleCountDecrement, deleteCurrentItem } from "../../feauters/slices/cartsSlices";
const Basket = ({datas}) => {
    const {maunt, newArray, count, total } = useSelector (({carts}) => carts);
    const [state, setState] = useState (true)
    const [statepromo, setStatePromo] = useState (false);
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

    return newArray.length ? ( 
        <section>
              <Header />
            <h2 className="products">1. Products - {maunt}</h2>
            <div className="item-description-block">
                <div className="items-container">
                    <span> Photo </span>
                    <span> Description </span>
                    <span> Price </span>
                    <span> Quantity </span>
                    <span> Total </span> 
                    </div>
                    <hr /> 
                    <div className="currentItems">
                    {newArray.map (item => {
                    const {articul, color, imgSrc, price, title} = item;
                        return (
                            <React.Fragment key={articul}>
                                <div className="all-items-container">
                                    <img src= {`https://online-shop-react.vercel.app/${imgSrc}`} className="current-image" />
                            <div className="current-items-contanier">
                               <h3 className="current-title">{title}</h3>
                            <p className="current-color">Color: {color}</p> 
                            <p>Articul: {articul}</p>
                            </div>
                            <p className="current-color">{price} UAH</p>
                            <div className="same-style-decrement" onClick={() => handleClickCounterDecrement (articul)}>-</div>
                            <p> {count} </p>
                            <div onClick={() => handleClickCounterIcrement (articul)} className="same-style-increment" style={{backgroundColor : '#bec8f4', width : '30px', height : '30px', cursor : 'pointer', borderRadius : '50%'}}> + </div>
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
                         
                            </React.Fragment>
                           
                        ) 
                   })}
                  
                    </div>
            </div>
        </section>
    ) : (
        <>
            <Header />
                <h2 className="products">1. Products - {maunt}</h2>
                <p className="no-items-text">No items in cart</p>
        
        </>
    
    )
}

export default Basket;

