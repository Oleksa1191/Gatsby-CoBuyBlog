import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'

const TermsOfUse = (props) => {
  const termsData = props.data.allContentfulTermsOfUsePage.nodes[0].childContentfulTermsOfUsePageTermsBodyTextNode.childMarkdownRemark.html
  return (
    <Layout>
        <WrapperTerms>
            <TermsTitle>
                CoBuy Terms of Use
            </TermsTitle>
            <section
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: `<div> ${termsData} </div>` }}
            />
        </WrapperTerms>
    </Layout>
  )
}

export default TermsOfUse



export const contentfulAboutPageQuery = graphql`
  query TermsOfUsePage {
    allContentfulTermsOfUsePage {
        nodes {
            childContentfulTermsOfUsePageTermsBodyTextNode {
            childMarkdownRemark {
                html
            }
          }
        }
    }
  }
`

const WrapperTerms = styled.div`
  padding-top:164px;
  max-width:900px;
  margin:0 auto 32px;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 27px;
  padding-bottom: 61px;
  color:#444444;
`

const TermsTitle = styled.h1`
  margin:1.7em 0;
  color:#444444;
  font-weight: 700;
`
