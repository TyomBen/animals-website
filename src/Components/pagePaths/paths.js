import Home from "../Home";
import Nomatch from "../Nomatch";
import Basket from "../Basket";
import FavoriteProducts from "../favoriteProducts";

export const paths = [
    {
        path : '/',
        element : <Home />,
        id : 1,
        name : 'Home'
    },

    {
        path : '/cart',
        element : <Basket />,
        id : 2,
        name : 'Cart'
    },

    {
        path : '/favourites',
        element : <FavoriteProducts />,
        id : 3,
        name : 'Favourites'
    },

    {
        path : '*',
        element : <Nomatch />,
        id : 4
    },

]