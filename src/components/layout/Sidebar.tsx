import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import {
  Home as HomeIcon,
  People as PeopleIcon,
  Help as HelpIcon,
  Update as UpdateIcon,
} from '@mui/icons-material';

const DRAWER_WIDTH = 240;

const StyledDrawer = styled(Drawer)({
  width: DRAWER_WIDTH,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: DRAWER_WIDTH,
    boxSizing: 'border-box',
    border: 'none',
    backgroundColor: '#ffffff',
  },
});

const StyledListItem = styled(ListItem)<{ active?: boolean }>(({ active }) => ({
  margin: '4px 8px',
  borderRadius: '8px',
  cursor: 'pointer',
  backgroundColor: active ? '#E8F1FF' : 'transparent',
  color: active ? '#0052CC' : 'inherit',
  '&:hover': {
    backgroundColor: active ? '#E8F1FF' : '#F5F5F5',
  },
  '& .MuiListItemIcon-root': {
    color: active ? '#0052CC' : 'inherit',
  },
}));

const navigationItems = [
  { path: '/', label: 'Dashboard', icon: <HomeIcon /> },
  { path: '/sellers', label: 'Sellers', icon: <PeopleIcon /> },
  { path: '/support', label: 'Support', icon: <HelpIcon /> },
  { path: '/faq', label: 'FAQ & Update', icon: <UpdateIcon /> },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <StyledDrawer variant="permanent">
      <Box sx={{ p: 3 }}>
        <Box mb={{ display: 'flex', alignItems: 'center', mb: 2,
          width:'500px',
          height: '100px'}}>
          
          <img src="data:image/jpeg;base64,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" alt="Indiazona" style={{ height: 205 }} />
        </Box>
        <Typography variant="body2" color="rgba(37, 49, 118, 0.6)">
          palthya swaroopa
          Swaroopa25@gmail.com
        </Typography>
      </Box>

      <List sx={{ px: 2 }}>
        {navigationItems.map((item) => (
          <StyledListItem
            key={item.path}
            active={location.pathname === item.path}
            onClick={() => navigate(item.path)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </StyledListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default Sidebar;