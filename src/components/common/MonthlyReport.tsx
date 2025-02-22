import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  styled,
  Theme,
} from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';


const ResponsiveWrapper = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  '& .MuiTable-root': {
    minWidth: 750,
  },
  [theme.breakpoints.down('sm')]: {
    margin: theme.spacing(1, 0),
    '& .MuiTableCell-root': {
      padding: theme.spacing(1),
      '&:last-child': {
        paddingRight: theme.spacing(1),
      },
    },
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '12px 16px',
  '&.MuiTableCell-head': {
    backgroundColor: '#ffffff',
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1),
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: 'rgba(141, 171, 216, 0.1)',
  },
  '& td': {
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      whiteSpace: 'normal',
    },
  },
}));

interface MonthlyData {
  id: string;
  name: string;
  mobile: string;
  totalSales: string;
  totalOrders: number;
  yourShare: string;
}

const monthlyData: MonthlyData[] = [
  {
    id: 'IZS098',
    name: 'Shashi',
    mobile: '+91 9876543210',
    totalSales: '₹4,750',
    totalOrders: 48,
    yourShare: '₹483.34',
  },
  {
    id: 'IZS099',
    name: 'Rahul',
    mobile: '+91 9876543210',
    totalSales: '₹3,250',
    totalOrders: 32,
    yourShare: '₹325.00',
  },
];

const MonthlyReport: React.FC = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      <ResponsiveWrapper>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Seller ID</StyledTableCell>
                <StyledTableCell>Seller Name</StyledTableCell>
                <StyledTableCell>Mobile</StyledTableCell>
                <StyledTableCell>Total Sales</StyledTableCell>
                <StyledTableCell>Total Orders</StyledTableCell>
                <StyledTableCell>Your Share</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {monthlyData.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.mobile}</StyledTableCell>
                  <StyledTableCell>{row.totalSales}</StyledTableCell>
                  <StyledTableCell>{row.totalOrders}</StyledTableCell>
                  <StyledTableCell>{row.yourShare}</StyledTableCell>
                  <StyledTableCell>
                    <Button
                      startIcon={<DownloadIcon />}
                      sx={{
                        color: '#0052CC',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 82, 204, 0.04)',
                        },
                      }}
                    >
                      Download
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ResponsiveWrapper>
    </Box>
  );
};

export default MonthlyReport;
