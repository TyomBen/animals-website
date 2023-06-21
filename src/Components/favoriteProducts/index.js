import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import Header from "../Header";
import React, { useState } from "react";
import { handleItemAdd, handleAddFavouriteItem,  deleteCurrentFavouriteItem } from "../../feauters/slices/cartsSlices";
import CurrentFavouriteCart from "../CurrentFavouriteCart";
const FavoriteProducts = () => {
    const { mauntFavouriteCategory, newArrayfavouriteCategory } = useSelector (({carts}) => carts)

    return newArrayfavouriteCategory.length ? (
        <>
        <Header />
        <h2 className = 'favourite-title'>Favorites - {mauntFavouriteCategory} items</h2>
        <section>
        {
            newArrayfavouriteCategory.map (currentItem => {
                const {title, price, articul, color, imgSrc} = currentItem;
                return (
                  <React.Fragment key={articul}>
                 <CurrentFavouriteCart title = {title} price = {price} articul = {articul} color = {color} imgSrc = {imgSrc} />
                  </React.Fragment>
                )
            })
        }
            </section>
        </>
    ) : (
        <>
        <Header />
         <h2 className = 'favourite-title'>Favorites - {mauntFavouriteCategory} items</h2>
        <p className="no-items-text">No items in favourites</p>
        </>
       
    )
}

export default FavoriteProducts;