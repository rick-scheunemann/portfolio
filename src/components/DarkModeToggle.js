import React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";

import { ColorModeContext } from "../App";

const DarkModeToggle = () => {
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Switch
            onClick={colorMode.toggleColorMode}
            color="bright"
            icon={<Brightness4Icon fontSize="small" />}
            checkedIcon={<Brightness7Icon fontSize="small" />}
        />
    );
};

export default DarkModeToggle;
