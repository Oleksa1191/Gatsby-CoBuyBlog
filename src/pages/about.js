import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { graphql } from 'gatsby';
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"

import AboutHeader from "../components/AboutComponents/AboutHeader"
import WhoWeAre from "../components/AboutComponents/WhoWeAre"
import TeamInfo from "../components/AboutComponents/TeamInfo"
import Achievements from "../components/AboutComponents/Achievements"
import WhatWeDo from "../components/AboutComponents/WhatWeDo"
import WhyWeDoIt from "../components/AboutComponents/WhyWeDoIt"
import OurValues from "../components/AboutComponents/OurValues"

const About = (props) => {
  const aboutData = props.data.allContentfulAboutPage.nodes[0]
  const whoWeAreData = props.data.allContentfulAboutPage.nodes[0].historyText.childMarkdownRemark
  const teamInfo = props.data.allContentfulAboutPage.nodes[0].teamInfo
  const achievementsData = props.data.allContentfulAboutPage.nodes[0].textDescription
  const whatWeDoData = props.data.allContentfulAboutPage.nodes[0].whatWeDo.childMarkdownRemark
  const whyWeDoData = props.data.allContentfulAboutPage.nodes[0].whyWeDoIt.childMarkdownRemark
  const ourValuesData = props.data.allContentfulAboutPage.nodes[0].ourValues
  console.log(ourValuesData)
  return (
    <Layout>
      About page
      <SEO title='About' />
      <SpringFadeUp>
        <WrapperAbout>
           <AboutHeader  
            titlePage={aboutData.titlePage}
            headerText={aboutData.headerText}
            image={aboutData.titleImage}
          />
          {whoWeAreData && (
            <WhoWeAre data={whoWeAreData}/>
          ) }
          {teamInfo && (
            <TeamInfo teamInfo={teamInfo} />
          )}
          
        </WrapperAbout>
        {
          achievementsData && (
            <Achievements achievementsData={achievementsData} />
          )
        }
        <WrapperAbout>
          {whatWeDoData && (
            <WhatWeDo data={whatWeDoData}/>
          )}
          {whyWeDoData && (
            <WhyWeDoIt data={whyWeDoData}/>
          )}
          {ourValuesData && (
            <OurValues data={ourValuesData}/>
          )}
        </WrapperAbout>
      </SpringFadeUp>
     
    </Layout>
  )
}

export default About

export const contentfulAboutPageQuery = graphql`
  query AboutPage {
    allContentfulAboutPage {
      nodes {
        titlePage
        headerText
        titleImage {
          fluid(maxWidth: 800){
            ...GatsbyContentfulFluid_withWebp
          }
        }
        historyText {
          childMarkdownRemark {
            html
          }
        }
        teamInfo {
          name
          position
          linkedinLink
          textInfo
          photo {
            fluid(maxWidth: 200){
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        textDescription {
          text
          description
        }
        whatWeDo {
          childMarkdownRemark {
            html
          }
        }
        whyWeDoIt {
          childMarkdownRemark {
            html
          }
        }
        ourValues {
          image {
            fluid(maxWidth: 50){
              ...GatsbyContentfulFluid_withWebp
            }
          }
          description
        }
      }
    }
  }
`

const WrapperAbout = styled.div`
  padding-top:32px;
  max-width:684px;
  margin:0 auto 32px;
  
`


