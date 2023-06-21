import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import './styles.css'
import React, { useState } from "react";
import { handleCountIcrement, handleCountDecrement, deleteCurrentItem } from "../../feauters/slices/cartsSlices";
import CurrentBusketCart from "../CurrentBasketCart";
const Basket = ({datas}) => {
    const { maunt, newArray } = useSelector (({carts}) => carts);
    const [state, setState] = useState (true)
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
                                <CurrentBusketCart articul={articul} color={color} imgSrc={imgSrc} price={price} title={title} />
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

