import styled from "styled-components";
import BannerHome from '../../assets/banner-menu.svg'



export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;
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

`

export const ProductsContainer = styled.div`

`