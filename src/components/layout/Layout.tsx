import React from 'react';
import { Box, styled } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';

const LayoutRoot = styled(Box)({
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
  width: '100%',
});

const LayoutContent = styled(Box)({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: '#F8F9FA',
});

const MainContent = styled(Box)({
  flex: '1 1 auto',
  width: '100%',
  overflow: 'auto',
  padding: '24px',
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutRoot>
      <Sidebar />
      <LayoutContent>
        <Header />
        <MainContent>
          {children}
        </MainContent>
      </LayoutContent>
    </LayoutRoot>
  );
};

export default Layout;
