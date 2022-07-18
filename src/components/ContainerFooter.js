import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import DarkModeToggle from "./DarkModeToggle";
import { ColorModeContext } from "../App";

const ContainerFooter = (props) => {
    const colorMode = React.useContext(ColorModeContext);

    return (
        <footer>
            <AppBar
                position="fixed"
                color="primary"
                sx={{ top: "auto", bottom: 0 }}
            >
                <Toolbar>
                    <span style={{ flexGrow: 1 }}>
                        <DarkModeToggle onClick={colorMode.toggleColorMode} />
                    </span>
                </Toolbar>
            </AppBar>
        </footer>
    );
};

export default ContainerFooter;
