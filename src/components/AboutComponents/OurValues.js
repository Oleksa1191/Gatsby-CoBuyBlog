import React  from "react"
import styled from "styled-components"
import Img from "gatsby-image"

/*
 About Our Values Section
*/

const OurValues = ({
    data
}) => {
    console.log(data)
  return (
    
    <WrapperComponent>
       <TitleWrapper>
           <TitleSection>
                Our Values
           </TitleSection>
           <DecoLine></DecoLine>
       </TitleWrapper>
       <h3>Values guide everything we do:</h3>
       <BodyComponent>
        {data.map((item, index) => {
                    console.log(data)
                        return (
                            <ValueItem>
                                <Img fluid={item.image.fluid} />
                                <TitleValue>{item.description}</TitleValue>
                            </ValueItem>
                        
                        )
            })}
        </BodyComponent>
    </WrapperComponent>
    
  )
}

export default OurValues

const WrapperComponent = styled.div`
    margin-top:48px;
    p, h4, li {
        font-family: Roboto;
        font-size:16px;
        line-height:24px;
        letter-spacing:0.44px;
        color: #19191D;
    }
    li {
        padding:12px 0;
    }
    ul {
        display:flex;
        flex-direction:column;
        flex-wrap:wrap;
        margin:24px 0 !important;
        
    }
    h3 {
        font-family:Roboto;
        font-size:16px;
        font-weight:500;
        color:#191911D;
    }
`
const BodyComponent = styled.div`
    display:flex;
    max-width:684px;
    flex-wrap:wrap;
    margin:0 auto;
    padding:32px 0;
    justify-content:space-between;
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
    max-width:500px;
    margin-top:8px;
`

const ValueItem = styled.div`
    flex: 0 0 48%;
    max-width: 48%;
    text-align:center;
    padding:48px;
    border-radius:4px;
    background-color:#EBF2FF;
    margin-bottom:24px;
    div {
        max-width:32px;
        margin:0 auto;
    }
`

const TitleValue = styled.h5`
    font-family:Roboto;
    letter-spacing:0.15px;
    font-size:20px;
    font-weight:500;
    color:rgba(0, 0, 0, 0.87);
    margin-top:24px;
`
