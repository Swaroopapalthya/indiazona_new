// "use strict";

// exports.__esModule = true;

// var react_1 = require("react");

// var material_1 = require("@mui/material");

// var Search_1 = require("@mui/icons-material/Search");

// var Download_1 = require("@mui/icons-material/Download");

// var Close_1 = require("@mui/icons-material/Close");

// var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");

// var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");

// var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns"); // Styled components


// var PageContainer = material_1.styled(material_1.Box)({
//   padding: '24px'
// });
// var SearchContainer = material_1.styled(material_1.Box)({
//   position: 'absolute',
//   width: '1000px',
//   height: '48px',
//   radius: '5px',
//   border: '1.4px',
//   left: '318px',
//   top: '153px',
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center'
// });
// var TableWrapper = material_1.styled(material_1.Box)({
//   position: 'absolute',
//   width: '1082px',
//   height: '464px',
//   left: '318px',
//   top: '233px',
//   border: '1px',
//   backgroundColor: '#ffffff',
//   borderRadius: '10px',
//   boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
//   overflow: 'auto'
// });
// var StyledTableCell = material_1.styled(material_1.TableCell)({
//   borderBottom: '1px solid #E5E7EB',
//   padding: '4px 16px',
//   height: '40px',
//   '&.MuiTableCell-head': {
//     backgroundColor: '#ffffff',
//     fontWeight: 500,
//     color: '#6B7280'
//   }
// });
// var LoadingOverlay = material_1.styled(material_1.Box)({
//   position: 'absolute',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   backgroundColor: 'rgba(255, 255, 255, 0.7)',
//   zIndex: 1
// });
// var DownloadButton = material_1.styled(material_1.Button)({
//   color: '#3F51B5',
//   textTransform: 'none',
//   padding: '4px 8px',
//   minWidth: 'auto',
//   fontSize: '14px',
//   '&:hover': {
//     backgroundColor: 'transparent',
//     textDecoration: 'underline'
//   }
// });
// var TabButton = material_1.styled(material_1.Button)(function (_a) {
//   var active = _a.active;
//   return {
//     flex: 1,
//     backgroundColor: active ? '#0052CC' : '#F5F5F5',
//     color: active ? '#FFFFFF' : '#666666',
//     borderRadius: 0,
//     padding: '12px',
//     '&:hover': {
//       backgroundColor: active ? '#0043A4' : '#E0E0E0'
//     }
//   };
// });
// var MonthBox = material_1.styled(material_1.Button)(function (_a) {
//   var theme = _a.theme;
//   return {
//     width: '90px',
//     height: '90px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '8px',
//     border: '1px solid #E5E7EB',
//     backgroundColor: '#FFFFFF',
//     '&:hover': {
//       backgroundColor: 'rgba(63, 81, 181, 0.04)',
//       borderColor: '#3F51B5'
//     },
//     '& .MuiTypography-root': {
//       color: theme.palette.text.primary
//     }
//   };
// });
// var YearBox = material_1.styled(material_1.Button)(function (_a) {
//   var theme = _a.theme;
//   return {
//     width: '120px',
//     height: '90px',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: '8px',
//     border: '1px solid #E5E7EB',
//     backgroundColor: '#FFFFFF',
//     '&:hover': {
//       backgroundColor: 'rgba(63, 81, 181, 0.04)',
//       borderColor: '#3F51B5'
//     },
//     '& .MuiTypography-root': {
//       color: theme.palette.text.primary
//     }
//   };
// });
// var sellersData = [{
//   id: 'IZS098',
//   name: 'Shashi',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 4,750',
//   totalOrders: 48,
//   yourShare: '₹ 483.34'
// }, {
//   id: 'IZS098',
//   name: 'Urmila Devi',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 3,200',
//   totalOrders: 32,
//   yourShare: '₹ 183.34'
// }, {
//   id: 'IZS098',
//   name: 'Ramesh Gupta',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 2,950',
//   totalOrders: 29,
//   yourShare: '₹ 234.20'
// }, {
//   id: 'IZS098',
//   name: 'Sunita Sharma',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 4,300',
//   totalOrders: 43,
//   yourShare: '₹ 126.10'
// }, {
//   id: 'IZS098',
//   name: 'Ajay Patel',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 3,700',
//   totalOrders: 37,
//   yourShare: '₹ 455.34'
// }, {
//   id: 'IZS098',
//   name: 'Pooja Verma',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 2,500',
//   totalOrders: 25,
//   yourShare: '₹ 76.32'
// }, {
//   id: 'IZS098',
//   name: 'Neha Jain',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 3,700',
//   totalOrders: 31,
//   yourShare: '₹ 127.34'
// }, {
//   id: 'IZS098',
//   name: 'Arun Thakur',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 3,100',
//   totalOrders: 28,
//   yourShare: '₹ 483.34'
// }, {
//   id: 'IZS098',
//   name: 'Kavita Mehra',
//   mobile: '+91 6345687632',
//   totalSales: '₹ 4,800',
//   totalOrders: 48,
//   yourShare: '₹ 899.34'
// }];
// var months = [{
//   name: 'January',
//   "short": 'Jan'
// }, {
//   name: 'February',
//   "short": 'Feb'
// }, {
//   name: 'March',
//   "short": 'Mar'
// }, {
//   name: 'April',
//   "short": 'Apr'
// }, {
//   name: 'May',
//   "short": 'May'
// }, {
//   name: 'June',
//   "short": 'Jun'
// }, {
//   name: 'July',
//   "short": 'Jul'
// }, {
//   name: 'August',
//   "short": 'Aug'
// }, {
//   name: 'September',
//   "short": 'Sep'
// }, {
//   name: 'October',
//   "short": 'Oct'
// }, {
//   name: 'November',
//   "short": 'Nov'
// }, {
//   name: 'December',
//   "short": 'Dec'
// }];
// var years = [2024, 2023, 2022];

