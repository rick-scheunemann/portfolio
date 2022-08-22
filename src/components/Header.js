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

    const { activeSection, setActiveSection } = props;

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (event) => {
        console.log("clostNavMenu: ", event.currentTarget.id);
        setActiveSection(event.currentTarget.id);
        setAnchorElNav(null);
    };

    const handleButtonScrollTo = (event) => {
        console.log("handleButtonScrollTo: ", event.currentTarget.id);

        const section = document.querySelector( `#${event.currentTarget.id}-scroll` );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );

        setActiveSection(event.currentTarget.id);
    }

    const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

    return (
        <header>
            <AppBar postition="static" color="primary">
                <Toolbar>
                    {/* xs: none, md: flex */}
                    <LogoIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PORT
                    </Typography>

                    {/* xs: flex, md: none */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
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
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {sections.map((section) => (
                                <MenuItem
                                    key={section}
                                    id={section}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        {section}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <LogoIcon
                        sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        PORT
                    </Typography>

                    {/* xs: none, md: flex */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
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
                </Toolbar>
            </AppBar>
            <Offset />
        </header>
    );
};

export default Header;
