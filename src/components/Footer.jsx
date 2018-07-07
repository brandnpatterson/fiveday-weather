import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter className="bg-light text-white p-4 text-center">
      <a href="https://github.com/brandnpatterson">
        Copyright &copy; {new Date().getFullYear()} Brandon Patterson
      </a>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 60px;
  background-color: #f5f5f5;
`;

export default Footer;
