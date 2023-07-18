import React from 'react'

import styled from 'styled-components'
import "../css/HomeFeatures.css";
import Slider from './Slider'
import ProductsDetails from './ProductsDetails'
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Main = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
const Submain = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
function HomeFeatures() {
  return (
    <Main>
      <Slider/>
      <div className='hf'>
        Available products:
      </div>
        <ProductsDetails/>
        <Footer/>
       </Main>
  )
}

export default HomeFeatures

