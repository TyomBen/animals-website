import './styles.css';
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <header>
        <nav className = "nav">
            <Link to = "/">
                <img src = "../images/image.png" alt = "eror" className = "header-logo"/>
            </Link>
            <div className='header-links-container'>
              <Link to = '/'> Home </Link>
              <Link to = '/cart'>Cart</Link>
              <Link to = '/favourites'>Favourites</Link>
            </div>
          
        </nav>
      </header>
    )
}

export default Header;