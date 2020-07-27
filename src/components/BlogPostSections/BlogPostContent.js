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
              <PostInfo>
                <AuthorName><span>By</span> {post.authorInfo.name}</AuthorName>   
              </PostInfo>
            </AuthorImageWrapper>
            
            
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
  max-width: 684px;
  padding: 24px 0 64px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding:32px 16px 0;
  }
`

const ContentBody = styled.div`
  margin-top:1.2em;
  font-family:Roboto;
  font-size: 18px;
  letter-spacing: 1.5;
  line-height: 27px;
  
  color:#19191D;
  h1 {
    margin:1.7em 0;
    font-family:Roboto;
    color:#19191D;
    font-weight: 700;
    font-size:42px;
    line-height:1;
  }
  h2 {
    margin:1.5em 0;
    font-family:Roboto;
    color:#19191D;
    font-weight: 700;
    font-size: 36px;
  }
  h3 {
    margin: .5em 0 .2em;
    font-family:Roboto;
    color:#19191D;
    font-weight: 700;
    font-size: 32px;
  }
  h4 {
    font-family:Roboto;
    color:#19191D;
    font-weight: 700;
    font-size: 28px;
  }
  p {
    margin:1.5em 0;
    font-family:Roboto;
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

  @media (max-width: 768px) {
    padding-bottom: 32px;
    h1 {
      margin:1.2em 0;
      font-weight: 700;
      font-size:34px;
    }
    h2 {
      margin:0.9em 0;
      color:#444444;
      font-size:28px;
    }
    h3 {
      margin: .7em 0 .2em;
      color:#444444;
      font-size:24px;
    }
    p {
      margin:0.5em 0;
      font-size:20px;
      line-height:1.65em;
    }
  }
`


const CobuyKicker = styled.h5``

const CobuyTitle = styled.h3`
  margin-bottom: 1.66667vw;
  font-weight:800;
  text-align:center !important;
  font-size: 36px;
  line-height:44px;
  color:#19191D;
  text-align:left;
  font-family:Quicksand;
  @media (max-width: 768px) {
    font-size: 32px;
    padding:16px 0;
  }
`
const ShareLinks = styled.div`
  max-width: 684px;
  margin:0 auto;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-bottom: -64px;
  position:relative;
  z-index:1000;
  h4 {
    color:#19191D;
    font-size:24px;
    line-height:32px;
    font-weight:700;
    font-family:Quicksand;  
  }
  button {
    outline:none;
  }
  @media (max-width: 768px) {
    padding: 0 16px;
    margin:0.8em auto;
    svg {
      width:32px;
      height:32px;
    }
    h4 {
      margin-bottom:0;
    }
  }
`

const IconsWrapper = styled.div`
  width:100%;
  max-width:220px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;

`

const AuthorInfo = styled.div`
  width:100%;
  max-width:250px;
  margin:48px auto;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  color:#444444;
`

const AuthorImageWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  max-width:320px;
  
`



const AuthorImage = styled(Img)`
  border-radius:50%;
`

const AuthorName = styled.span`
  font-family:Quicksand;
  font-weight:600;
  margin-top:2px;
  font-size:16px;
  font-weight:700;
  color:#19191D;
  span {
    font-weight:400;
  }
`



const PostInfo = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:16px;
`