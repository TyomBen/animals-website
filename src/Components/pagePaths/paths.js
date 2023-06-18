import Home from "../Home";
import Nomatch from "../Nomatch";
import FavoriteProducts from "../favoriteProducts";

export const paths = [
    {
        path : '/',
        element : <Home />,
        id : 1,
    },

    {
        path : '/cart',
        element : <FavoriteProducts />,
        id : 2
    },
    {
        path : '*',
        element : <Nomatch />,
        id : 3
    }
]