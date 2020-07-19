import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"


const BlogPostContent = ({ post, ...otherProps }) => {
  console.log(post)
  return (
    <>
      <ContentWrapper>
        <Img
          alt="example"
          fluid={post.image.fluid}
        />
        {post.categories ? (
          <CobuyKicker>
            {post.categories.map((category, index) => {
              return <span key={index}>{category.name} </span>
            })}
        ) : null}
          </CobuyKicker>
        ) : null}
        {post.title ? (
          <CobuyTitle alignContent="left" fontSize="normal">
            {post.title}
          </CobuyTitle>
        ) : null}
        {post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html ? (
          <ContentBody dangerouslySetInnerHTML={{ __html: post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html }} />
        ) : null}
      </ContentWrapper>
    </>
  )
}

export default BlogPostContent

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  height: auto;
  max-width: 970px;
  padding: 64px;
  box-sizing: border-box;
`

export const ContentBody = styled.div`
  margin-top:1.2em;
  font-family:Lato;
  font-size: 18px;
  letter-spacing: 0;
  line-height: 27px;
  padding-bottom: 61px;
  border-bottom: 1px solid #3c484e;
  color: #3c484e;
  h1 {
    margin:0.8em 0;
  }
  h2 {
    margin:0.6em 0;
  }
  h3 {
    margin:0.4em 0;
  }
  a {
    color: #3899da;
  }
  .gatsby-resp-image-link {
    margin:32px;
  }
  p {
    margin:0.4em 0;
  }
  
`

export const IconWrapper = styled.span`
  padding: 0 8px ;
`

export const CobuyKicker = styled.h5``

export const CobuyTitle = styled.h3`
  margin:1em 0;
`