import React  from "react"
import styled from "styled-components"


/*
 About What We Do Section
*/

const WhatWeDo = ({
    data
}) => {

  return (
    
    <WrapperComponent>
       <TitleWrapper>
           <TitleSection>
                What we do
           </TitleSection>
           <DecoLine></DecoLine>
       </TitleWrapper>
       <section
            dangerouslySetInnerHTML={{ __html: `<div> ${data.html} </div>` }}
        />
    </WrapperComponent>
    
  )
}

export default WhatWeDo

const WrapperComponent = styled.div`
    margin-top:48px;
    p, h4, li {
        font-family: Roboto;
        font-size:16px;
        line-height:24px;
        letter-spacing:0.44px;
        color: #19191D;
    }
    ul {
        display:flex;
        flex-direction:column;
        max-height:200px;
        flex-wrap:wrap;
        margin:24px 32px !important;
        list-style-image:url(/check-small.png);
        li {
            padding:12px 0 12px 24px;
            
        }
        @media (max-width:768px) {
            max-height:400px;
        }
    }
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
    max-width:490px;
    margin-top:8px;
`

