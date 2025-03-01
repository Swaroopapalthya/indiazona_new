"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var MonthlyReport_1 = require("./MonthlyReport");
var StyledDialog = material_1.styled(material_1.Dialog)(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiDialog-paper': {
            borderRadius: '12px',
            width: '100%',
            maxWidth: '900px'
        }
    });
});
var StyledTab = material_1.styled(material_1.Tab)({
    textTransform: 'none',
    minWidth: 'auto',
    padding: '12px 24px',
    '&.Mui-selected': {
        color: '#0052CC'
    }
});
var years = [2025, 2024, 2023];
var ReportDownloadModal = function (_a) {
    var open = _a.open, onClose = _a.onClose;
    var _b = react_1.useState('monthly'), activeTab = _b[0], setActiveTab = _b[1];
    var _c = react_1.useState(null), startDate = _c[0], setStartDate = _c[1];
    var _d = react_1.useState(null), endDate = _d[0], setEndDate = _d[1];
    var _e = react_1.useState(''), searchTerm = _e[0], setSearchTerm = _e[1];
    var handleTabChange = function (event, newValue) {
        setActiveTab(newValue);
    };
    var handleDownload = function () {
      
        onClose();
    };
    return (react_1["default"].createElement(StyledDialog, { open: open, onClose: onClose, maxWidth: "md" },
        react_1["default"].createElement(material_1.DialogTitle, null,
            react_1["default"].createElement(material_1.Box, { display: "flex", justifyContent: "space-between", alignItems: "center" },
                react_1["default"].createElement(material_1.Typography, { variant: "h6" }, "Download Report"),
                react_1["default"].createElement(material_1.IconButton, { onClick: onClose, size: "small" },
                    react_1["default"].createElement(icons_material_1.Close, null)))),
        react_1["default"].createElement(material_1.DialogContent, null,
            react_1["default"].createElement(material_1.Tabs, { value: activeTab, onChange: handleTabChange, sx: {
                    mb: 3,
                    '& .MuiTabs-indicator': {
                        backgroundColor: '#0052CC'
                    }
                } },
                react_1["default"].createElement(StyledTab, { value: "monthly", label: "Monthly" }),
                react_1["default"].createElement(StyledTab, { value: "yearly", label: "Yearly" }),
                react_1["default"].createElement(StyledTab, { value: "custom", label: "Custom range" })),
            activeTab === 'monthly' && (react_1["default"].createElement(material_1.Box, null,
                react_1["default"].createElement(material_1.Box, { sx: { mb: 2 } },
                    react_1["default"].createElement(material_1.TextField, { fullWidth: true, placeholder: "Search via seller name", size: "small", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, InputProps: {
                            startAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: "start" },
                                react_1["default"].createElement(icons_material_1.Search, { color: "action" })))
                        } })),
                react_1["default"].createElement(MonthlyReport_1["default"], null))),
            activeTab === 'yearly' && (react_1["default"].createElement(material_1.List, null, years.map(function (year) { return (react_1["default"].createElement(material_1.ListItem, { key: year, button: true, sx: {
                    borderRadius: 1,
                    mb: 1,
                    bgcolor: 'rgba(141, 171, 216, 0.2)',
                    '&:hover': {
                        bgcolor: 'rgba(141, 171, 216, 0.3)'
                    }
                } },
                react_1["default"].createElement(material_1.ListItemText, { primary: year, sx: {
                        '& .MuiListItemText-primary': {
                            color: '#0052CC'
                        }
                    } }))); }))),
            activeTab === 'custom' && (react_1["default"].createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns },
                react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'column', gap: 2 } },
                    react_1["default"].createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, "Select a custom date range for which you want to download the earning history."),
                    react_1["default"].createElement(material_1.Box, { sx: { display: 'flex', gap: 2 } },
                        react_1["default"].createElement(DatePicker_1.DatePicker, { label: " Select Start Date", value: startDate, onChange: function (newValue) { return setStartDate(newValue); }, sx: { flex: 1 } }),
                        react_1["default"].createElement(DatePicker_1.DatePicker, { label: " Select End Date", value: endDate, onChange: function (newValue) { return setEndDate(newValue); }, sx: { flex: 1 } })),
                    react_1["default"].createElement(material_1.TextField, { fullWidth: true, placeholder: "Search via seller name", size: "small", value: searchTerm, onChange: function (e) { return setSearchTerm(e.target.value); }, InputProps: {
                            startAdornment: (react_1["default"].createElement(material_1.InputAdornment, { position: "start" },
                                react_1["default"].createElement(icons_material_1.Search, { color: "action" })))
                        }, sx: { mt: 2 } }),
                    react_1["default"].createElement(material_1.Button, { variant: "contained", onClick: handleDownload, sx: {
                            mt: 2,
                            bgcolor: '#0052CC',
                            '&:hover': {
                                bgcolor: '#0043A4'
                            },
                            width: '100px',
                            display: 'block',
                            margin: '0 auto',
                            paddingleft: '40px',
                            paddingRight: '40px'
                        } }, "Download")))))));
};
exports["default"] = ReportDownloadModal;
