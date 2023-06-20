import Home from "../Home";
import Nomatch from "../Nomatch";
import Basket from "../Basket";
import FavoriteProducts from "../favoriteProducts";

export const paths = [
    {
        path : '/',
        element : <Home />,
        id : 1,
    },

    {
        path : '/cart',
        element : <Basket />,
        id : 2
    },

    {
        path : '*',
        element : <Nomatch />,
        id : 3
    },

    {
        path : '/favourites',
        element : <FavoriteProducts />,
        id : 4
    }
]