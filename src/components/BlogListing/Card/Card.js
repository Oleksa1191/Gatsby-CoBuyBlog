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
  
  return (
    <MainCard to={data.node.slug}>
        <CardImage>
          <Img fluid={data.node.image.fluid} />
        </CardImage>
        <CardHeader>
          {data.node.title}
        </CardHeader>
        <CardExcerpt>
          {data.node.childContentfulBlogPostBodyTextNode.childMarkdownRemark.excerpt}
        </CardExcerpt>
        <CallToAction to={data.node.slug}>
          {cta}
        </CallToAction>
    </MainCard>
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
      padding:0 32px;
  }
  text-align:left;
  display:block;
  text-decoration:none;

  :active {
    color: rgba(41,24,66,0.61);
  }
  
`

const CardHeader = styled.span`
  font-family:Lato;
  text-align:left;
  font-size:20.25px;
  letter-spacing: -.005em;
  font-weight:700;
  line-height: 1.55;
  padding:0.4em 0;
  margin-top:1rem;
  color:#444444;
  position:relative;
  background-image: linear-gradient(to bottom, currentColor 25%, transparent 25%);
  background-repeat: no-repeat;
  background-position-y: bottom;
  background-position-x: left;
  background-size: 0% .4em;
  padding:0.4em 0;
  
  transition: background-size 0.3s;
  
  ${MainCard}:hover & {
    background-size: 100% .4em;
    color:#3899da;
  }
`

const CardExcerpt = styled.p`
  margin-bottom:1rem;
  font-size:16px;
  line-height: 1.6;
  color:#444444;
`

const CallToAction = styled.div`
  font-family:Open Sans;
  font-weight:800;
  padding:0.4em 0;
  font-size:16px;
  color:#444444;
  text-decoration:none;
  ${MainCard}:hover & {
    color:#3899da;
  }
`

const CardImage = styled.figure`
    width: 100%;
    position: relative;
    transition: all 0.3s;
    margin-bottom:1em;
    div {
      max-height:180px;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: 0.25s cubic-bezier(0.32, 0.01, 0, 1);
      
    }
    ${MainCard}:hover & {
      transform:scale(1.03);
      box-shadow: -2px 6px 21px -9px rgba(0,0,0,0.75);
      
    }
`


