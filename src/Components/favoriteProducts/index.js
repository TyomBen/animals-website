import { useDispatch, useSelector } from "react-redux";
import './styles.css'
import Header from "../Header";
import { useState } from "react";
import { handleItemAdd, handleAddFavouriteItem,  deleteCurrentFavouriteItem } from "../../feauters/slices/cartsSlices";
const FavoriteProducts = () => {
    const {data, initialValue, mauntFavouriteCategory, newArrayfavouriteCategory  } = useSelector (({carts}) => carts)
    const [state, setState] = useState (true)
    const dispatch = useDispatch ()
    const handleAddOrCancelClick = () => {
        setState (!state)
     }
     const handleOkClick = (articul) => {
        dispatch (handleItemAdd(articul))
        setState (!state)
    }

    const handleAddFavouriteCurrentItemDelete = (articul) => {
        dispatch (deleteCurrentFavouriteItem(articul))
    }
    
    return newArrayfavouriteCategory.length ? (
        <>
        <Header />
        <h2 className = 'favourite-title'>Favorites - {mauntFavouriteCategory} items</h2>
        <section>
        {
            newArrayfavouriteCategory.map (currentItem => {
                const {title, price, articul, color, imgSrc} = currentItem;
                return (
                  <>
                  <div>
                  <img src = {`https://online-shop-react.vercel.app/${imgSrc}`} className="img" alt="Coming Soon" />
                  </div>
                        
                    <div className="data-info-container">
                        <button className = "favourite-item" onClick={() => handleAddFavouriteCurrentItemDelete (articul)}></button>
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
                            <button onClick={() => handleOkClick (articul)} className='button'>Ok</button> 
                            <button onClick={handleAddOrCancelClick} className='button'>Cancel</button> 
                            </div>
                        </div>
                        </article>
                  </>
              
            
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