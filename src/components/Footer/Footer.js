import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "react-share";


export const Footer = () => {
  return (

      <StyledFooter>
          <WraperContent>
              <WrapperLogo>
                  <li className="font-bold text-md text-white mb-10">
                      <a
                          href="https://www.gocobuy.com"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                         <LogoImage src={'/cobuy.png'} alt="footer-logo" />
                      </a>
                  </li>
                  <TextFooter>
                          Buy a home together, intelligently.
                  </TextFooter>
              </WrapperLogo>
              <WrapperLinks>
                  <ul>
                      <HeadingFooter >
                          Contact Us
                      </HeadingFooter>
                      <TextFooter>
                          <a href="mailto:hello@gocobuy.com">
                              hello@gocobuy.com
                          </a>
                      </TextFooter>
                      <TextFooter className="text-white">
                          <a
                              href="tel:206-651-5551"
                          >
                            206-651-5551
                          </a>
                      </TextFooter>
                  </ul>
                  <ul>
                      <HeadingFooter>
                          Company
                      </HeadingFooter>
                      <TextFooter>
                          <Link
                              to="/about"
                          >
                              About
                          </Link>
                      </TextFooter>
                      <TextFooter className="">
                          <Link
                              to="/co-buyer-stories"
                          >
                              CoBuyer Stories
                          </Link>
                      </TextFooter>
                      <TextFooter className="">
                          <Link
                              to="/"
                          >
                              Refer a Friend
                          </Link>
                      </TextFooter>
                  </ul>
                  <ul >
                      <HeadingFooter >
                          Legal
                      </HeadingFooter>
                      <TextFooter >
                          <Link
                              to="/privacy-policy"
                          >
                              Privacy Policy
                          </Link>
                      </TextFooter>
                      <TextFooter >
                          <Link
                              to="/terms-of-use"
                          >
                              Terms of Use
                          </Link>
                      </TextFooter>
                  </ul>
                  <ul >
                      <HeadingFooter >
                          Follow
                      </HeadingFooter>
                      
                      <WrapperIcons>
                          <a
                              href={`https://www.facebook.com/CoBuyUSA/`}
                              target="_blank"
                              rel="noopener noreferrer"
                          >
                              <FacebookIcon
                                  size={30}
                                  round={true}
                              />
                          </a>
                          <a
                              href={`https://twitter.com/gocobuy`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-5"
                          >
                              <TwitterIcon
                                  size={30}
                                  round={true}
                              />
                          </a>

                          <a
                              href={`https://www.linkedin.com/company/cobuy/`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-5"
                          >
                              <LinkedinIcon
                                  size={30}
                                  round={true}
                              />
                          </a>
                      </WrapperIcons>
                    
                  </ul>
              </WrapperLinks>
          </WraperContent>
          <FooterInfo>
              © {new Date().getFullYear()} CoBuy, Inc.
          </FooterInfo>
      </StyledFooter> 
  )
}

const StyledFooter =  styled.footer`
  padding: 30px 0 30px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.3rem;
  background: var(--color-base);
  a {
    font-weight:300;
  }
   
`

const TextFooter = styled.li`
  font-family:Quicksand;
  font-size:16px;
  line-height:32px !important;
  color:#ffffff;
  font-weight:400;
  opacity:0.95;
  margin-bottom:24px !important;
  a {
    font-size:14px;
  }
`

const HeadingFooter = styled.li`
  font-family:Quicksand;
  font-size:24px;
  line-height:32px;
  color:#ffffff;
  opacity:0.95;
  font-weight:700;
  margin-bottom:24px !important;
  letter-spacing:0.15px;
`

const WraperContent = styled.div`
  display:flex;
  flex-direction:row; 
  align-items:flex-start;
  justify-content:center;
  padding-top: 5rem;
  margin-bottom: 2.5rem;
  @media (max-width:1080px) {
    flex-direction:column; 
    align-items:center;
  } 
  @media (max-width:600px) {
    align-items:flex-start;
    padding:0 32px;
  }
`

const WrapperLinks = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  a {
    color:white;
    text-decoration:none;
    transition: all .4s ease-out;
    :hover {
      color:#3899da;
      text-decoration:underline;
    }
  }
  ul {
    padding: 0 1.7em 0 1.3em;
    @media (max-width:800px) {
      width:33%;
      margin-bottom:2rem;
    }
    @media (max-width:600px) {
      width:90%;
      padding:0;
    }
  }
  @media (max-width:1080px) {
    justify-content:space-between;
    
  }
  @media (max-width:800px) {
    flex-wrap:wrap;  
  }
  @media (max-width:600px) {
    flex-direction:column;
  }
`

const WrapperLogo = styled.div`
  width:100%;
  max-width:200px;
  li  {
    list-style:none;
  }
  img {
    margin-bottom:16px;
  }
  @media (max-width:1080px) {
    padding: 0 1.5em 0 1.3em;
    max-width:250px;
    margin-bottom:2rem;
  }
  @media (max-width:600px) {
    padding:0 ;
  }
`

const FooterInfo = styled.div`
  text-align:center;
  margin:0 auto;
  padding-bottom:2.5rem;
  color: hsla(0,0%,100%,.7);
  font-size:13px;
`

const WrapperIcons = styled.div`
  display:flex;
  flex-direction:row;
  width:115px;
  justify-content:space-between;
  margin-top:24px;
  align-items:center;
  a {
    height:30px;
  }
`

const LogoImage= styled.img`
  max-width:100px;
  @media (max-width:1080px) {
    max-width:250px;
  }
` 




