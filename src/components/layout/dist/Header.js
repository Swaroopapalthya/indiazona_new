"use strict";
exports.__esModule = true;
var react_1 = require("react");
var material_1 = require("@mui/material");
var icons_material_1 = require("@mui/icons-material");
var StyledAppBar = material_1.styled(material_1.AppBar)(function (_a) {
    var theme = _a.theme;
    return ({
        backgroundColor: '#FFFFFF',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: theme.palette.divider,
        zIndex: theme.zIndex.drawer + 1
    });
});
var LanguageButton = material_1.styled(material_1.Button)(function (_a) {
    var theme = _a.theme;
    return ({
        textTransform: 'none',
        color: theme.palette.text.primary,
        padding: '4px 12px',
        minWidth: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
    });
});
var StyledMenu = material_1.styled(material_1.Menu)(function (_a) {
    var theme = _a.theme;
    return ({
        '& .MuiPaper-root': {
            borderRadius: 8,
            marginTop: 8,
            minWidth: 120,
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
        }
    });
});
var languages = [
    { code: 'en', name: '', nativeName: 'Eng' },
    { code: 'hi', name: '', nativeName: 'Hi' },
];
var Header = function () {
    var _a = react_1.useState(languages[0]), selectedLang = _a[0], setSelectedLang = _a[1];
    var _b = react_1.useState(null), anchorEl = _b[0], setAnchorEl = _b[1];
    var open = Boolean(anchorEl);
    var handleClick = function (event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function () {
        setAnchorEl(null);
    };
    var handleLanguageSelect = function (language) {
        setSelectedLang(language);
        handleClose();
    };
    return (react_1["default"].createElement(StyledAppBar, { position: "fixed", sx: { width: "calc(100% - 240px)", ml: '240px' } },
        react_1["default"].createElement(material_1.Toolbar, { sx: { justifyContent: 'flex-end', gap: 2 } },
            react_1["default"].createElement(material_1.IconButton, { size: "large", sx: {
                    backgroundColor: 'rgba(122, 133, 194, 0.2)',
                    '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.08)'
                    }
                } },
                react_1["default"].createElement(icons_material_1.Notifications, { sx: { color: '#3F51B5' } })),
            react_1["default"].createElement(LanguageButton, { onClick: handleClick, startIcon: react_1["default"].createElement(icons_material_1.Language, null), endIcon: react_1["default"].createElement(icons_material_1.KeyboardArrowDown, null), sx: {
                    backgroundColor: 'rgba(63, 81, 181, 0.04)',
                    '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.08)'
                    }
                } }, selectedLang.nativeName),
            react_1["default"].createElement(StyledMenu, { anchorEl: anchorEl, open: open, onClose: handleClose, anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right'
                }, transformOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                } }, languages.map(function (language) { return (react_1["default"].createElement(material_1.MenuItem, { key: language.code, selected: language.code === selectedLang.code, onClick: function () { return handleLanguageSelect(language); }, sx: {
                    minHeight: 32,
                    px: 2,
                    py: 1,
                    '&:hover': {
                        backgroundColor: 'rgba(63, 81, 181, 0.04)'
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(63, 81, 181, 0.08)',
                        '&:hover': {
                            backgroundColor: 'rgba(63, 81, 181, 0.12)'
                        }
                    }
                } },
                react_1["default"].createElement(material_1.Typography, { variant: "body2" },
                    language.nativeName,
                    " (",
                    language.name,
                    ")"))); })),
            react_1["default"].createElement(material_1.Box, { sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(63, 81, 181, 0.04)',
                    padding: '8px 16px',
                    borderRadius: '8px'
                } },
                react_1["default"].createElement(material_1.Avatar, { sx: {
                        width: 38,
                        height: 38,
                        border: '2px solid #FFFFFF'
                    }, src: 'https://cdn-icons-png.flaticon.com/128/11696/11696620.png' }),
                react_1["default"].createElement(material_1.Box, null,
                    react_1["default"].createElement(material_1.Typography, { variant: "subtitle2", color: "rgba(13, 26, 110, 2)" }, "Palthya swaroopa"),
                    react_1["default"].createElement(material_1.Typography, { variant: "caption", color: "text.secondary" }, "Dealer"))))));
};
exports["default"] = Header;
