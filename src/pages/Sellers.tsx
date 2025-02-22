import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  CircularProgress,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

// Styled components
const PageContainer = styled(Box)({
  padding:'24px',
});

const SearchContainer = styled(Box)({
  position: 'absolute',
  width: '1000px',
  height: '48px',
  radius:'5px',
  border:'1.4px',
  left: '318px',
  top: '153px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const TableWrapper = styled(Box)({
  position: 'absolute',
  width: '1082px',
  height: '464px',
  left: '318px',
  top: '233px',
  border:'1px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  overflow: 'auto',
});

const StyledTableCell = styled(TableCell)({
  borderBottom: '1px solid #E5E7EB',
  padding: '4px 16px', 
  height: '40px', 
  '&.MuiTableCell-head': {
    backgroundColor: '#ffffff',
    fontWeight: 500,
    color: '#6B7280', 
  },
});

const LoadingOverlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.7)',
  zIndex: 1,
});

const DownloadButton = styled(Button)({
  color: '#3F51B5',
  textTransform: 'none',
  padding: '4px 8px',
  minWidth: 'auto',
  fontSize: '14px',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
});

const TabButton = styled(Button)<{ active?: boolean }>(({ active }) => ({
  flex: 1,
  backgroundColor: active ? '#0052CC' : '#F5F5F5',
  color: active ? '#FFFFFF' : '#666666',
  borderRadius: 0,
  padding: '12px',
  '&:hover': {
    backgroundColor: active ? '#0043A4' : '#E0E0E0',
  },
}));

const MonthBox = styled(Button)(({ theme }) => ({
  width: '90px',
  height: '90px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(63, 81, 181, 0.04)',
    borderColor: '#3F51B5',
  },
  '& .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
}));

const YearBox = styled(Button)(({ theme }) => ({
  width: '120px',
  height: '90px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: 'rgba(63, 81, 181, 0.04)',
    borderColor: '#3F51B5',
  },
  '& .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
}));

const sellersData = [
  {
    id: 'IZS098',
    name: 'Shashi',
    mobile: '+91 6345687632',
    totalSales: '₹ 4,750',
    totalOrders: 48,
    yourShare: '₹ 483.34',
  },
  {
    id: 'IZS098',
    name: 'Urmila Devi',
    mobile: '+91 6345687632',
    totalSales: '₹ 3,200',
    totalOrders: 32,
    yourShare: '₹ 183.34',
  },
  {
    id: 'IZS098',
    name: 'Ramesh Gupta',
    mobile: '+91 6345687632',
    totalSales: '₹ 2,950',
    totalOrders: 29,
    yourShare: '₹ 234.20',
  },
  {
    id: 'IZS098',
    name: 'Sunita Sharma',
    mobile: '+91 6345687632',
    totalSales: '₹ 4,300',
    totalOrders: 43,
    yourShare: '₹ 126.10',
  },
  {
    id: 'IZS098',
    name: 'Ajay Patel',
    mobile: '+91 6345687632',
    totalSales: '₹ 3,700',
    totalOrders: 37,
    yourShare: '₹ 455.34',
  },
  {
    id: 'IZS098',
    name: 'Pooja Verma',
    mobile: '+91 6345687632',
    totalSales: '₹ 2,500',
    totalOrders: 25,
    yourShare: '₹ 76.32',
  },
  {
    id: 'IZS098',
    name: 'Neha Jain',
    mobile: '+91 6345687632',
    totalSales: '₹ 3,700',
    totalOrders: 31,
    yourShare: '₹ 127.34',
  },
  {
    id: 'IZS098',
    name: 'Arun Thakur',
    mobile: '+91 6345687632',
    totalSales: '₹ 3,100',
    totalOrders: 28,
    yourShare: '₹ 483.34',
  },
  {
    id: 'IZS098',
    name: 'Kavita Mehra',
    mobile: '+91 6345687632',
    totalSales: '₹ 4,800',
    totalOrders: 48,
    yourShare: '₹ 899.34',
  }
];

const months = [
  { name: 'January', short: 'Jan' },
  { name: 'February', short: 'Feb' },
  { name: 'March', short: 'Mar' },
  { name: 'April', short: 'Apr' },
  { name: 'May', short: 'May' },
  { name: 'June', short: 'Jun' },
  { name: 'July', short: 'Jul' },
  { name: 'August', short: 'Aug' },
  { name: 'September', short: 'Sep' },
  { name: 'October', short: 'Oct' },
  { name: 'November', short: 'Nov' },
  { name: 'December', short: 'Dec' },
];

const years = [ 2024, 2023, 2022];

