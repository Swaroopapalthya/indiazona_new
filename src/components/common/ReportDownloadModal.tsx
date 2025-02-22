import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  styled,
  Tabs,
  Tab,
  InputAdornment,
} from '@mui/material';
import { Close as CloseIcon, Search as SearchIcon } from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import MonthlyReport from './MonthlyReport';

interface ReportDownloadModalProps {
  open: boolean;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '12px',
    width: '100%',
    maxWidth: '900px',
  },
}));

const StyledTab = styled(Tab)({
  textTransform: 'none',
  minWidth: 'auto',
  padding: '12px 24px',
  '&.Mui-selected': {
    color: '#0052CC',
  },
});

const years = [2025, 2024, 2023];

const ReportDownloadModal: React.FC<ReportDownloadModalProps> = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setActiveTab(newValue);
  };

  const handleDownload = () => {
    // Implement download logic based on activeTab and selected dates
    onClose();
  };

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="md">
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Download Report</Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            mb: 3,
            '& .MuiTabs-indicator': {
              backgroundColor: '#0052CC',
            },
          }}
        >
          <StyledTab value="monthly" label="Monthly" />
          <StyledTab value="yearly" label="Yearly" />
          <StyledTab value="custom" label="Custom range" />
        </Tabs>

        {activeTab === 'monthly' && (
          <Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Search via seller name"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <MonthlyReport />
          </Box>
        )}

        {activeTab === 'yearly' && (
          <List>
            {years.map((year) => (
              <ListItem
                key={year}
                button
                sx={{
                  borderRadius: 1,
                  mb: 1,
                  bgcolor: 'rgba(141, 171, 216, 0.2)',
                  '&:hover': {
                    bgcolor: 'rgba(141, 171, 216, 0.3)',
                  },
                }}
              >
                <ListItemText 
                  primary={year} 
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      color: '#0052CC',
                    }
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}

        {activeTab === 'custom' && (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Select a custom date range for which you want to download the earning history.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <DatePicker
                  label=" Select Start Date"
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                  sx={{ flex: 1 }}
                />
                <DatePicker
                  label=" Select End Date"
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                  sx={{ flex: 1 }}
                />
              </Box>
              <TextField
                fullWidth
                placeholder="Search via seller name"
                size="small"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon color="action" />
                    </InputAdornment>
                  ),
                }}
                sx={{ mt: 2 }}
              />
              <Button
                variant="contained"
                
                onClick={handleDownload}
                sx={{
                  mt: 2,
                  bgcolor: '#0052CC',
                  '&:hover': {
                    bgcolor: '#0043A4',
                  },
                  width: '100px', 
                  display: 'block', 
                  margin: '0 auto',
                  paddingleft:'40px',
                  paddingRight:'40px',
                }}
              >
                Download
              </Button>
            </Box>
          </LocalizationProvider>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

export default ReportDownloadModal;
