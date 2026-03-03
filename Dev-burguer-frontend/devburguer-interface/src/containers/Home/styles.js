import styled from "styled-components";
import BannerHome from '../../assets/banner-home.svg'
import Background from '../../assets/bg.svg'


export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 400px;

    h1 {
        font-family: "Road Rage", sans-serif;
        font-size: 5rem;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`


export const Container = styled.section`
    background: linear-gradient(
        rgba(255,255,255, 0.2),
        rgba(255,255,255, 0.2)
    ), url('${Background}'), no-repeat;
    background-size: contain;
    height: 100%;
`

