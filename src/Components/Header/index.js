import './styles.css';
import { Link } from "react-router-dom";
import { paths } from '../pagePaths/paths';
const Header = () => {
    return (
      <header>
        <nav className = "nav">
            <Link to = "/">
                <img src = {require ('../../assets/images folder/image.png')} alt = "eror" className = "header-logo"/>
            </Link>
            <div className='header-links-container'>
             {paths.map (({path, name, id}) => (
              <Link to = {path} key={id} > {name} </Link>
             ))}
            </div>
          
        </nav>
      </header>
    )
}

export default Header;