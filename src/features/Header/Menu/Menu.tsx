import { S } from "../Header_Styles"
import React from "react"
import { NavLink } from "react-router-dom"
import { PATH } from "../../../app/App"

export const Menu = () => {
  return (
    <S.Menu>
      <ul>
        <S.MenuItem>
          <S.NavWrapper>
            <NavLink to={PATH.CONVERTER_CURRENCY}>Converter currency</NavLink>
          </S.NavWrapper>
        </S.MenuItem>
        <S.MenuItem>
          <S.NavWrapper>
            <NavLink to={PATH.CURRENT_EXCHANGE_RATES}>Current exchange rates</NavLink>
          </S.NavWrapper>
        </S.MenuItem>
      </ul>
    </S.Menu>
  )
}