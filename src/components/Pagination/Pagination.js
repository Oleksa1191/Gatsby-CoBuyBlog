import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from "styled-components"


const Pagination = ({ pageContext }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? `/` : `/` + (currentPage - 1).toString()
    const nextPage = `/` + (currentPage + 1).toString()
    console.log(prevPage)
    console.log(nextPage)
    console.log(currentPage)
    return (
        <StyledPagination className="pagination" role="navigation">
            <ButtonNav>
                {!isFirst && (
                    <Link to={prevPage}>Previous</Link>
                )}  
            </ButtonNav>
            {numPages > 1 && <div>Page {currentPage} of {numPages}</div>}
            <ButtonNav>
                {!isLast && (
                    <Link to={nextPage} rel="next">
                            Next
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
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    max-width:1200px;
    width:100%;
    margin:2rem auto;
    font-size:18px;
`

const ButtonNav = styled.div`
    width:40px;
    a {
        padding:10px 15px;
        color:#3899da;
        border: 1px solid #3899da;
        border-radius:3px;
    }
`