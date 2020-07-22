import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout/Layout"


const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundWrapper>
        <NotFoundHeader>Woops!</NotFoundHeader>
        <NotFoundText>Something's not quite right. We are looking into it.</NotFoundText>
      </NotFoundWrapper>
    </Layout>
  )
}

export default NotFoundPage

const NotFoundWrapper = styled.div`
  width:100%;
  max-width:600px;
  margin:0 auto;
  padding:15% 0;
  text-align:center;
`
const NotFoundHeader = styled.h2`
  color: #3899da;
  margin-bottom:32px;
`

const NotFoundText = styled.p`
  color:#444444;
`
