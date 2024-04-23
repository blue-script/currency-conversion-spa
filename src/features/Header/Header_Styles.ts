import styled from "styled-components"


const Header = styled.header`
    padding: 10px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    width: 100%;
    height: 120px;
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
        padding: 10px 20px;
        text-decoration: none;
        background-color: #4747ff;
        color: #fff;
        border: 2px solid #4747ff;
        border-radius: 5px;
        transition: all 0.5s;
    }

    & > a:active {
        text-decoration: none;
        color: #212c2d;
    }

    & > a:hover {
        background-color: #fff;
        color: #4747ff;
        border: 2px solid #4747ff;
    }
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 5px;
`

const Menu = styled.nav`
    margin: auto 0;
    ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: space-around;
    }
`

const MenuItem = styled.li`
`

export const S = {
  Header,
  NavWrapper,
  Logo,
  Menu,
  MenuItem
}