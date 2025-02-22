"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var ResponsiveWrapper = material_1.styled(material_1.Box)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            margin: theme.spacing(2, 0),
            '& .MuiTable-root': {
                minWidth: 750
            }
        },
        _b[theme.breakpoints.down('sm')] = {
            margin: theme.spacing(1, 0),
            '& .MuiTableCell-root': {
                padding: theme.spacing(1),
                '&:last-child': {
                    paddingRight: theme.spacing(1)
                }
            }
        },
        _b);
});
var StyledTableCell = material_1.styled(material_1.TableCell)(function (_a) {
    var _b;
    var theme = _a.theme;
    return (_b = {
            padding: '12px 16px',
            '&.MuiTableCell-head': {
                backgroundColor: '#ffffff',
                color: theme.palette.text.secondary,
                fontWeight: 500
            }
        },
        _b[theme.breakpoints.down('sm')] = {
            padding: theme.spacing(1)
        },
        _b);
});
var StyledTableRow = material_1.styled(material_1.TableRow)(function (_a) {
    var _b;
    var theme = _a.theme;
    return ({
        '&:hover': {
            backgroundColor: 'rgba(141, 171, 216, 0.1)'
        },
        '& td': (_b = {
                whiteSpace: 'nowrap'
            },
            _b[theme.breakpoints.down('sm')] = {
                whiteSpace: 'normal'
            },
            _b)
    });
});
var monthlyData = [
    {
        id: 'IZS098',
        name: 'Shashi',
        mobile: '+91 9876543210',
        totalSales: '₹4,750',
        totalOrders: 48,
        yourShare: '₹483.34'
    },
    {
        id: 'IZS099',
        name: 'Rahul',
        mobile: '+91 9876543210',
        totalSales: '₹3,250',
        totalOrders: 32,
        yourShare: '₹325.00'
    },
];
var MonthlyReport = function () {
    return (react_1["default"].createElement(material_1.Box, { sx: { width: '100%', overflow: 'hidden' } },
        react_1["default"].createElement(ResponsiveWrapper, null,
            react_1["default"].createElement(material_1.TableContainer, { component: material_1.Paper, sx: { boxShadow: 'none' } },
                react_1["default"].createElement(material_1.Table, null,
                    react_1["default"].createElement(material_1.TableHead, null,
                        react_1["default"].createElement(material_1.TableRow, null,
                            react_1["default"].createElement(StyledTableCell, null, "Seller ID"),
                            react_1["default"].createElement(StyledTableCell, null, "Seller Name"),
                            react_1["default"].createElement(StyledTableCell, null, "Mobile"),
                            react_1["default"].createElement(StyledTableCell, null, "Total Sales"),
                            react_1["default"].createElement(StyledTableCell, null, "Total Orders"),
                            react_1["default"].createElement(StyledTableCell, null, "Your Share"),
                            react_1["default"].createElement(StyledTableCell, null, "Action"))),
                    react_1["default"].createElement(material_1.TableBody, null, monthlyData.map(function (row) { return (react_1["default"].createElement(StyledTableRow, { key: row.id },
                        react_1["default"].createElement(StyledTableCell, null, row.id),
                        react_1["default"].createElement(StyledTableCell, null, row.name),
                        react_1["default"].createElement(StyledTableCell, null, row.mobile),
                        react_1["default"].createElement(StyledTableCell, null, row.totalSales),
                        react_1["default"].createElement(StyledTableCell, null, row.totalOrders),
                        react_1["default"].createElement(StyledTableCell, null, row.yourShare),
                        react_1["default"].createElement(StyledTableCell, null,
                            react_1["default"].createElement(material_1.Button, { startIcon: react_1["default"].createElement(icons_material_1.Download, null), sx: {
                                    color: '#0052CC',
                                    '&:hover': {
                                        backgroundColor: 'rgba(0, 82, 204, 0.04)'
                                    }
                                } }, "Download")))); })))))));
};
exports["default"] = MonthlyReport;
