import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Info from './Info'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
`
function ProductsDetails() {
  return (
    <Container>
     {popularProducts.map((item) =>(
        <Info item={item} key={item.id}/>
     ))}
    </Container>
  )
}

export default ProductsDetails