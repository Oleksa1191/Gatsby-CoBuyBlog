import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NavbarLinks = () => {
  return (
    <>
      <Link to="/" className="" activeClassName="active">
        <div>
            <LinkHeader>
                Home
            </LinkHeader>
        </div>
      </Link>
      <Link to="/about" className="" activeClassName="active">
        <div>
            <LinkHeader>
                About
            </LinkHeader>
        </div>
      </Link>

      <Link to="/co-buyer-stories" className="mr-3" activeClassName="active">
        <div>
            <LinkHeader>
                CoBuyer Stories
            </LinkHeader>
        </div>
      </Link>
      <Link to="/refer-a-friend" className="mr-3" activeClassName="active">
        <div>
            <LinkHeader>
                Refer a Friend
            </LinkHeader>
        </div>
      </Link>
      
    </>
  )
}

export default NavbarLinks




const LinkHeader = styled.span`
  color:#4B535F;
  text-decoration:none;
  position:relative;
  padding-bottom:4px;
  font-size:18px;
  line-height:64px;
  font-family:Quicksand;
  font-weight:500;
  :hover {
    color:#3899da;
  }
  @media (max-width: 576px) {
    line-height:16px;
  }
  
`