const Sellers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'MONTHLY' | 'YEARLY' | 'CUSTOM RANGE'>('MONTHLY');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleStartDateChange = (newValue: Date | null) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndDate(newValue);
  };

  // Filtering
  const filteredSellers = sellersData.filter(seller =>
    seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seller.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageContainer>
      <Typography variant="h6" marginTop={'50px'} sx={{ mb: 3 }}>Sellers list</Typography>
      
      <SearchContainer>
        <TextField
          placeholder="Search via seller name"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />,
          }}
          sx={{ width: '300px' }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          onClick={() => setIsDownloadDialogOpen(true)}
          sx={{ bgcolor: '#3F51B5' }}
        >
          Download
        </Button>
      </SearchContainer>

      <TableWrapper>
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                {[
                  { field: 'id', label: 'Seller ID' },
                  { field: 'name', label: 'Seller Name' },
                  { field: null, label: 'Mobile' },
                  { field: 'totalSales', label: 'Total Sales' },
                  { field: 'totalOrders', label: 'Total Orders' },
                  { field: 'yourShare', label: 'Your Share' },
                  { field: null, label: 'Earning History' },
                ].map(({ field, label }) => (
                  <StyledTableCell key={label}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      {label}
                    </Box>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSellers.map((seller, index) => (
                <TableRow key={index}>
                  <StyledTableCell>{seller.id}</StyledTableCell>
                  <StyledTableCell>{seller.name}</StyledTableCell>
                  <StyledTableCell>{seller.mobile}</StyledTableCell>
                  <StyledTableCell>{seller.totalSales}</StyledTableCell>
                  <StyledTableCell>{seller.totalOrders}</StyledTableCell>
                  <StyledTableCell>{seller.yourShare}</StyledTableCell>
                  <StyledTableCell>
                    <DownloadButton>Download</DownloadButton>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableWrapper>

      <Dialog 
        open={isDownloadDialogOpen} 
        onClose={() => setIsDownloadDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '8px',
            maxWidth: '600px',
          },
        }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Download Report</Typography>
            <IconButton 
              onClick={() => setIsDownloadDialogOpen(false)}
              sx={{ 
                color: '#666666',
                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.04)' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', mb: 1 }}>
            <TabButton
              active={activeTab === 'MONTHLY'}
              onClick={() => setActiveTab('MONTHLY')}
            >
              MONTHLY
            </TabButton>
            <TabButton
              active={activeTab === 'YEARLY'}
              onClick={() => setActiveTab('YEARLY')}
            >
              YEARLY
            </TabButton>
            <TabButton
              active={activeTab === 'CUSTOM RANGE'}
              onClick={() => setActiveTab('CUSTOM RANGE')}
            >
              CUSTOM RANGE
            </TabButton>
          </Box>

          {activeTab === 'MONTHLY' && (
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
              gap: 0.5,
              mt: 1,
              
            }}>
              {months.map((month) => (
                <MonthBox key={month.name}>
                  <Typography variant="subtitle2"  sx={{ mb: 0.5,height:5 }}>
                    {month.short}
                  </Typography>
                 
                  {/* <Typography variant="caption" color="text.secondary">
                    2025
                  </Typography> */}
                </MonthBox>
              ))}
              <Button
                  variant="contained"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 2,
                    bgcolor: 'text.secondary',
                    '&:hover': {
                      bgcolor: '#0043A4',
                      alignContent:'center',
                    },
                    
                  }}
                >
                  Download
                </Button>
            </Box>
          )}

          {activeTab === 'YEARLY' && (
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
              gap: 2,
              mt: 2,
            }}>
              {years.map((year) => (
                <YearBox key={year}>
                  <Typography variant="h6">
                    {year}
                  </Typography>
                </YearBox>

              ))}
              <Button
                  variant="contained"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1,
                    bgcolor: 'text.secondary',
                    '&:hover': {
                      bgcolor: '#0043A4',
                      alignItems:'center',
                    },
                    
                  }}
                >
                  Download
                </Button>
            </Box>
             
          )}

          {activeTab === 'CUSTOM RANGE' && (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Select a custom date range for which you want to download the earning history.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <DatePicker
                    label=" Select Start Date"
                    value={startDate}
                    onChange={handleStartDateChange}
                    sx={{ flex: 1 }}
                  />
                  <DatePicker
                    label=" Select End Date"
                    value={endDate}
                    onChange={handleEndDateChange}
                    sx={{ flex: 1 }}
                  />
                </Box>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  sx={{
                    mt: 1,
                    bgcolor: 'text.secondary',
                    '&:hover': {
                      bgcolor: '#0043A4',
                    },
                    
                  }}
                >
                  Download
                </Button>
              </Box>
            </LocalizationProvider>
          )}
        </DialogContent>
      </Dialog>
    </PageContainer>
  );
};

export default Sellers;