import React  from "react"
import styled from "styled-components"


/*
 About Who We Are Section
*/

const WhoWeAre = ({
    data
}) => {

  return (
    
    <WrapperComponent>
       <TitleWrapper>
           <TitleSection>
                Who we are
           </TitleSection>
           <DecoLine></DecoLine>
       </TitleWrapper>
       <section
            dangerouslySetInnerHTML={{ __html: `<div> ${data.html} </div>` }}
        />
    </WrapperComponent>
    
  )
}

export default WhoWeAre

const WrapperComponent = styled.div`
    margin-top:48px;
    p {
        font-family: Roboto;
        font-size:16px;
        line-height:24px;
        letter-spacing:0.44px;
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

