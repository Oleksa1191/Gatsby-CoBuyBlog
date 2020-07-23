import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from "styled-components"


const Pagination = ({ pageContext }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/` : `/` + (currentPage - 1).toString()
    const nextPage = `/` + (currentPage + 1).toString()
    if (numPages <= 1) {
        return null
    }

    const createPaginationObjects = (length, page, increment = 2) =>
    Array.from({ length }, (_, i) => ({
      link: `/${i + increment}/`,
      index: i + increment,
      current: page === i + increment,
    }));

  let navItems = [
    {
      link: `/`,
      index: 1,
      current: currentPage === isFirst,
    },
  ];
  if (numPages <= 5) {
    navItems = [
      ...navItems,
      ...Array.from({ length: numPages - 1 }, (_, i) => ({
        link: `/${i + 2}/`,
        index: i + 2,
        current: currentPage === i + 2,
      })),
    ];
  } else {
    if (currentPage <= 3) {
      navItems = [
        ...navItems,
        ...createPaginationObjects(3, currentPage),
        {
          separator: true,
          index: 'starter-separator',
        },
        {
          link: `/${numPages}/`,
          index: numPages,
          current: false,
        },
      ];
    } else if (currentPage > numPages - 3) {
      // If the current one is closer to the last one
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'finisher-separator',
        },
        ...createPaginationObjects(4, currentPage, numPages - 3),
      ];
    } else {
      navItems = [
        ...navItems,
        {
          separator: true,
          index: 'starter-separator',
        },
        ...createPaginationObjects(3, currentPage, currentPage - 1),
        {
          separator: true,
          index: 'finisher-separator',
        },
        {
          link: `/${numPages}/`,
          index: numPages,
          current: false,
        },
      ];
    }
  }
    return (
        <StyledPagination className="pagination" role="navigation">
            <ButtonNav>
                {!isFirst && (
                    <Link to={prevPage}>
                      <span>
                        &lt;
                      </span>
                    </Link>
                )}  
            </ButtonNav>
            {navItems.map((item, i) => (
                <PaginationList>
                {item.separator ? (
                    
                    <PaginationSeparator>...</PaginationSeparator>
                    
                ) : (
                    <PaginationItem current={currentPage === item.index} key={i} to={item.link}>
                    {currentPage === item.index ? (
                        <span>{item.index}</span>
                    ) : (
                        <Link to={item.link}>{item.index}</Link>
                    )}
                    </PaginationItem>
                )}
                </PaginationList>
            ))}
            <ButtonNav>
                {!isLast && (
                    <Link to={nextPage} rel="next">
                      <span>
                        &gt;
                      </span>
                            
                    </Link>
                )}
            </ButtonNav>
            
        </StyledPagination>
    )
}

Pagination.propTypes = {
    pageContext: PropTypes.object.isRequired,
}

export default Pagination


const StyledPagination = styled.div`
    margin-left: -12px;
    margin-right: -12px;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    max-width:128px;
    width:100%;
    margin:2rem auto;
    font-size:18px;
    @media (max-width: 768px) {
        padding:0 16px;
    ul,li {
        margin-bottom:0 !important;
    }
`

const ButtonNav = styled(Link)`
    span {
      min-width: 28px;
      height: 28px;
      display: flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      background-color: #EBF2FF;
    }
    a {
        color:#2264D1;
        
    }
`

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding-left:0 !important;
  @media (max-width: 576px) {
    height: 36px;
    
  }
`
export const PaginationSeparator = styled.li`
    min-width: 16px;
    min-height: 48px;
    font-weight: 400;
    margin:0 -8px;
    text-align: center;
    border-top: 1ps solid transparent;
    text-decoration: none;
    font-family: Sofia Pro;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #90ca49;
    @media (max-width: 576px) {
    margin:0;
    }
`

export const PaginationItem = styled(Link)`
  min-width: 28px;
  height: 28px;
  font-weight: 400;
  margin: 0 8px;
  text-align: center;
  border-top: 1ps solid transparent;
  text-decoration: none;
  font-family: Roboto;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2264D1;
  background-color:#ffffff;
  border-radius:50%;
  @media (max-width: 576px) {
    min-width: 36px;
    height: 36px;
    margin:0 4px;
  }

  
  a {
    color: #2264D1;
    text-decoration: none;
    box-shadow: none;
  }
  ${({ current }) =>
    current &&
    css`
      background-color: #EBF2FF;
      color: #2264D1;
      a {
      }
    `}
`