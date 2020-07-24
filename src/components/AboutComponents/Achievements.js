import React  from "react"
import styled from "styled-components"



/*
 About Achievements Section
*/

const Achievements = ({
    achievementsData
}) => {

  return (
    <WrapperComponent>
        <BodyComponent>
            {achievementsData.map((data, index) => {
 
                    return (
                        <AchievementsItem>
                            <AchievementsTitle>{data.text}</AchievementsTitle>
                            <AchievementsDescr>{data.description}</AchievementsDescr>
                        </AchievementsItem>
                    )
            })}
        </BodyComponent>
        
    </WrapperComponent>
  )
}

export default Achievements

const WrapperComponent = styled.div`
    margin-top:48px;
    display:flex;
    flex-direction:row;
    align-items:flex-start;
    background-color:#F0F1F9;
`
const BodyComponent = styled.div`
    display:flex;
    max-width:684px;
    flex-wrap:wrap;
    margin:0 auto;
    padding:32px 0;
`

const AchievementsItem = styled.div`
    text-align:center;
    flex: 0 0 50%;
    max-width: 50%;
    padding:0 32px;
`

const AchievementsTitle = styled.h3`
    font-family: Quicksand;
    font-size:60px;
    letter-spacing:-1.5px;
    color: #3899DA;
    font-weight:700;
    margin-bottom:0;
`

const AchievementsDescr = styled.p`
    font-family:Roboto;
    font-size:16px;
    line-height:24px;
    color: rgba(0,0,0, 0.87);
`

