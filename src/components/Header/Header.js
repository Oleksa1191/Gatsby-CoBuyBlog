import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'
import NavLinks from './NavLinks'

export const Header = props => {
  const [navbarOpen, setNavbarOpen] = useState(false)

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
            <ContainerNavigation>
              <Toggle
                navbarOpen={navbarOpen}
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                {navbarOpen ? <Hamburger open /> : <Hamburger />}
              </Toggle>
            <LogoWrapper>
                <Link to="/"> 
                    <img
                        src={'/header-icon.png'}
                        alt="cobuy-logo"
                    />
                </Link>
            </LogoWrapper>
            {navbarOpen ? (
              
                 <Navbox >
                    <NavLinks />
                  </Navbox>
              
            ) : (
              
                <Navbox  open>
                    <NavLinks />
                </Navbox>
              
            )}
            <a
              href="https://form.typeform.com/to/w8bOOQJL"
              className="ml-5 outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledButton
                  style={{ color: "white", borderRadius: "10px" }}
              >
                      Learn More
              </StyledButton>
            </a>
            </ContainerNavigation>
            
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

const StyledButton = styled.button`
  background-color:#EBF2FF;
  border-radius:4px !important;
  border:none;
  outline:none;
  padding:8px 12px;
  transition: all .1s ease-in;
  font-size:14px;
  box-shadow:border-box;
  color:#2264D1 !important;
  font-family:Roboto;
  font-weight:500;
  text-transform:uppercase;
  font-family:Quicksand;
  :hover {
    box-shadow: 0px 4px 8px #C4DAFF;
  }
`


const StyledHeader =  styled.header`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  position: fixed;
  width: 100%;
  height:64px;
  background:#ffffff;
  z-index:1024;
  box-shadow: 0 2px 4px #D2D2D6;
  a {
    text-decoration:none;
  }
  @media (max-width: 768px) {
    padding:0;
  }
`

const LogoWrapper = styled.div`
  max-width:180px;
  width:100%;
  height:auto;
  @media (max-width: 768px) {
    max-width:120px;
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
  display:none;
`



const ContainerNavigation = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  padding:0 32px;
  max-width:1280px;
  margin:0 auto;
  width:100%;
  @media (max-width: 768px) {
    padding:0;
    justify-content:space-around;
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items:center;
  justify-content:space-between;
  width:100%;
  max-width:590px;
  .active {
    border-bottom:3px solid #3899da !important;
  }
  a {
    div {
      padding:0 16px;
      transition: all .1s ease-out;
      box-sizing:border-box;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
    a {
      
      @media (max-width: 768px) {
        padding: 20px 0;
        font-size: 1.5rem;
        z-index: 6;
        
      }
      
    }
    
  }
`


