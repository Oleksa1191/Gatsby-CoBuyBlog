import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'


export const Header = props => {
  
  const isBrowser = typeof window !== `undefined`
  const [scrollPos, setscrollPos] = useState(0)
  const [show, setShow] = useState(true)
  const handleScroll = e => {
    let bodyOffset = document.body.getBoundingClientRect().top
    setscrollPos(bodyOffset)
    if (bodyOffset < 0) {
      if (document.body.getBoundingClientRect().top > scrollPos) {
        setShow(true)
      } else {
        setShow(false)
      }
    } 
  }

  useEffect(() => {
    if (!isBrowser) return null
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  
  return (
    <>
      <StyledHeader> 
            <LogoWrapper className="site-mast-left">
                <Link to="/"> 
                    <img
                        src="./logo-blue.png"
                        alt="cobuy-logo"
                    />
                </Link>
            </LogoWrapper>
            <LinksWrapper className="site-mast-right">
              <Link to="/about" className="">
                  <div>
                      <LinkHeader>
                          About
                      </LinkHeader>
                  </div>
              </Link>

              <Link to="/" className="mr-3">
                  <div>
                      <LinkHeader>
                          CoBuyer Stories
                      </LinkHeader>
                  </div>
              </Link>
              <a
                  href="https://form.typeform.com/to/w8bOOQJL"
                  className="ml-5 outline-none"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <StyledButton
                      className="bg-green hover:bg-hovergreen transition duration-100 py-3 px-6 text-white text-sm outline-none"
                      style={{ color: "white", borderRadius: "10px" }}
                  >
                      Learn More
                  </StyledButton>
              </a>
            </LinksWrapper>
      </StyledHeader>
      <Transition>
        <Submenu className={show ? "active" : "hidden"}>
          <ul>
            <li>links list for categories</li>
          </ul>
        </Submenu>
      </Transition>
    </>
  )
}


const StyledHeader =  styled.header`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:0 32px;
  position: fixed;
  width: 100%;
  height:80px;
  background:#ffffff;
  z-index:1024;
  a {
    text-decoration:none;
  }
`

const LogoWrapper = styled.div`
  max-width:100px;
  width:100%;
  height:auto;
`

const LinksWrapper = styled.div`
  width:100%;
  max-width:500px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
`

const StyledButton = styled.button`
  background-color:#9cd64b;
  border-radius:4px !important;
  border:none;
  outline:none;
  padding:16px 24px;
  transition: all .1s ease-in;
  font-size:16px;
  box-shadow:border-box;
  border:1px solid #ffffff !important;
  :hover {
    background-color:#ffffff;
    color:#9cd64b !important;
    border:1px solid #9cd64b !important;
    margin-top:2.2px;
  }
`
 
const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all .3s ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all .3s ease-out;
    transform: translate(0, -100%);
  }
`

const Submenu = styled.div`
  width:100%;
  border-top:0.5px solid #dde6ee;
  border-bottom:0.5px solid #dde6ee;
  position:fixed;
  top:80px;
  height:44px;
  display:flex;
  flex-direction:row;
  justify-content:flex-end;
  align-items:center;
  z-index:100;
  background:#ffffff;
  padding:0 32px;
  color:#4B535F;
  
`

const LinkHeader = styled.span`
  color:#4B535F;
  text-decoration:none;
  position:relative;
  padding-bottom:4px;
  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #4B535F;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }
  :hover:after {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`

