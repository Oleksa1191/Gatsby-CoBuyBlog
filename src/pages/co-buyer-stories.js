import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"

const CoBuyerStories = (props) => {
  return (
    <Layout>
        <SpringFadeUp>
            <WrapperStories>
                <StorieTitle>
                    CoBuyer Stories
                </StorieTitle>
            </WrapperStories>
        </SpringFadeUp>
        
    </Layout>
  )
}

export default CoBuyerStories





const WrapperStories = styled.div`
    padding-top:128px;
    max-width:900px;
    margin:0 auto 32px;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
    padding-bottom: 61px;
    color:#444444;
`

const StorieTitle = styled.h1`
    margin:1.7em 0;
    color:#444444;
    font-weight: 700;
`
