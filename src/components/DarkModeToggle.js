import React from "react";
// import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness4Icon from "@mui/icons-material/DarkMode";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";
// import { useTheme } from '@mui/material/styles';

import { ColorModeContext } from "../App";

const DarkModeToggle = () => {
    const colorMode = React.useContext(ColorModeContext);

    // const theme = useTheme();
    // const currentMode = theme.palette.mode;
    // const isDark = currentMode === "dark";

    return (
        <Switch
            // defaultChecked={isDark}
            onClick={colorMode.toggleColorMode}
            color="bright"
            // checkedIcon={<Brightness4Icon fontSize="small" style={{backgroundImage:"radial-gradient(white, transparent 70%)"}}/>}
            // icon={<Brightness7Icon fontSize="small" />}
            // icon={<Brightness4Icon fontSize="small" />}
            icon={<Brightness4Icon fontSize="small" style={{backgroundImage:"radial-gradient(black, transparent 75%)"}}/>}
            checkedIcon={<Brightness7Icon fontSize="small" style={{backgroundImage:"radial-gradient(black, transparent 50%)"}}/>}
        />
    );
};

export default DarkModeToggle;
