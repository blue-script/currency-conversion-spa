import styled from "styled-components";
import bg from "../assets/bg.svg"

const AppContainer = styled.div`
    background-image: url(${bg});
`

const BodyWrapper = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    min-height: 600px;
    min-width: 500px;
    width: 100%;
`
const HeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
    background-color: lightblue;
    display: flex;
    justify-content: center;
    gap: 30px;
`
const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        text-decoration: none;
        color: #1e3786;
    }

    & > a:active {
        text-decoration: none;
        color: #212c2d;
    }

    & > a:hover {
        color: steelblue;
    }
`

export const s = {
  BodyWrapper,
  HeaderWrapper,
  NavWrapper,
  AppContainer
}