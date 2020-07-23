import React  from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Img from "gatsby-image"
/*
 Card for blog listing
*/

const ListingCard = ({
  data,
  cta
}) => {
  let link = data.node.slug
  return (
    <>
    <MainCard to={`/${link}`}>
        <BodyCard>
          <CardImage>
            <Img fluid={data.node.image.fluid} />
          </CardImage>
          <CardHeader>
            {data.node.title}
          </CardHeader>
          <CardExcerpt>
            {data.node.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt}
          </CardExcerpt>
        </BodyCard>
        <FooterCard>
          <CallToAction>
            {cta}
          </CallToAction>
        </FooterCard>
    </MainCard>
    </>
  )
}

export default ListingCard

ListingCard.propTypes = {
  cta: PropTypes.string,
}


const MainCard = styled(Link)`
  @media (min-width: 1170px) and (orientation: landscape) {
      max-width:400px;
      width: 100%;
      padding:12px 0 0;
  }
  text-align:left;
  display:block;
  text-decoration:none;
  border-radius:4px;
  box-shadow: 0px 2px 4px #D2D6ED;
  :active {
    color: rgba(41,24,66,0.61);
  }
  :hover {
    background-color:#F0F1F9;
  }
`

const CardHeader = styled.span`
  font-family:Quicksand;
  text-align:left;
  font-size:24px;
  font-weight:700;
  line-height: 36px;
  padding:16px 0;
  color:#19191D;
  position:relative;
  background-image: linear-gradient(to bottom, currentColor 25%, transparent 25%);
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  background-size: 0% .4em;
  
  transition: background-size 0.3s;
  
  
`

const CardExcerpt = styled.p`
  padding-top:12px;
  font-size:16px;
  line-height: 1.6;
  color:#444444;
  font-family:Roboto;
`

const CallToAction = styled.p`
  font-family:Roboto;
  font-weight:700;
  padding:0.4em 16px;
  font-size:16px;
  color:#444444;
  text-decoration:none;
  text-align:right;
  margin-bottom:0;
  border-top:1px solid #E1E1E3;
  
`

const CardImage = styled.figure`
    width: 100%;
    position: relative;
    transition: all 0.3s;
    margin-bottom:1em;
    height:200px;
    div {
      height:200px;
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

const BodyCard = styled.div`
    padding:0 16px;
    height:500px;
`

const FooterCard = styled.div`
    
`


