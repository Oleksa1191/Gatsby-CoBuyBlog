import React  from "react"
import styled from "styled-components"
import Img from "gatsby-image"
/*
 About Page Header
*/

const AboutHeader = ({
    titlePage,headerText,image
}) => {
  return (

    <WrapperComponent>
        <PageTitle>{titlePage}</PageTitle>
        <PageHedaerText>{headerText}</PageHedaerText>
        <Img fluid={image.fluid} />
        
    </WrapperComponent>
  )
}

export default AboutHeader

const WrapperComponent = styled.div`
    margin-top:48px;
`

const PageTitle = styled.h5`
    font-size:22px;
    line-height:32px;
    letter-spacing:0.15;
    font-family:Quicksand;
    font-weight:700;
    color:#19191D;
`

const PageHedaerText = styled.p`
    font-size:16px;
    line-height:24px;
    font-family:Roboto;
`









