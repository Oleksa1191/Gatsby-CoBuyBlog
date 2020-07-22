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
             <AuthorImageWrapper>
              <AuthorImage alt="author-image"
                            fixed={post.authorInfo.image.fixed}
              />
              <AuthorName><span>By</span> {post.authorInfo.name}</AuthorName>   
            </AuthorImageWrapper>
            <AuthorSocials>
              <a href="#">
                <FacebookIcon size={32} round={true}></FacebookIcon>
              </a>
              <a href="#">
                <TwitterIcon size={32} round={true}></TwitterIcon>
              </a>
             
            </AuthorSocials>
            
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

const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  height: auto;
  max-width: 970px;
  padding: 64px;
  box-sizing: border-box;
`

const ContentBody = styled.div`
  margin-top:1.2em;
  font-family:Lato;
  font-size: 18px;
  letter-spacing: 1.5;
  line-height: 27px;
  padding-bottom: 61px;
  border-bottom: 1px solid #444444;
  color:#444444;
  h1 {
    margin:1.7em 0;
    color:#444444;
    font-weight: 700;
    font-size:42px;
    line-height:1;
  }
  h2 {
    margin:1.5em 0;
    color:#444444;
    font-weight: 700;
  }
  h3 {
    margin: .5em 0 .2em;
    color:#444444;
    font-weight: 700;
  }
  p {
    margin:1.5em 0;
    font-size:20px;
    line-height:1.65em;
  }
  a {
    color: #3899da;
    text-decoration:none;
  }
  a:hover {
    text-decoration:underline;
  }
  
  .gatsby-resp-image-link {
    margin-bottom:64px;
  }
  ol {
    margin-left:16px;
  }
  ul {
    li {
      margin: .8em 0;
      line-height: 1.6em;
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
  .button {
    margin:0 auto !important;
    display:block !important;
    max-width:150px  !important;
    margin-top:2rem !important;
  }
`


const CobuyKicker = styled.h5``

const CobuyTitle = styled.h3`
  margin-bottom: 1.66667vw;
  font-weight:800;
  text-align:center;
  font-size: 51.957px;
  color:#3899da;
  text-align:left;
`
const ShareLinks = styled.div`
  max-width: 842px;
  margin:0 auto;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-bottom:2em;
  h4 {
    color: #3c484e;
    
  }
  button {
    outline:none;
  }
`

const IconsWrapper = styled.div`
  width:100%;
  max-width:180px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:0 auto;
`

const AuthorInfo = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin:3.75vw 1vw;
  color:#444444;
`

const AuthorImageWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;
  width:210px;  
`

const AuthorSocials =styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-start;
  width:72px; 
`

const AuthorImage = styled(Img)`
  border-radius:50%;
`

const AuthorName = styled.span`
  font-weight:600;
  margin-top:2px;
  span {
    font-weight:400;
  }
`