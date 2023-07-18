import React,{useState} from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined } from '@material-ui/icons'
import {description} from '../data'
import { useNavigate } from 'react-router-dom'
const Inform = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: #f0e4e49e;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: 1s ease;
cursor: pointer;


`
const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px; 
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    border-radius: 10px;
    position: relative;
    &:hover ${Inform}{
     opacity: 1;
    }
`
const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: aqua;
 position: absolute;

`
const Image = styled.img`
height: 70%;
z-index: 2;
width: 60%;

`
const Description = styled.img`
height: 70%;
z-index: 2;
width: 20%;
font-size: 20px;

`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: azure;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  transition:  1s ease;

  &:hover{
    background-color: aliceblue;
    transform: scale(1.4);
  }

`
const Box = styled.div`
  width: 500px;
  height: 350px;
  /* background-color: azure; */
    display: flex; 
  align-items: center;
  justify-content: center; 
  margin: 5px;
  transition:  1s ease;
  font-size: 10px;

`
const InfoContainer = styled.div`
flex: 1;
    
`
const Desc = styled.p`
margin:50px 0px;
font-size: 40px;
font-weight: 500;
letter-spacing: 3px;
font-family: 'Caveat', cursive;

`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
font-family: 'Caveat', cursive;
`
const Title = styled.h1`
font-size:70px;
`
const Info = ({item}) => {
  let navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/cartadd")
  }
  const [slideIndex,setSlideIndex]=useState(0);
  return (
    <Container>
    <Circle/>
    <Image src = {item.img}/>
  <Inform>
       <Icon>
        <ShoppingCartOutlined onClick={handleClick}/>
        </Icon> 
        <Icon>
        <SearchOutlined/>
        </Icon> 
        <Icon>
        <FavoriteBorderOutlined/>
        </Icon> 
    </Inform>
    </Container>
  )
}

export default Info