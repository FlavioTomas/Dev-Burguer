import styled from "styled-components";


export const Container = styled.div`
    .carousel-item {
        padding-right: 50px;
    }

    padding-left: 50px;
    overflow-x: hidden;

    .react-multi-carousel-list {
        overflow: visible;
    }
`

export const Title = styled.h2`
    font-size: 3rem;
    font-weight: 800;
    color: #61A120;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 50px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 50%;
        transform: translate(50%);
        width: 56px;
        height: 4px;
        background-color: #61A120;
    }
`

