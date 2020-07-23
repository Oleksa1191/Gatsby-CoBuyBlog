import React from "react"
import styled from "styled-components"

import { Row, Col } from "antd"
import { SectionLayout } from "../../Sections/SectionLayout"
import Card from "../Card/Card"
import { SpringFadeUp, TrailFadeUp } from "../../../utils/animation"

export const CardListing = props => {


  return (
      <TrailFadeUp>
        <SectionLayout alignContent="center">   
          <RowCards gutter={24}>
            
            {props.cardsData.map((card, index) => {
              return (
                <StyledCol xl={6} lg={6} xs={24} sm={12} md={8} key={index}>
                  <Card data={card} cta="Read more"/>
                </StyledCol>
              )
            })}
          
          </RowCards> 
        </SectionLayout>
      </TrailFadeUp>
      
  )
}



const RowCards = styled(Row)`
  width:100% !important;
  margin:0 auto;
  padding: 196px 0 0;
  display:flex !important;
  flex-flow: row wrap !important;  
  @media(max-width:576px) {
    padding-top:64px;
  }
`

const StyledCol = styled(Col)`
  margin-bottom: 48px;
  @media(max-width:576px) {
    margin:32px auto;
  }
  
`
