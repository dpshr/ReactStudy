import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/"element={<Main></Main>}></Route>
        <Route path="/list" element={<ProductList></ProductList>}></Route>
        <Route path="/detail/:num" element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
