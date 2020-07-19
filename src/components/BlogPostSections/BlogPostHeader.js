import React from "react"
import styled from "styled-components"


const BlogPostHeader = ({ backgroundColor, ...otherProps }) => {
  
  return (
    <>
      <HeaderWrapper >
          <HeaderBackground backgroundColor={backgroundColor}>
          </HeaderBackground>
      </HeaderWrapper>
    </>
  )
}

export default BlogPostHeader

export const HeaderWrapper = styled.div`
  border-top: 2px solid #FFFFFF;
  border-bottom: 2px solid #FFFFFF;
  text-align: center;
  position:relative;
  width:100%;
  height:auto;
  min-height:565px;
  z-index:-1;
  top:0;
`

export const HeaderBackground = styled.div`
  background-color:${props => props.backgroundColor};
  width:100%;
  height:auto;
  min-height:565px;
  margin-top:96px;
`
