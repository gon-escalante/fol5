import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  background-color: lightblue;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

const NavBar = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  border-bottom: solid 1px blue;
`;

const Title = styled.span`
  font-size: 3em;
  font-weight: 800;
  font-family: 'Fredoka One', cursive;
  align-self: start;
  margin-left: 15px;
  padding-right: 10px;
  border-right: solid 1px blue;
  border-radius: 5px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <PageWrapper>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
        body {
          margin: 0;
        }
      `}</style>
      <NavBar>
        <Title>oh hai fren</Title>
        <span>asdff</span>
        <span>asdff</span>
        <span>asdff</span>
      </NavBar>
      <span>asdf</span>
      <span>asdf</span>
      {children}
    </PageWrapper>
  );
};

export default Layout;
