import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'

const PrivacyPolicy = (props) => {
  const privacyData = props.data.allContentfulPrivacyPolicy.nodes[0].childContentfulPrivacyPolicyPrivacyPoliceTextNode.childMarkdownRemark.html
  return (
    <Layout>
        <WrapperPrivacy>
            <PrivacyTitle>
                CoBuy Privacy Policy
            </PrivacyTitle>
            <section
              className="content-body load-external-scripts"
              dangerouslySetInnerHTML={{ __html: `<div> ${privacyData} </div>` }}
            />
        </WrapperPrivacy>
    </Layout>
  )
}

export default PrivacyPolicy



export const contentfulAboutPageQuery = graphql`
  query PrivacyPolicy {
    allContentfulPrivacyPolicy {
      nodes {
        childContentfulPrivacyPolicyPrivacyPoliceTextNode {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

const WrapperPrivacy = styled.div`
  padding-top:164px;
  max-width:900px;
  margin:0 auto 32px;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 27px;
  padding-bottom: 61px;
  color:#444444;
`

const PrivacyTitle = styled.h1`
  margin:1.7em 0;
  color:#444444;
  font-weight: 700;
`
