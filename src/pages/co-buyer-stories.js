import React from "react"
import Layout from "../components/Layout/Layout"
import styled from 'styled-components'
import { SpringFadeUp } from "../utils/animation"
import StoryItem from "../components/StoryItem/StoryItem"

const CoBuyerStories = (props) => {
  const storyData = props.data.allContentfulStoriesPage.nodes[0].storyItem

  return (
    <Layout>
      <WrapperStories>
        <SpringFadeUp>
            
            <StorieTitle>
                Watch our CoBuyers share their stories.
            </StorieTitle>
           
            <PageContent>
              {storyData.map((item, index) => {
                          return  <StoryItem data={item} />    
              })}
            </PageContent>
        </SpringFadeUp>
      </WrapperStories>
    </Layout>
  )
}

export default CoBuyerStories


export const contentfulStoriesPageQuery = graphql`
  query StoriesPage {
    allContentfulStoriesPage {
        nodes {
          storyItem {
            videoSrcUrl
            name
            information
            text {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
  }
`


const WrapperStories = styled.div`
    padding-top:32px;
    max-width:684px;
    margin:0 auto;
    font-size: 18px;
    letter-spacing: 0;
    line-height: 27px;
    padding-top: 96px;
    color:#444444;
    @media (max-width:768px) {
      padding:72px 16px 0;
    }
`

const StorieTitle = styled.h1`
    font-family:Quicksand;
    font-size:22px;
    line-height:31px;
    letter-spacing:0.15px;
    color:#19191D;
    font-weight:700;
    margin-bottom:0;
`

const PageContent = styled.div`
    max-width:684px;  
    width:100%;
    margin:0 auto;  
`
