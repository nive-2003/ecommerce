import { Facebook, Instagram, LocalPhoneOutlined, LocationOnRounded, MailOutline, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

 const Container = styled.div`
 display:flex;
 `
 const Left = styled.div`
 flex: 1;
 display: flex;
 flex-direction: column;
 padding: 20px;
 `
 const Logo = styled.div`
font-family: 'Shadows Into Light', cursive;
font-weight: 900;
 `
 const Desc = styled.p`
 margin: 20px 0px;
 font-family: 'Amatic SC', cursive;
 `
 const SocialContainer = styled.div`
 display: flex;
 font-family: 'Amatic SC', cursive;
 `
 const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 background-color: #${props=>props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
 font-family: 'Amatic SC', cursive;
 `

 const Right = styled.div`
 flex: 1;
 font-family: 'Amatic SC', cursive;

 `
 const Center = styled.div`
 flex: 1;
 padding: 20px;
 `

 const Title = styled.h3`
 margin-bottom: 30px;
 font-family: 'Shadows Into Light', cursive;
 
 `
 const List = styled.ul`
 margin: 0;
 padding:0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;

 `
 const ListItem = styled.li`
 font-family: 'Amatic SC', cursive;
 
 `
 const ContactItem = styled.div`
  display: flex;
  margin-bottom: 15px;
 `
  const Payment= styled.img`
    height: 60px;
  `
  const Room = styled.div``

const Footer =()=> {
  return (
    <Container>
        <Left>
            <Logo> Sassy</Logo>
            <Desc>
                Get connected with us on social media:
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                   <Facebook/> 
                </SocialIcon>
                <SocialIcon color='E4405F'>
                   <Instagram/> 
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                   <Twitter/> 
                </SocialIcon>
                <SocialIcon color='E60023'>
                   <Pinterest/> 
                </SocialIcon>
                
            </SocialContainer>
        </Left>
            <Center>
                <Title>Registered Office Address:</Title>
                <List>
                    <ListItem>Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli 
                        Village,Bengaluru, 560103,Karnataka, India.<br></br>
                        </ListItem>
                </List>
            </Center>
                <Right>
                    <Title>Contact Us</Title>
                    <ContactItem>
                   <Room/><LocationOnRounded/>Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,Outer Ring Road, Devarabeesanahalli Village,
                        Bengaluru, 560103,Karnataka, India
                    </ContactItem>
                    <ContactItem>
                        <LocalPhoneOutlined/> 91+ 93619 41358
                    </ContactItem>
                    <ContactItem>
                        <MailOutline/> Sassy@Gmail.com
                    </ContactItem>
                    <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhCD2Zl_HHUlu7uFU5wijbTgcNZMMmunQXFg&usqp=CAU"/>
                </Right>
            
        
    </Container>
  )
}

export default Footer