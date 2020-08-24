import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';
import { IoIosCompass } from 'react-icons/io';
import { FiHeart } from 'react-icons/fi';
const Header = () => {
    return (
        <ContainerFluid>
            <Container>
                <LogoContainer>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt=""/>
                </LogoContainer>
                <SearchContainer>
                    <input type="text" placeholder="Search"/>
                </SearchContainer>
                <IconContainer>
                    <a href="#"><AiFillHome /></a>
                    <a href="#"><FiSend /></a>
                    <a href="#"><IoIosCompass /></a>
                    <a href="#"><FiHeart /></a>
                    <a><img src="https://instagram.fmaa6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/21107442_538980489766896_8903829558113861632_a.jpg?_nc_ht=instagram.fmaa6-1.fna.fbcdn.net&_nc_ohc=Hd_4ayHCtmQAX9pWdwB&oh=9a7150928e4d5614d34ba2170ae80b94&oe=5F6C0BB5" alt=""/> </a>
                </IconContainer>
            </Container>
        </ContainerFluid>
    )
}

export default Header; 


const ContainerFluid = styled.div`
    width: 100%;
    height: 54px;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdbdb;
`

const Container = styled.div`
    max-width: 975px;
    height: 54px;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`
const SearchContainer = styled.div `
    height: 28px;
    min-width: 125px;
    width: 215px;
    flex: 0 1 auto;
    position: relative;
    input {
        font-size: 14px;
        color: #262626;
        background-color: #fafafa;
        background: url(https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_search_48px-128.png);
        background-size: 14px;
        background-repeat: no-repeat;
        background-position: 75px 6px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        outline: 0;
        padding: 3px 10px 3px 90px;
        z-index: 2;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        flex: 1;
    }
    input:focus {
        padding-left: 30px;
        transition: all 0.1s ease-in-out;
        background-position: 10px;
    }
`
const LogoContainer = styled.div`
    min-width: 40px;
    margin-top: 7px;
    flex: 1;
`
const IconContainer = styled.div `
    flex: 1;
    text-align: right;
    a {
        margin: 0 12px;
        font-size: 22px;
        color: #000000;
        display: inline-block;
        margin-top: 5px;
        img {
            width: 22px;
            height: 22px;
            border-radius: 50%;
        }
    }
    a:nth-child(3) {
        font-size: 26px;
    }
`
