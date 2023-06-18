import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import './styles.css'
import React, { useState } from "react";
import { handleCountIcrement, handleCountDecrement } from "../../feauters/slices/cartsSlices";
const FavoriteProducts = ({datas}) => {
    const {maunt, newArray, newfilterData, count } = useSelector (({carts}) => carts);
    const dispatch = useDispatch ()
    const handleClickCounterIcrement = () => {
        dispatch (handleCountIcrement ())
    }
    const handleClickCounterDecrement = () => {
        dispatch (handleCountDecrement ())
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
                            <div className="same-style-decrement" onClick={handleClickCounterDecrement}>-</div>
                            <p> {count} </p>
                            <div onClick={handleClickCounterIcrement} className="same-style-increment" style={{backgroundColor : '#bec8f4', width : '30px', height : '30px', cursor : 'pointer', borderRadius : '50%'}}> + </div>
                            <div>{price} UAH</div>  
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

export default FavoriteProducts;

