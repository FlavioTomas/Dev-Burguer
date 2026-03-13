import styled from "styled-components";
import BannerHome from '../../assets/banner-menu.svg'
import Background from '../../assets/bg.svg'
import { Link } from "react-router-dom";



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
    background: linear-gradient(
            rgba(255,255,255, 0.2),
            rgba(255,255,255, 0.2)
        ), url('${Background}');
`

export const Banner = styled.div`
    background: url('${BannerHome}') no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: center;
    height: 480px;

    width: 100%;
    background-color: #1f1f1f;
    background-size: cover;
    position: relative;


    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 5rem;
        line-height: 65px;
        color: #fff;
        position: absolute;
        right: 20%;
        top: 15%;
        text-align: center;

        span {
            display: block;
            color: #d4d4d4;

            font-size: 1rem;
        }
    }
`


export const CategoriesMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`


export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.$isActive ? '#9758a6' : '#646464'};
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${props => props.$isActive && '3px solid #9758a6'} ;
`


export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto 0;
    gap: 60px;
`

export const ReturnButton = styled(Link)`
    grid-column: 1 / -1;
    justify-self: center;
    background: none;
    border: none;
    color: #9758a6;
    font-size: 16px;
    font-weight: 600;
    transition: .3s ease-in-out;
    text-decoration: none;

    &:hover {
        transform: translateY(-2px);
        color: #6f357c;
    }
`