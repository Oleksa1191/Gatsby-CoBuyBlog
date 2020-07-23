import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"

const ReferFriend = (props) => {
  return (
    <Layout>
        <SpringFadeUp>
            <ReferWrapper>
                <ReferTitle>
                    Refer a friend
                </ReferTitle>
                <ReferDescription>
                    Who do you know that may be interested in co-buying a home? Don’t keep CoBuy a secret! 
                </ReferDescription>
                <ReferCard>
                    <a>
                    <TextSide>

                    </TextSide>
                    <ImageSide>

                    </ImageSide>
                    </a>
                   
                </ReferCard>
            </ReferWrapper>
        </SpringFadeUp>
    </Layout>
  )
}

export default ReferFriend




const ReferWrapper = styled.div`
    padding-top:128px;
    max-width:900px;
    margin:0 auto 32px;
`

const ReferCard = styled.figure`
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
`

const ReferTitle = styled.h1`
    color: #3899da;
    font-weight: 700;
    font-size: 3.052em;
`

const ReferDescription = styled.p`
    font-size:24px;
`

const TextSide = styled.div`

`
const ImageSide = styled.div`

`
