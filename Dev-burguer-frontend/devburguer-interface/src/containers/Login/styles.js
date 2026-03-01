
import styled from "styled-components";
import BgLogin from "../../assets/bg-login-1.svg"
import Bg from '../../assets/bg.svg'


export const Container = styled.div`
    height: 100vh;
    width:100vw;
    display: flex;
`
export const LeftContainer = styled.div`
    background: url('${BgLogin}');
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const RightContainer = styled.div`
    background: url('${Bg}');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #1e1e1e;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    max-width: 50%;


    p {
        color: #fff;
        font-size: 18px;
        font-weight: 800px;

        a {
            text-decoration: underline;

            &:hover {
                opacity: .8;
            }
        }
    }

`
export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    font-weight: 400;
    color: #fff;
    line-height: 100%;

    span {
        font-family: "Road Rage", sans-serif;
        color: #9758A6;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label {
        font-size: 16px;
        font-weight: 600;
        color: #fff;
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: #cf3057;
        font-weight: 600;
        height: 10px;
    }
`
