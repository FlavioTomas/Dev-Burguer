import styled from "styled-components";


export const Container = styled.div`
    .carousel-item {
        padding-right: 50px;
    }

    padding-left: 50px;
    padding-bottom: 40px;

    .react-multiple-carousel__arrow--left{
        left: 15px;
        top: 10px;
    }

    .react-multiple-carousel__arrow--right{
        top: 10px;
    }
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 10px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translate(50%);
        width: 56px;
        height: 4px;
        background-color: #9758a6;
    }
`

export const ContainerItens = styled.div`
    background: url('${props => props.imageurl}'), no-repeat;
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;
    border-radius: 20px;


    p {
        color: #fff;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5;
        font-weight: bold;
        margin-top: 30%;
    }
`