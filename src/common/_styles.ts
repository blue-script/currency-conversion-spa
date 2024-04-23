import styled from "styled-components";
import bg from "../assets/bg.svg"

const Section = styled.section`
    margin-top: 120px;
    display: flex;
    justify-content: center;
    text-align: center;
    min-height: 600px;
    min-width: 500px;
    width: 100%;
    background-image: url(${bg});
`

const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  min-height: 100%;
  padding: 0 15px;
  margin: 0 auto;
`

type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  height: 100%;
`

export const CommonStyles = {
  BodyWrapper: Section,
  Container,
  FlexWrapper
}