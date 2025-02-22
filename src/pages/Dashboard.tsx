import React, { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  IconButton,
} from '@mui/material';
import {
  Download as DownloadIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  ExpandMore as ExpandMoreIcon,
  OpenInNew as OpenInNewIcon,
  Person as PersonIcon,
  AttachMoney as AttachMoneyIcon,
  Code as CodeIcon,
  Description as DescriptionIcon,
  Rowing,
} from '@mui/icons-material';
import { LineChart } from '@mui/x-charts';
import InviteSellerModal from '../components/common/InviteSellerModal';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  '& .MuiCardContent-root': {
    padding: theme.spacing(1.5),
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '8px 16px',
  '&.MuiTableCell-head': {
    fontWeight: 500,
    color: '#6B7280',
  },
}));

const Dashboard: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

  const handleAccordionChange = (panel: string) => (
    _: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const chartData = {
    xAxis: [{ 
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      scaleType: 'point' as const,
    }],
    series: [{
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 80, 60, 70],
      area: true,
      color: '#0052CC',
      showMark: false,
    }],
  };

  const topSellers = [
    { name: 'Shashi', shares: '₹7,150.78' },
    { name: 'Urmila Devi', shares: '₹50.78' },
    { name: 'Tanaveer', shares: '₹150.14' },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        Dealer
      </Typography>

      {/* Stats Row */}
      <Grid container spacing={2} sx={{ mb: 3 }} >
        <Grid item xs={12} sm={1} md={2}>
          <StyledCard sx={{ bgcolor: '#E6EDFF' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.3 }}>
              <Avatar 
                 sx={{ 
                 width: 42, 
                 height: 42,
                  border: '1px solid #FFFFFF',
                  marginBottom:'20px'
               }} 
               src='https://cdn-icons-png.flaticon.com/128/9187/9187610.png'
               />
                <Typography variant="h6" sx={{ color: '#0052CC' }}>4</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">Total Sellers</Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <StyledCard sx={{ bgcolor: '#FFF9F2' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.3 }}>
              <Avatar 
                 sx={{ 
                 width: 50, 
                 height: 50,
                  border: '1px solid #FFFFFF',
                  marginBottom:'20px'
               }} 
               src='https://cdn-icons-png.flaticon.com/128/1170/1170609.png'
               /><Box>
                <Typography variant="h6" sx={{ color: 'black' }}>₹3.23K</Typography></Box>
              </Box>
              <Box>
              <Typography variant="body2" color="text.secondary">Total Earnings</Typography></Box>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4} borderColor={'2px solid #FF8C00'}>
          <StyledCard>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center', gap: 1 }}>
              <Avatar 
                 sx={{ 
                 width: 50, 
                 height: 50,
                  border: '1px solid #FFFFFF',
                  marginBottom:'20px'
               }} 
               src='https://cdn-icons-png.flaticon.com/128/10904/10904516.png'
               />
              
                <Typography variant="body2" color="#3F59A3" >
                  Dealer Code: IZ0012
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  onClick={() => setIsInviteModalOpen(true)}
                >
                  Invite seller
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4} >
         <Box sx={{ display: 'flex', flexDirection: 'coloumn',alignItems: 'end', gap: 1 }}>
          {/* <Avatar 
                 sx={{ 
                 width: 30, 
                 height: 30,
                  border: '1px solid #FFFFFF',
                  marginBottom:'20px',
                  
               }} 
               src='https://cdn-icons-png.flaticon.com/128/4528/4528797.png'
               /> */}
          <StyledCard  sx={{bgcolor:'#FFF9F2' }}>
            <CardContent>
            
              <Typography variant="body2" color="#FF8C00" fontSize={18}gutterBottom>
                Download Dealer Agreement
              </Typography>
              <Typography variant="caption" color="#A1A1A1" sx={{ display: 'block', mb: 1 }}>
                You can download your dealer agreement here.
              </Typography>
              <Button variant="outlined" size="small" fullWidth>
                Download
              </Button>
            </CardContent>
          </StyledCard>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={2.4}>
          <StyledCard sx={{bgcolor:'#E9FFF0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'row',alignItems: '', gap: 1 }}>
          <Avatar 
                 sx={{ 
                 width: 30, 
                 height: 30,
                  border: '1px solid #FFFFFF',
                  // marginBottom:'30px',
                  
               }} 
               src='https://cdn-icons-png.flaticon.com/128/12259/12259373.png'
               />
              
            <CardContent>
              <Typography variant="body2" color="#00C53C" gutterBottom marginBottom={'15px'} fontSize={'18px'}>
                Personal Details
              </Typography>
              <Typography variant="caption" color="#A1A1A1" sx={{ display: 'block', mb: 1,marginBottom:'20px' }}>
                View personal details and update your profile picture here.
              </Typography>
              <Button variant="outlined" size="small" fullWidth>
                View Profile
              </Button>
            </CardContent>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Main Content Row */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1">Top Sellers List</Typography>
                <Button 
                  endIcon={<OpenInNewIcon />}
                  sx={{ textTransform: 'none' }}
                >
                  View all
                </Button>
              </Box>
              <TableContainer>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Seller Name</StyledTableCell>
                      <StyledTableCell>Your Shares</StyledTableCell>
                      <StyledTableCell>Earning history</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {topSellers.map((seller) => (
                      <TableRow key={seller.name}>
                        <StyledTableCell>{seller.name}</StyledTableCell>
                        <StyledTableCell>{seller.shares}</StyledTableCell>
                        <StyledTableCell>
                          <Button
                            startIcon={<DownloadIcon />}
                            size="small"
                            sx={{ textTransform: 'none', color: '#0052CC' }}
                          >
                            Download
                          </Button>
                        </StyledTableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="subtitle1">Earning graph</Typography>
                <Button 
                  size="small"
                  sx={{ textTransform: 'none' }}
                >
                  Yearly
                </Button>
              </Box>
              <Box sx={{ height: 250 }}>
                <LineChart
                  xAxis={chartData.xAxis}
                  series={chartData.series}
                  height={250}
                  sx={{
                    '.MuiLineElement-root': {
                      strokeWidth: 2,
                    },
                    '.MuiAreaElement-root': {
                      fillOpacity: 0.1,
                    },
                  }}
                />
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Updates Section */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Updates</Typography>
        <StyledCard sx={{ bgcolor: 'rgba(141, 171, 216, 0.2)', mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Typography variant="caption" color="text.secondary">11-Nov-2024</Typography>
              <Typography variant="caption" color="text.secondary">11:00 PM</Typography>
              <Box sx={{ 
                px: 1, 
                py: 0.5, 
                bgcolor: 'rgba(141, 171, 216, 0.1)', 
                borderRadius: 1,
                display: 'inline-flex'
              }}>
                <Typography variant="caption" sx={{ color: '#FF9800' }}>New</Typography>
              </Box>
            </Box>
            <Typography variant="body2" >
              Dealers can easily check their shared earnings through the platform. This quick and convenient feature ensures transparency and helps you stay updated on your earnings without the need to contact support.
            </Typography>
          </CardContent>
        </StyledCard>

        <StyledCard sx={{ bgcolor: 'rgba(141, 171, 216, 0.2)', mb: 2 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
              <Typography variant="caption" color="text.secondary">08-Nov-2024</Typography>
              <Typography variant="caption" color="text.secondary">11:00 PM</Typography>
            </Box>
            <Typography variant="body2">
              Track your shared earnings effortlessly. The platform allows dealers to quickly access their earning history, keeping you updated and eliminating the need for support assistance.
            </Typography>
          </CardContent>
        </StyledCard>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            sx={{ 
              textTransform: 'none',
              color: '#FF9800'
            }}
          >
            See all updates
          </Button>
        </Box>
      </Box>

      {/* FAQs Section */}
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>FAQs</Typography>
        <StyledCard sx={{ bgcolor: '#F8F9FA', mb: 2 }}>
          <CardContent sx={{ p: '0 !important' }}>
            <Button
              fullWidth
              endIcon={<ExpandMoreIcon />}
              sx={{
                justifyContent: 'space-between',
                color: 'text.primary',
                p: 2,
                textTransform: 'none',
                bgcolor: 'rgba(141, 171, 216, 0.2)'
              }}
            >
              How do I track my earnings?
            </Button>
          </CardContent>
        </StyledCard>

        <StyledCard sx={{ bgcolor: '#F8F9FA', mb: 2 }}>
          <CardContent sx={{ p: '0 !important' }}>
            <Button
              fullWidth
              endIcon={<ExpandMoreIcon />}
              sx={{
                justifyContent: 'space-between',
                color: 'text.primary',
                p: 2,
                textTransform: 'none',
                bgcolor: 'rgba(141, 171, 216, 0.2)'
              }}
            >
              How can I download my dealer agreement?
            </Button>
          </CardContent>
        </StyledCard>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            sx={{ 
              textTransform: 'none',
              color: '#FF9800',
              bgcolor: 'rgba(141, 171, 216, 0.2)'
            }}
          >
            See all FAQs
          </Button>
        </Box>
      </Box>

      <InviteSellerModal 
        open={isInviteModalOpen} 
        onClose={() => setIsInviteModalOpen(false)} 
      />
    </Box>
  );
};

export default Dashboard;