import React  from "react"
import styled from "styled-components"


import Video from "../Video/Video"

const StoryItem = ({
    data
}) => {
    console.log(data)
  return (
    
    <WrapperComponent>
       <Video videoSrcURL={data.videoSrcUrl}/>
       <NameBuyer>{data.name}</NameBuyer>
       <CityBuyer>{data.information}</CityBuyer>
       <section
              dangerouslySetInnerHTML={{ __html: `<div> ${data.text.childMarkdownRemark.html} </div>` }}
        />
        <DecoLine />
    </WrapperComponent>
  )
}

export default StoryItem

const WrapperComponent = styled.div`
    margin-top:48px;
    iframe {
        width:100%;
        height:auto;
        min-height:360px;
        @media (max-width:414px) {
            min-height:200px;
        }
    }
    p {
        font-family:Roboto;
        font-size:16px;
        line-height:24px;
        letter-spacing:0.44px;
        color:#191911D;
    }
`

const NameBuyer = styled.h4`
    margin-top:16px;
    color:#3899Da;
    font-weight:500;
    font-size:24px;
    line-height:32px;
    letter-spacing:0.15px;
    font-family:Roboto;
`

const CityBuyer = styled.h5`
    margin-top:8px;
    color:#19191D;
    font-weight:500;
    font-size:20px;
    line-height:32px;
    letter-spacing:0.15px;
    font-family:Roboto;
`

const DecoLine = styled.div`
    width:100%;
    height:2px;
    background-color:#3899DA;
    max-width:330px;
    margin:24px 0;
`

