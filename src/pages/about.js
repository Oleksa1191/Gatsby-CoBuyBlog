import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { graphql } from 'gatsby';
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"

const About = (props) => {
  const aboutData = props.data.allContentfulAboutPage.nodes[0].childContentfulAboutPageAboutInfoTextNode.childMarkdownRemark.html
  return (
    <Layout>
      About page
      <SEO title='About' />
      <SpringFadeUp>
        <WrapperAbout>
            <div
              dangerouslySetInnerHTML={{ __html: `<div> ${aboutData} </div>` }}
            />
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
        childContentfulAboutPageAboutInfoTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

const WrapperAbout = styled.div`
  padding-top:128px;
  max-width:900px;
  margin:0 auto 32px;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 27px;
  padding-bottom: 61px;
  border-bottom: 1px solid #3c484e;
  color:#444444;
  .button {
    margin:0 auto !important;
    display:block !important;
    max-width:150px  !important;
    margin-top:2rem !important;
  }
  ul {
    li {
      margin: .8em 0;
      list-style: none;
      font-size:20px;
      line-height:1.65em;
    }
    li::before {
      content: "•"; 
      color: #3899da;
      margin-right:0.4rem;
    }
  }
  h1 {
    margin:1.7em 0;
    color:#444444;
    font-weight: 700;
  }
  h2 {
    margin:1.5em 0;
    color:#3899da;
    font-weight: 700;
  }
  h3 {
    margin: .5em 0 .2em;
    color:#444444;
    font-weight: 700;
  }
  a {
    color: #3899da;
    text-decoration:none;
  }
  a:hover {
    text-decoration:underline;
  }
  p {
    margin:1.5em 0;
    font-size:20px;
    line-height:1.65em;
  }
  table {
    width:100%;
    max-width:900px;
    margin:0 auto;
  }
  table, th, td {
    border: 1px solid black;
  }
  
  th:nth-of-type(1)  {
    border-left:none;
    border-right:none;
    position:relative;
    text-align:left;
    padding:16px 32px;
    font-size:24px;
    font-weight:600;
  }
  th:nth-of-type(2)  {
    border-right:none;
    border-left:none;
    padding:16px 0;
  }
  td {
    padding:16px;
    text-align:center;
    a {
      display:inline-block;
      width:96px;
      margin:0 auto;
    }
    p {
      font-size: 18px;
      letter-spacing: 0;
      color:#444444;
      display:block;
      margin:0.1em auto;
    }
    span {
      font-weight:600;
      font-size: 18px;
      letter-spacing: 0;
      color:#444444;
      margin:0.3em auto;
    }
  }
`


