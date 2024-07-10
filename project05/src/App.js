import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {Routes, Route} from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import { useState } from 'react';
import Login from './components/Login';

function App() {

  //  상품 리스트를 담아줄 state
  const [list,setList]=useState([])

  return (
    <div className='container'>
      <Header></Header>

      {/* 페이지에 따라 다르게 보여지는 컴포넌트 -> Routes안에 Route로 작성
        페이지에 관계없이 고정되어야한다면? -> Routes 바깥에 작성
      */}
      <Routes>
        <Route path="/"element={<Main></Main>}></Route>
        <Route path="/list" element={<ProductList list={list}setList={setList}></ProductList>}></Route>
        <Route path="/detail/:num" element={<ProductDetail list={list}></ProductDetail>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
