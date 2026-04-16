import styled from "styled-components";
import Texture from '../../assets/texture.svg'
import Background from '../../assets/bg.svg'



export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
            rgba(255,255,255, 0.2),
            rgba(255,255,255, 0.2)
        ), url('${Background}');
    min-height: 100vh;
`

export const Banner = styled.div`
    background: url('${Texture}');
    background-color: #1f1f1f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 180px;
    background-size: cover;
    background-position: center;

    img {
        height: 160px;
    }
`

export const Title = styled.div`
    font-size: 32px;
    font-weight: 800;
    padding-bottom: 12px;
    color: #61a129;
    text-align: center;
    position: relative;

    &::after {
        position: absolute;
        content: '';
        width: 56px;
        height: 4px;
        background-color: #61a129;
        bottom: 0;
        left: calc(50% + -28px);
    }
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 20%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;
`

