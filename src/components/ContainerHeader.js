import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LogoIcon from "./Logo";

const ContainerHeader = (props) => {
    return (
        <header>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <LogoIcon sx={{ mr: "10px" }} />
                    <Typography style={{ flexGrow: 1 }}>Port</Typography>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default ContainerHeader;
