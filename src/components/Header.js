import React from "react";
import AppBar from "@mui/material/AppBar";
import LogoIcon from "./Logo";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import styled from "@emotion/styled";

const sections = ["about", "projects", "contact"];

const Header = (props) => {

    const { isDesktop, siteTitle, layoutState, setLayoutState } = props;

    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setLayoutState({
            ...layoutState,
            anchorElNav: event.currentTarget
        })
    };

    const handleCloseNavMenu = (event) => {
        console.log("closeNavMenu: ", event.currentTarget.id);

        console.log(isDesktop); // desktop > 600px

        setLayoutState({
            ...layoutState,
            activeSection: event.currentTarget.id,
            anchorElNav: null
        })
    };

    const handleButtonScrollTo = (event) => {
        console.log("handleButtonScrollTo: ", event.currentTarget.id);

        const section = document.querySelector( `#${event.currentTarget.id}-scroll` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );

        setLayoutState({
            ...layoutState,
            activeSection: event.currentTarget.id,
        })
    }

    const handleCloseAndScroll = (event) => {
        console.log("handleCloseAndScroll: ", event.currentTarget.id);

        const section = document.querySelector( `#${event.currentTarget.id}-scroll` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );

        setLayoutState({
            ...layoutState,
            activeSection: event.currentTarget.id,
            anchorElNav: null
        })
    }

    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <header>
            <AppBar postition="static" color="primary">
                <Toolbar>
                    {/* xs: none, sm: flex */}
                    <LogoIcon
                        sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", sm: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        {siteTitle}
                    </Typography>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "flex" },
                        }}
                    >
                        {sections.map((section) => (
                            <Button
                                key={section}
                                id={section}
                                onClick={handleButtonScrollTo}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {section}
                            </Button>
                        ))}
                    </Box>

                    {/* xs: flex, sm: none */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", sm: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={layoutState.anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(layoutState.anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", sm: "none" },
                            }}
                        >
                            {sections.map((section) => (
                                <MenuItem
                                    key={section}
                                    id={section}
                                    onClick={isDesktop ? handleCloseAndScroll : handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {section}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <LogoIcon
                        sx={{ display: { xs: "flex", sm: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", sm: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        {siteTitle}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Offset />
        </header>
    );
};

export default Header;