// var Sellers = function Sellers() {
//   var _a = react_1.useState(''),
//       searchTerm = _a[0],
//       setSearchTerm = _a[1];

//   var _b = react_1.useState(false),
//       isDownloadDialogOpen = _b[0],
//       setIsDownloadDialogOpen = _b[1];

//   var _c = react_1.useState('MONTHLY'),
//       activeTab = _c[0],
//       setActiveTab = _c[1];

//   var _d = react_1.useState(null),
//       startDate = _d[0],
//       setStartDate = _d[1];

//   var _e = react_1.useState(null),
//       endDate = _e[0],
//       setEndDate = _e[1];

//   var handleStartDateChange = function handleStartDateChange(newValue) {
//     setStartDate(newValue);
//   };

//   var handleEndDateChange = function handleEndDateChange(newValue) {
//     setEndDate(newValue);
//   }; // Filtering


//   var filteredSellers = sellersData.filter(function (seller) {
//     return seller.name.toLowerCase().includes(searchTerm.toLowerCase()) || seller.id.toLowerCase().includes(searchTerm.toLowerCase());
//   });
//   return react_1["default"].createElement(PageContainer, null, react_1["default"].createElement(material_1.Typography, {
//     variant: "h6",
//     sx: {
//       mb: 3
//     }
//   }, "Sellers list"), react_1["default"].createElement(SearchContainer, null, react_1["default"].createElement(material_1.TextField, {
//     placeholder: "Search via seller name",
//     variant: "outlined",
//     size: "small",
//     InputProps: {
//       startAdornment: react_1["default"].createElement(Search_1["default"], {
//         sx: {
//           color: 'text.secondary',
//           mr: 1
//         }
//       })
//     },
//     sx: {
//       width: '300px'
//     },
//     value: searchTerm,
//     onChange: function onChange(e) {
//       return setSearchTerm(e.target.value);
//     }
//   }), react_1["default"].createElement(material_1.Button, {
//     variant: "contained",
//     startIcon: react_1["default"].createElement(Download_1["default"], null),
//     onClick: function onClick() {
//       return setIsDownloadDialogOpen(true);
//     },
//     sx: {
//       bgcolor: '#3F51B5'
//     }
//   }, "Download")), react_1["default"].createElement(TableWrapper, null, react_1["default"].createElement(material_1.TableContainer, null, react_1["default"].createElement(material_1.Table, {
//     sx: {
//       minWidth: 650
//     }
//   }, react_1["default"].createElement(material_1.TableHead, null, react_1["default"].createElement(material_1.TableRow, null, [{
//     field: 'id',
//     label: 'Seller ID'
//   }, {
//     field: 'name',
//     label: 'Seller Name'
//   }, {
//     field: null,
//     label: 'Mobile'
//   }, {
//     field: 'totalSales',
//     label: 'Total Sales'
//   }, {
//     field: 'totalOrders',
//     label: 'Total Orders'
//   }, {
//     field: 'yourShare',
//     label: 'Your Share'
//   }, {
//     field: null,
//     label: 'Earning History'
//   }].map(function (_a) {
//     var field = _a.field,
//         label = _a.label;
//     return react_1["default"].createElement(StyledTableCell, {
//       key: label
//     }, react_1["default"].createElement(material_1.Box, {
//       sx: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: 0.5
//       }
//     }, label));
//   }))), react_1["default"].createElement(material_1.TableBody, null, filteredSellers.map(function (seller, index) {
//     return react_1["default"].createElement(material_1.TableRow, {
//       key: index
//     }, react_1["default"].createElement(StyledTableCell, null, seller.id), react_1["default"].createElement(StyledTableCell, null, seller.name), react_1["default"].createElement(StyledTableCell, null, seller.mobile), react_1["default"].createElement(StyledTableCell, null, seller.totalSales), react_1["default"].createElement(StyledTableCell, null, seller.totalOrders), react_1["default"].createElement(StyledTableCell, null, seller.yourShare), react_1["default"].createElement(StyledTableCell, null, react_1["default"].createElement(DownloadButton, null, "Download")));
//   }))))), react_1["default"].createElement(material_1.Dialog, {
//     open: isDownloadDialogOpen,
//     onClose: function onClose() {
//       return setIsDownloadDialogOpen(false);
//     },
//     maxWidth: "sm",
//     fullWidth: true,
//     PaperProps: {
//       sx: {
//         borderRadius: '8px',
//         maxWidth: '600px'
//       }
//     }
//   }, react_1["default"].createElement(material_1.DialogTitle, null, react_1["default"].createElement(material_1.Box, {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center"
//   }, react_1["default"].createElement(material_1.Typography, {
//     variant: "h6"
//   }, "Download Report"), react_1["default"].createElement(material_1.IconButton, {
//     onClick: function onClick() {
//       return setIsDownloadDialogOpen(false);
//     },
//     sx: {
//       color: '#666666',
//       '&:hover': {
//         bgcolor: 'rgba(0, 0, 0, 0.04)'
//       }
//     }
//   }, react_1["default"].createElement(Close_1["default"], null)))), react_1["default"].createElement(material_1.DialogContent, null, react_1["default"].createElement(material_1.Box, {
//     sx: {
//       display: 'flex',
//       mb: 1
//     }
//   }, react_1["default"].createElement(TabButton, {
//     active: activeTab === 'MONTHLY',
//     onClick: function onClick() {
//       return setActiveTab('MONTHLY');
//     }
//   }, "MONTHLY"), react_1["default"].createElement(TabButton, {
//     active: activeTab === 'YEARLY',
//     onClick: function onClick() {
//       return setActiveTab('YEARLY');
//     }
//   }, "YEARLY"), react_1["default"].createElement(TabButton, {
//     active: activeTab === 'CUSTOM RANGE',
//     onClick: function onClick() {
//       return setActiveTab('CUSTOM RANGE');
//     }
//   }, "CUSTOM RANGE")), activeTab === 'MONTHLY' && react_1["default"].createElement(material_1.Box, {
//     sx: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
//       gap: 0.5,
//       mt: 1
//     }
//   }, months.map(function (month) {
//     return react_1["default"].createElement(MonthBox, {
//       key: month.name
//     }, react_1["default"].createElement(material_1.Typography, {
//       variant: "subtitle2",
//       sx: {
//         mb: 0.5,
//         height: 5
//       }
//     }, month["short"]));
//   }), react_1["default"].createElement(material_1.Button, {
//     variant: "contained",
//     fullWidth: true,
//     startIcon: react_1["default"].createElement(Download_1["default"], null),
//     sx: {
//       mt: 2,
//       bgcolor: 'text.secondary',
//       '&:hover': {
//         bgcolor: 'b#0043A4',
//         alignContent: 'center'
//       }
//     }
//   }, "Download")), activeTab === 'YEARLY' && react_1["default"].createElement(material_1.Box, {
//     sx: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
//       gap: 2,
//       mt: 2
//     }
//   }, years.map(function (year) {
//     return react_1["default"].createElement(YearBox, {
//       key: year
//     }, react_1["default"].createElement(material_1.Typography, {
//       variant: "h6"
//     }, year));
//   }), react_1["default"].createElement(material_1.Button, {
//     variant: "contained",
//     fullWidth: true,
//     startIcon: react_1["default"].createElement(Download_1["default"], null),
//     sx: {
//       mt: 1,
//       bgcolor: 'text.secondary',
//       '&:hover': {
//         bgcolor: '#0043A4',
//         alignItems: 'center'
//       }
//     }
//   }, "Download")), activeTab === 'CUSTOM RANGE' && react_1["default"].createElement(LocalizationProvider_1.LocalizationProvider, {
//     dateAdapter: AdapterDateFns_1.AdapterDateFns
//   }, react_1["default"].createElement(material_1.Box, {
//     sx: {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: 2
//     }
//   }, react_1["default"].createElement(material_1.Typography, {
//     variant: "body2",
//     color: "text.secondary"
//   }, "Select a custom date range for which you want to download the earning history."), react_1["default"].createElement(material_1.Box, {
//     sx: {
//       display: 'flex',
//       gap: 2
//     }
//   }, react_1["default"].createElement(DatePicker_1.DatePicker, {
//     label: " Select Start Date",
//     value: startDate,
//     onChange: handleStartDateChange,
//     sx: {
//       flex: 1
//     }
//   }), react_1["default"].createElement(DatePicker_1.DatePicker, {
//     label: " Select End Date",
//     value: endDate,
//     onChange: handleEndDateChange,
//     sx: {
//       flex: 1
//     }
//   })), react_1["default"].createElement(material_1.Button, {
//     variant: "contained",
//     fullWidth: true,
//     startIcon: react_1["default"].createElement(Download_1["default"], null),
//     sx: {
//       mt: 1,
//       bgcolor: 'text.secondary',
//       '&:hover': {
//         bgcolor: '#0043A4'
//       }
//     }
//   }, "Download"))))));
// };

// exports["default"] = Sellers;