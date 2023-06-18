import Cart from "../Cart";
import Header from "../Header";
import { useSelector } from "react-redux"
import './styles.css'
const Home = () => {
    const { initialValue } = useSelector (({carts}) => carts)
    return (
        <div className={initialValue ? 'reverse-style' : ''}>
        <Header />
        <Cart />
        </div>
     
    )
}

export default Home;