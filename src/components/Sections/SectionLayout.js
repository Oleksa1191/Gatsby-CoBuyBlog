import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const SectionLayout = ({children, alignContent, bgImg}) => {
  
  return (
    <Layout alignContent={alignContent} bgImg={bgImg}>
      <InnerContainer>
        {children}
      </InnerContainer>
    </Layout>
  );
};
export default SectionLayout;

SectionLayout.propTypes = {
  alignContent: PropTypes.string, // 'left', 'center', 'right', 'justify'
};

SectionLayout.defaultProps = {
  alignContent: 'center',
};


const InnerContainer = styled.div`
  width: 100%;
  padding-left: calc(5% - 16px);
  padding-right: calc(5% - 16px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  background-position: 0 114px;
  background-repeat: no-repeat;
  text-align: ${props => props.alignContent};
`;
