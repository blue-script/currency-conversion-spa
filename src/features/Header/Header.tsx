import React from "react"
import { S } from "./Header_Styles"
import { CommonStyles } from "../../common/_styles"
import { Logo } from "./Logo/Logo"
import { Menu } from "./Menu/Menu"

const Header = () => {
  return (
    <S.Header>
      <CommonStyles.Container>
        <CommonStyles.FlexWrapper justify="space-around">
          <Logo />
          <Menu />
        </CommonStyles.FlexWrapper>
      </CommonStyles.Container>
    </S.Header>
  )
}

export default Header