import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { SpringFadeUp } from "../../utils/animation"
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from "react-share";
import {
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
} from "react-share";

const BlogPostContent = ({ post,location, ...otherProps }) => {
  const shareUrl = `https://www.blog.gocobuy.com${location.pathname}`
  console.log(post)
  return (
    <>
      <ContentWrapper>
        <SpringFadeUp>
        {post.title ? (
            <CobuyTitle alignContent="left" fontSize="normal">
              {post.title}
            </CobuyTitle>
        ) : null}
        {post.authorInfo ? (
           <AuthorInfo>
             <AuthorImage alt="author-image"
                          fixed={post.authorInfo.image.fixed}
            />
             <AuthorName><span>by</span> {post.authorInfo.name}</AuthorName>
           </AuthorInfo>
        ) : null}
        <Img
          alt="example"
          fluid={post.image.fluid}
        />
        {post.categories ? (
          <CobuyKicker>
            {post.categories.map((category, index) => {
              return <span key={index}>{category.name} </span>
            })}
          </CobuyKicker>
        ) : null}
          
        {post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html ? (
          <ContentBody
            dangerouslySetInnerHTML={{ __html: `<div> ${post.childContentfulBlogPostBodyTextNode.childMarkdownRemark.html} </div>` }}
          />
        ) : null}
        </SpringFadeUp>
      </ContentWrapper>
      <ShareLinks>
            <h4>Share this article</h4>
            <IconsWrapper>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={40} round={true}></FacebookIcon>
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={40} round={true}></TwitterIcon>
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={40} round={true}></LinkedinIcon>
              </LinkedinShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={40} round={true}></EmailIcon>
              </EmailShareButton>
            </IconsWrapper>
      </ShareLinks>
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
  .gatsby-resp-image-link {
    margin:32px;
  }
  p {
    margin:0.6em 0;
  }
  
`

export const IconWrapper = styled.span`
  padding: 0 8px ;
`

export const CobuyKicker = styled.h5``

export const CobuyTitle = styled.h3`
  margin:1em 0;
  font-weight:800;
  text-align:center;
  font-size:42px;
`
export const ShareLinks = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin-bottom:2em;
  h4 {
    color: #3c484e;
    margin-bottom:1.2em;
  }
  button {
    outline:none;
  }
`

export const IconsWrapper = styled.div`
  width:100%;
  max-width:180px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:0 auto;
`

export const AuthorInfo = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin:1.2em auto;
  max-width:210px;
`

export const AuthorImage = styled(Img)`
  border-radius:50%;
`

export const AuthorName = styled.span`
  font-weight:600;
  span {
    font-weight:400;
  }
`