import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"
import Img from 'gatsby-image'
import { CoBuyIcons } from "../components/Icons/CoBuyIcons"

const ReferFriend = (props) => {
  const referData = props.data.allContentfulReferPage.nodes[0]
  console.log(referData)
  return (
    <Layout>
        <SpringFadeUp>
            <ReferWrapper>
                <Img fluid={referData.heroImage.fluid} />
                <ReferTitle>
                    {referData.title}
                </ReferTitle>
                <h5>How to share:</h5>
                <LinksWrapper>
                    {referData.linksGroup.map((item, index) => {
                        return (
                            <ItemLink>
                                <a href={item.link} target="blank">
                                 <CoBuyIcons type={item.iconName} />
                                </a>
                                <span>{item.description}</span>
                            </ItemLink>
                            
                        )
                    })}
                </LinksWrapper>
                <a href="https://www.gocobuy.com/" target="blank">
                    <ReferCard>
                    
                            <TextSide>
                                <TitleCard>{referData.bannerTitle}</TitleCard>
                                <DescriptionCard
                                    dangerouslySetInnerHTML={{ __html: `<div> ${referData.bannerDescription.childMarkdownRemark.html} </div>` }} 
                                />
                                <FooterContent>
                                    <LogoFooterWrapper>
                                        <LogoFooter src={'/cobuy.png'} alt="footer-logo" />
                                        
                                    </LogoFooterWrapper>
                                    <span>CoBuy</span>
                                </FooterContent>
                            </TextSide>
                            <ImageSide>
                                <LogoImage src={'/cobuy.png'} alt="footer-logo" />
                            </ImageSide>
                        
                    </ReferCard>
                </a>
            </ReferWrapper>
        </SpringFadeUp>
    </Layout>
  )
}

export default ReferFriend


export const contentfulReferPageQuery = graphql`
  query ReferPage {
    allContentfulReferPage {
        nodes {
          title
          bannerTitle
          bannerDescription {
            childMarkdownRemark {
              html
            }
          }
          linksGroup {
            iconName
            description
            link
          }
          heroImage {
            fluid(maxWidth: 800){
                ...GatsbyContentfulFluid_withWebp
              }
          }
        }
      }
  }
`

const ReferWrapper = styled.div`
    padding-top:128px;
    max-width:684px;
    margin:0 auto 32px;
    h5 {
        font-family:Quicksand;
        font-size: 20px;
        line-height:32px;
        color:#19191D;
        letter-spacing: 0.15px;
        margin-top:24px;
    }
    @media (max-width:768px) {
        padding:96px 16px;
    }
`

const ReferCard = styled.div`
    background: #fff;
    width: 100%;
    margin: 0 0 1.5em;
    border: 1px solid #e5eff5;
    border-radius: 5px;
    box-shadow: 0 0 1px rgba(0,0,0,.06), 0 2px 6px rgba(0,0,0,.03);
    overflow: hidden;
    margin-bottom:24px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media (max-width:768px) {
        flex-direction:column;
    }
`

const ReferTitle = styled.h1`
    font-family:Roboto;
    font-weight: 700;
    font-size: 30px;
    line-height:46px;
    color:#19191D;
    letter-spacing: 0.15px;
    margin-top:24px;
`
const LinksWrapper = styled.div`
    display:flex;
    flex-direction:column;
`

const TextSide = styled.div`
    padding:12px;
`
const ImageSide = styled.div`
    padding:84px 42px;
    background-color:#3899DA;
    
`

const ItemLink = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    margin:24px 0 36px;
    padding-left:8px;
    span {
        font-family:Roboto;
        font-weight: 500;
        font-size: 20px;
        line-height:32px;
        color:#19191D;
        letter-spacing: 0.15px;
        margin-left:41px;
        display:block;
    }
`
const LogoImage= styled.img`
  max-width:105px;
  @media (max-width:768px) {
    max-width:185px;
    margin:0 auto;
  }
`

const LogoFooter = styled.img`
  max-width:24px;
  
`

const TitleCard = styled.h4`
    color:#3899DA;
    font-weight:500;
    font-size:16px;
    line-height:28px;
    letter-spacing:0.15px;
    font-family:Roboto;
`

const DescriptionCard  = styled.div`
    color: rgba(0,0,0, 0.87);
    font-family:Roboto;
    font-size:16px;
    line-height:28px;
    letter-spacing:0.44px;
    font-weight:400;
`

const FooterContent = styled.div`
    display:flex;
    flex-direction:row;
    align-items:flex-end;
    span {
        color: #19191D;
        font-family:Roboto;
        font-size:16px;
        letter-spacing:0.44px;
        margin-bottom:0;
        margin-left:8px;
    }
`

const LogoFooterWrapper = styled.div`
    padding:16px;
    background-color:#3899DA;
`