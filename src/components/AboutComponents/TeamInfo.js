import React  from "react"
import styled from "styled-components"
import { Row, Col } from "antd"
import Img from "gatsby-image"
import {
    LinkedinIcon,
  } from "react-share";

/*
 About Who We Are Section
*/

const WhoWeAre = ({
    teamInfo
}) => {

  return (
    
    <WrapperComponent>
        <StyledRow  gutter={36}>
        {teamInfo.map((teamMember, index) => {
                return (
                    <StyledCol xl={12} lg={12} md={12} xs={24} sm={12}  key={index}>
                      <MemberImage>
                        <Img fluid={teamMember.photo.fluid} />
                      </MemberImage>
                      <MemberName>
                         {teamMember.name}
                      </MemberName>
                      <MemberPosition>
                        {teamMember.position}
                      </MemberPosition>
                      <a href={teamMember.linkedinLink}>
                        <LinkedinIcon size={36} round={true}></LinkedinIcon>
                      </a>
                      <TextMember>
                          {teamMember.textInfo}
                      </TextMember>
                    </StyledCol>
                )
            })}
        </StyledRow>
    </WrapperComponent>
    
  )
}

export default WhoWeAre

const WrapperComponent = styled.div`
    margin-top:48px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
`
const MemberImage = styled.div`
    max-width:128px; 
    margin:0 auto;
    margin-bottom:24px;   
    img {
        width:128px;
        height:128px;
        border-radius:50%;
    }
    
`

const StyledRow = styled(Row)`
    width:100%;
    margin-left:0 !important;
    margin-right:0 !important;
`

const StyledCol = styled(Col)`
    text-align:center;
`

const MemberName = styled.span`
    font-family:Quicksand;
    font-size:24px;
    line-height:36px;
    font-weight:700;
    color:#191911D;
`

const MemberPosition = styled.p`
    font-family:Quicksand;
    font-size:20px;
    line-height:36px;
    color:#191911D;
    letter-spacing:0.15;
`

const TextMember = styled.p`
    font-family:Roboto;
    font-size:16px;
    line-height:24px;
    color:#444444;
    margin-top:12px;
`

