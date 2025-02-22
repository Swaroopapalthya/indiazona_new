import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Avatar,
  Button,
  styled,
  Menu,
  MenuItem,
} from '@mui/material';
import { Notifications, Language as LanguageIcon, KeyboardArrowDown } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  zIndex: theme.zIndex.drawer + 1,
}));

const LanguageButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.text.primary,
  padding: '4px 12px',
  minWidth: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 8,
    marginTop: 8,
    minWidth: 120,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  },
}));

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  { code: 'en', name: '', nativeName: 'Eng' },
  { code: 'hi', name: '', nativeName: 'Hi' },
];

const Header: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<LanguageOption>(languages[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (language: LanguageOption) => {
    setSelectedLang(language);
    handleClose();
  };

  return (
    <StyledAppBar position="fixed" sx={{ width: `calc(100% - 240px)`, ml: '240px' }}>
      <Toolbar sx={{ justifyContent: 'flex-end', gap: 2 }}>
        <IconButton
          size="large"
          sx={{ 
            backgroundColor: 'rgba(122, 133, 194, 0.2)',
            '&:hover': {
              backgroundColor: 'rgba(63, 81, 181, 0.08)',
            }
          }}
        >
          <Notifications sx={{ color: '#3F51B5' }} />
        </IconButton>

        <LanguageButton
          onClick={handleClick}
          startIcon={<LanguageIcon />}
          endIcon={<KeyboardArrowDown />}
          sx={{ 
            backgroundColor: 'rgba(63, 81, 181, 0.04)',
            '&:hover': {
              backgroundColor: 'rgba(63, 81, 181, 0.08)',
            }
          }}
        >
          {selectedLang.nativeName}
        </LanguageButton>

        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {languages.map((language) => (
            <MenuItem
              key={language.code}
              selected={language.code === selectedLang.code}
              onClick={() => handleLanguageSelect(language)}
              sx={{
                minHeight: 32,
                px: 2,
                py: 1,
                '&:hover': {
                  backgroundColor: 'rgba(63, 81, 181, 0.04)',
                },
                '&.Mui-selected': {
                  backgroundColor: 'rgba(63, 81, 181, 0.08)',
                  '&:hover': {
                    backgroundColor: 'rgba(63, 81, 181, 0.12)',
                  },
                },
              }}
            >
              <Typography variant="body2">
                {language.nativeName} ({language.name})
              </Typography>
            </MenuItem>
          ))}
        </StyledMenu>

        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 1,
          backgroundColor: 'rgba(63, 81, 181, 0.04)',
          padding: '8px 16px',
          borderRadius: '8px',
        }}>
          <Avatar 
            sx={{ 
              width: 38, 
              height: 38,
              border: '2px solid #FFFFFF'
            }} 
            src='https://cdn-icons-png.flaticon.com/128/11696/11696620.png'
          />
          <Box>
            <Typography variant="subtitle2" color="rgba(13, 26, 110, 2)">
              Palthya swaroopa
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Dealer
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;