import logo from './logo.svg';
import './App.css';
import Cart from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Components/pagePaths/paths';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {paths.map (({path, element, id}) => (
           <Route path = {path} element = {element} key = {id} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
