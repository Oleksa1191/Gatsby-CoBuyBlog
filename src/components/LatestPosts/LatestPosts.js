import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Row, Col } from "antd"
import { SectionLayout } from "../Sections/SectionLayout"

import { SpringFadeUp } from "../../utils/animation"
import { Link } from "gatsby"

const LatestPosts = props => {

   
  return (
      <SpringFadeUp>
        <SectionLayout alignContent="center">
          <LatestTitle>Latest Articles</LatestTitle>   
          <RowCards gutter={24}>
            {props.latestPosts.map((card, index) => {
                 console.log(card)
                 let link = card.node.slug
              return (
                <StyledCol xl={8} md={12} sm={24} xs={24} key={index}>
                  <CardLatestPost to={`/${link}`}>
                    <CardImage>
                        <Img fluid={card.node.image.fluid} />
                    </CardImage>
                    <CardTitle>
                        {card.node.title}
                    </CardTitle>
                  </CardLatestPost>
                </StyledCol>
              )
            })}
          
          </RowCards> 
        </SectionLayout>
      </SpringFadeUp>
      
  )
}

export default LatestPosts

const RowCards = styled(Row)`
  width:100% !important;
  margin:0 auto;
  padding: 32px 0 0;
  display:flex !important;
  flex-flow: row wrap !important;  
  @media(max-width:576px) {
    padding-top:32px;
    margin:0 auto;
  }
`

const StyledCol = styled(Col)`
  margin-bottom: 48px;
  @media(max-width:576px) {
    margin:32px auto;
  }
  
`

const CardLatestPost = styled(Link)`
    box-shadow: 0px 2px 4px #D2D6ED;
    display:block;
    border-radius:4px;
    :hover {
        cursor:pointer;
        background-color:#F0F1F9;
    }
`

const LatestTitle = styled.h2`
  font-family:Quicksand;
  text-align:left;
  font-size:34px;
  font-weight:700;
  line-height: 44px;
  padding:128px 0 24px;
  color:#19191D;
  text-transform:uppercase;
  @media (max-width: 768px) {
    padding:96px 16px 0;
  }
`

const CardImage = styled.figure`
    width: 100%;
    position: relative;
    transition: all 0.3s;
    margin-bottom:1em;
    height:240px;
    div {
      height:240px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
      transition: 0.25s cubic-bezier(0.32, 0.01, 0, 1);
      border-radius:4px;
      height:228px;
    }
    
`

const CardTitle = styled.h3`
    padding:40px 16px 48px;
    font-size:20px;
    line-height:32px;
    font-family:Quicksand;
    text-align:left;
    height:140px;
    font-weight:700;
`
