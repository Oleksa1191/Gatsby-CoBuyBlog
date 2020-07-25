import React  from "react"
import styled from "styled-components"

import {CoBuyIcons} from "../Icons/CoBuyIcons"
/*
 About Why Co Buy Section
*/

const WhyCoBuy = ({
    data
}) => {

  return (
    
    <WrapperComponent>
       <TitleWrapper>
           <TitleSection>
               Why use CoBuy?
           </TitleSection>
           <DecoLine></DecoLine>
       </TitleWrapper>
       <SmallText>
                More than a traditional (mass-market) real estate agent, no added cost.
       </SmallText>
       <TableDif>
            <Parameters>
                <ParamItem>Difficulty</ParamItem>
                <ParamItem>Time</ParamItem>
                <ParamItem>Cost</ParamItem>
                <ParamItem>Support</ParamItem>
                <ParamItem>Risk</ParamItem>
            </Parameters>
            <Traditional>
                <TitleTraditional>
                    Traditional approach
                </TitleTraditional>
                <TraditionalDoing>
                    <ParamItem>High</ParamItem>
                    <ParamItem className="sm-margin">Variable</ParamItem>
                    <ParamItem className="sm-margin">Added fees, delays, uncertainty</ParamItem>
                    <ParamItem >No specialized support</ParamItem>
                    <ParamItem className="sm-margin">High</ParamItem>
                </TraditionalDoing>
            </Traditional>
            <CoBuyDoing>
                <LogoImage src={'/cobuy.png'} alt="footer-logo" />
                <ParamItem className="white-color"><CoBuyIcons type="table-icon"/><p>Low</p></ParamItem>
                <ParamItem className="white-color"><CoBuyIcons type="table-icon"/><p>DSave 9 weeks+ *</p></ParamItem>
                <ParamItem className="white-color"><CoBuyIcons type="table-icon"/><p>Save $25k to $60k *</p></ParamItem>
                <ParamItem className="white-color"><CoBuyIcons type="table-icon"/><p>Full service expert team</p></ParamItem>
                <ParamItem className="white-color"><CoBuyIcons type="table-icon"/><p>Low</p></ParamItem>
                <ButtonCTA>Get Started</ButtonCTA>
            </CoBuyDoing>
       </TableDif>
    </WrapperComponent>
    
  )
}

export default WhyCoBuy

const WrapperComponent = styled.div`
    margin-top:48px;
    
`

const TitleWrapper = styled.div`
    position:relative;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:24px;
`

const TitleSection = styled.h5`
    font-family:Quicksand;
    font-size:32px;
    line-height:32px;
    font-weight:700;
    margin-bottom:0 !important;
`

const DecoLine = styled.div`
    width:100%;
    height:2px;
    background-color:#3899DA;
    max-width:420px;
    margin-top:8px;
`
const SmallText = styled.span`
    font-family:Roboto;
    font-size:500;
    line-height:24px;
    font-size:16px;
    color: #19191D;
`
const TableDif = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    margin:24px 0 96px;
    
`

const Parameters = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    margin-top:40px;
    padding:0 24px;
`

const Traditional = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    @media (max-width:414px) {
        display:none;
    }
`
const TraditionalDoing = styled.div`
    background-color:#FEF3E7;
    padding:24px 16px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    text-align:center;
    max-width:250px;
    .sm-margin {
        margin-bottom:16px;
    }
`
const CoBuyDoing = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:flex-start;
    background-color:#3899DA;
    padding:24px 16px 24px 27px;
    @media (max-width:414px) {
        padding:16px;
    }
    .white-color {
       color:white;
       font-weight:700;
       margin-bottom:32px;
       display:flex;
       flex-direction:row;
       align-items:center;
       justify-content:space-between;
       @media (max-width:414px) {
            margin-bottom:24px;
        }
       p {
           font-weight:700;
           margin-bottom:0 !important;
           margin-left:16px;
           @media (max-width:414px) {
            font-size:16px;
            margin-left:8px;
           }   
       }
    }
    
`

const ParamItem = styled.p`
    font-family:Roboto;
    font-size:20px;
    letter-spacing:0.44px;
    color:#19191D;
    font-weight:500;
    margin-bottom:32px;
    @media (max-width:414px) {
        font-size:16px;
        margin-bottom:24px;
    }  
`

const TitleTraditional = styled.h5`
    font-family:Roboto;
    font-size:20px;
    line-height:24px;
    letter-spacing:0.44px;
    color:#19191D;
    font-weight:700;
    margin:0 auto;
`
const LogoImage= styled.img`
  max-width:160px;
  margin:0 auto 48px;
  @media (max-width:414px) {
    margin:0 auto;
  }
`
const ButtonCTA = styled.button`
  background:#ffffff;
  font-family:Quicksand;
  font-weight:700;
  font-size:24px;
  line-height:36px;
  color:#3899DA;
  padding:8px 24px;
  margin-top:70px;
  margin-left:32px;
  @media (max-width:414px) {
    margin-top:24px;
    padding:8px 16px;
  }
`


