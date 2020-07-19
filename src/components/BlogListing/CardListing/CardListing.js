import React from "react"
import styled from "styled-components"

import { Row, Col } from "antd"
import { SectionLayout } from "../../Sections/SectionLayout"
import Card from "../Card/Card"
import { SpringFadeUp, TrailFadeUp } from "../../../utils/animation"

export const CardListing = props => {
  console.log(props)

  return (
      <SectionLayout alignContent="center">
        <RowCards gutter={16}>
          <TrailFadeUp>
            {props.cardsData.map((card, index) => {
              return (
                <StyledCol xl={8} lg={8} xs={24} sm={8} key={index}>
                  <Card data={card} cta="Read more"/>
                </StyledCol>
              )
            })}
          </TrailFadeUp>
        </RowCards>
      </SectionLayout>
  )
}



const RowCards = styled(Row)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 196px 0 0 ;
  >div {
    display:flex;
    flex-direction:row;
  }
  @media (max-width: 575px) {
    flex-direction: column;
    align-items: center;
  }
`

const StyledCol = styled(Col)`
  margin-bottom: 30px;

`
