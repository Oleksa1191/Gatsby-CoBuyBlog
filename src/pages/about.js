import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import { graphql } from 'gatsby';
import styled from 'styled-components'

const About = (props) => {
  const aboutData = props.data.allContentfulAboutPage.nodes[0].childContentfulAboutPageAboutInfoTextNode.childMarkdownRemark.html
  console.log(aboutData)
  return (
    <Layout>
      About page
      <SEO title='About' />
      <WrapperAbout>
          <div
            dangerouslySetInnerHTML={{ __html: `<div> ${aboutData} </div>` }}
          />
      </WrapperAbout>
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
  color: #3c484e;

  ul {
    margin:1em 22px;
  }
  ul {
    list-style:square;
    li {
      margin:0.4em 0;
    }
  }
  h1 {
    margin:1.2em 0;
  }
  h2 {
    margin:1em 0;
  }
  h3 {
    margin:0.8em 0;
  }
  a {
    color: #3899da;
  }
  p {
    margin:0.6em 0;
  }
  table {
    width:100%;
    max-width:500px;
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
    padding:0 32px;
    font-size:24px;
    font-weight:600;
  }
  th:nth-of-type(2)  {
    border-right:none;
    border-left:none;
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
      color: #3c484e;
      margin:0 auto;
      display:inline-block;
      margin-top:1em;
    }
    span {
      font-weight:600;
      font-size: 18px;
      letter-spacing: 0;
      color: #3c484e;
      margin:0 auto;
      margin-top:1em;
    }
  }
`


