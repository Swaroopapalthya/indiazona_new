// "use strict";
// exports.__esModule = true;
// var react_1 = require("react");
// var material_1 = require("@mui/material");
// var icons_material_1 = require("@mui/icons-material");
// var x_charts_1 = require("@mui/x-charts");
// var InviteSellerModal_1 = require("../components/common/InviteSellerModal");
// var StyledCard = material_1.styled(material_1.Card)(function (_a) {
//     var theme = _a.theme;
//     return ({
//         borderRadius: '8px',
//         boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
//         '& .MuiCardContent-root': {
//             padding: theme.spacing(1.5)
//         }
//     });
// });
// var StyledTableCell = material_1.styled(material_1.TableCell)(function (_a) {
//     var theme = _a.theme;
//     return ({
//         padding: '8px 16px',
//         '&.MuiTableCell-head': {
//             fontWeight: 500,
//             color: '#6B7280'
//         }
//     });
// });
// var Dashboard = function () {
//     var _a = react_1.useState(false), expanded = _a[0], setExpanded = _a[1];
//     var _b = react_1.useState(false), isInviteModalOpen = _b[0], setIsInviteModalOpen = _b[1];
//     var handleAccordionChange = function (panel) { return function (_, isExpanded) {
//         setExpanded(isExpanded ? panel : false);
//     }; };
//     var chartData = {
//         xAxis: [{
//                 data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//                 scaleType: 'point'
//             }],
//         series: [{
//                 data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 80, 60, 70],
//                 area: true,
//                 color: '#0052CC',
//                 showMark: false
//             }]
//     };
//     var topSellers = [
//         { name: 'Shashi', shares: '₹7,150.78' },
//         { name: 'Urmila Devi', shares: '₹50.78' },
//         { name: 'Tanaveer', shares: '₹150.14' },
//     ];
//     return (react_1["default"].createElement(material_1.Box, { sx: { p: 2 } },
//         react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary", sx: { mb: 2 } }, "Dealer"),
//         react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2, sx: { mb: 3 } },
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 1, md: 2 },
//                 react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#E6EDFF' } },
//                     react_1["default"].createElement(material_1.CardContent, null,
//                         react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', mb: 0.3 } },
//                             react_1["default"].createElement(material_1.Avatar, { sx: {
//                                     width: 42,
//                                     height: 42,
//                                     border: '1px solid #FFFFFF',
//                                     marginBottom: '20px'
//                                 }, src: 'https://cdn-icons-png.flaticon.com/128/9187/9187610.png' }),
//                             react_1["default"].createElement(material_1.Typography, { variant: "h6", sx: { color: '#0052CC' } }, "4")),
//                         react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "Total Sellers")))),
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 2.4 },
//                 react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#FFF9F2' } },
//                     react_1["default"].createElement(material_1.CardContent, null,
//                         react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', mb: 0.3 } },
//                             react_1["default"].createElement(material_1.Avatar, { sx: {
//                                     width: 50,
//                                     height: 50,
//                                     border: '1px solid #FFFFFF',
//                                     marginBottom: '20px'
//                                 }, src: 'https://cdn-icons-png.flaticon.com/128/1170/1170609.png' }),
//                             react_1["default"].createElement(material_1.Box, null,
//                                 react_1["default"].createElement(material_1.Typography, { variant: "h6", sx: { color: 'black' } }, "\u20B93.23K"))),
//                         react_1["default"].createElement(material_1.Box, null,
//                             react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "Total Earnings"))))),
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 2.4, borderColor: '2px solid #FF8C00' },
//                 react_1["default"].createElement(StyledCard, null,
//                     react_1["default"].createElement(material_1.CardContent, null,
//                         react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 } },
//                             react_1["default"].createElement(material_1.Avatar, { sx: {
//                                     width: 50,
//                                     height: 50,
//                                     border: '1px solid #FFFFFF',
//                                     marginBottom: '20px'
//                                 }, src: 'https://cdn-icons-png.flaticon.com/128/10904/10904516.png' }),
//                             react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "#3F59A3" }, "Dealer Code: IZ0012"),
//                             react_1["default"].createElement(material_1.Button, { variant: "contained", color: "warning", size: "small", onClick: function () { return setIsInviteModalOpen(true); } }, "Invite seller"))))),
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 2.4 },
//                 react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'coloumn', alignItems: 'end', gap: 1 } },
//                     react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#FFF9F2' } },
//                         react_1["default"].createElement(material_1.CardContent, null,
//                             react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "#FF8C00", fontSize: 18, gutterBottom: true }, "Download Dealer Agreement"),
//                             react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "#A1A1A1", sx: { display: 'block', mb: 1 } }, "You can download your dealer agreement here."),
//                             react_1["default"].createElement(material_1.Button, { variant: "outlined", size: "small", fullWidth: true }, "Download"))))),
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, sm: 6, md: 2.4 },
//                 react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#E9FFF0' } },
//                     react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'row', alignItems: '', gap: 1 } },
//                         react_1["default"].createElement(material_1.Avatar, { sx: {
//                                 width: 30,
//                                 height: 30,
//                                 border: '1px solid #FFFFFF'
//                             }, src: 'https://cdn-icons-png.flaticon.com/128/12259/12259373.png' }),
//                         react_1["default"].createElement(material_1.CardContent, null,
//                             react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "#00C53C", gutterBottom: true, marginBottom: '15px', fontSize: '18px' }, "Personal Details"),
//                             react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "#A1A1A1", sx: { display: 'block', mb: 1, marginBottom: '20px' } }, "View personal details and update your profile picture here."),
//                             react_1["default"].createElement(material_1.Button, { variant: "outlined", size: "small", fullWidth: true }, "View Profile")))))),
//         react_1["default"].createElement(material_1.Grid, { container: true, spacing: 2 },
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
//                 react_1["default"].createElement(StyledCard, null,
//                     react_1["default"].createElement(material_1.CardContent, null,
//                         react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 } },
//                             react_1["default"].createElement(material_1.Typography, { variant: "subtitle1" }, "Top Sellers List"),
//                             react_1["default"].createElement(material_1.Button, { endIcon: react_1["default"].createElement(icons_material_1.OpenInNew, null), sx: { textTransform: 'none' } }, "View all")),
//                         react_1["default"].createElement(material_1.TableContainer, null,
//                             react_1["default"].createElement(material_1.Table, { size: "small" },
//                                 react_1["default"].createElement(material_1.TableHead, null,
//                                     react_1["default"].createElement(material_1.TableRow, null,
//                                         react_1["default"].createElement(StyledTableCell, null, "Seller Name"),
//                                         react_1["default"].createElement(StyledTableCell, null, "Your Shares"),
//                                         react_1["default"].createElement(StyledTableCell, null, "Earning history"))),
//                                 react_1["default"].createElement(material_1.TableBody, null, topSellers.map(function (seller) { return (react_1["default"].createElement(material_1.TableRow, { key: seller.name },
//                                     react_1["default"].createElement(StyledTableCell, null, seller.name),
//                                     react_1["default"].createElement(StyledTableCell, null, seller.shares),
//                                     react_1["default"].createElement(StyledTableCell, null,
//                                         react_1["default"].createElement(material_1.Button, { startIcon: react_1["default"].createElement(icons_material_1.Download, null), size: "small", sx: { textTransform: 'none', color: '#0052CC' } }, "Download")))); }))))))),
//             react_1["default"].createElement(material_1.Grid, { item: true, xs: 12, md: 6 },
//                 react_1["default"].createElement(StyledCard, null,
//                     react_1["default"].createElement(material_1.CardContent, null,
//                         react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 } },
//                             react_1["default"].createElement(material_1.Typography, { variant: "subtitle1" }, "Earning graph"),
//                             react_1["default"].createElement(material_1.Button, { size: "small", sx: { textTransform: 'none' } }, "Yearly")),
//                         react_1["default"].createElement(material_1.Box, { sx: { height: 250 } },
//                             react_1["default"].createElement(x_charts_1.LineChart, { xAxis: chartData.xAxis, series: chartData.series, height: 250, sx: {
//                                     '.MuiLineElement-root': {
//                                         strokeWidth: 2
//                                     },
//                                     '.MuiAreaElement-root': {
//                                         fillOpacity: 0.1
//                                     }
//                                 } })))))),
//         react_1["default"].createElement(material_1.Box, { sx: { mt: 3 } },
//             react_1["default"].createElement(material_1.Typography, { variant: "h6", sx: { mb: 2 } }, "Updates"),
//             react_1["default"].createElement(StyledCard, { sx: { bgcolor: 'rgba(141, 171, 216, 0.2)', mb: 2 } },
//                 react_1["default"].createElement(material_1.CardContent, null,
//                     react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 1 } },
//                         react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "11-Nov-2024"),
//                         react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "11:00 PM"),
//                         react_1["default"].createElement(material_1.Box, { sx: {
//                                 px: 1,
//                                 py: 0.5,
//                                 bgcolor: 'rgba(141, 171, 216, 0.1)',
//                                 borderRadius: 1,
//                                 display: 'inline-flex'
//                             } },
//                             react_1["default"].createElement(material_1.Typography, { variant: "caption", sx: { color: '#FF9800' } }, "New"))),
//                     react_1["default"].createElement(material_1.Typography, { variant: "body2" }, "Dealers can easily check their shared earnings through the platform. This quick and convenient feature ensures transparency and helps you stay updated on your earnings without the need to contact support."))),
//             react_1["default"].createElement(StyledCard, { sx: { bgcolor: 'rgba(141, 171, 216, 0.2)', mb: 2 } },
//                 react_1["default"].createElement(material_1.CardContent, null,
//                     react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, mb: 1 } },
//                         react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "08-Nov-2024"),
//                         react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "11:00 PM")),
//                     react_1["default"].createElement(material_1.Typography, { variant: "body2" }, "Track your shared earnings effortlessly. The platform allows dealers to quickly access their earning history, keeping you updated and eliminating the need for support assistance."))),
//             react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'flex-end' } },
//                 react_1["default"].createElement(material_1.Button, { sx: {
//                         textTransform: 'none',
//                         color: '#FF9800'
//                     } }, "See all updates"))),
//         react_1["default"].createElement(material_1.Box, { sx: { mt: 3 } },
//             react_1["default"].createElement(material_1.Typography, { variant: "h6", sx: { mb: 2 } }, "FAQs"),
//             react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#F8F9FA', mb: 2 } },
//                 react_1["default"].createElement(material_1.CardContent, { sx: { p: '0 !important' } },
//                     react_1["default"].createElement(material_1.Button, { fullWidth: true, endIcon: react_1["default"].createElement(icons_material_1.ExpandMore, null), sx: {
//                             justifyContent: 'space-between',
//                             color: 'text.primary',
//                             p: 2,
//                             textTransform: 'none',
//                             bgcolor: 'rgba(141, 171, 216, 0.2)'
//                         } }, "How do I track my earnings?"))),
//             react_1["default"].createElement(StyledCard, { sx: { bgcolor: '#F8F9FA', mb: 2 } },
//                 react_1["default"].createElement(material_1.CardContent, { sx: { p: '0 !important' } },
//                     react_1["default"].createElement(material_1.Button, { fullWidth: true, endIcon: react_1["default"].createElement(icons_material_1.ExpandMore, null), sx: {
//                             justifyContent: 'space-between',
//                             color: 'text.primary',
//                             p: 2,
//                             textTransform: 'none',
//                             bgcolor: 'rgba(141, 171, 216, 0.2)'
//                         } }, "How can I download my dealer agreement?"))),
//             react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', justifyContent: 'flex-end' } },
//                 react_1["default"].createElement(material_1.Button, { sx: {
//                         textTransform: 'none',
//                         color: '#FF9800',
//                         bgcolor: 'rgba(141, 171, 216, 0.2)'
//                     } }, "See all FAQs"))),
//         react_1["default"].createElement(InviteSellerModal_1["default"], { open: isInviteModalOpen, onClose: function () { return setIsInviteModalOpen(false); } })));
// };
// exports["default"] = Dashboard;
