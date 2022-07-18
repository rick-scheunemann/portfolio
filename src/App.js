import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container";

import ContainerHeader from "./components/ContainerHeader";
import ContainerFooter from "./components/ContainerFooter";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");

    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );

    let theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,

                    bright: {
                        // light: '#ffa726',
                        main: '#ffffee',
                        // dark: '#ef6c00',
                        // contrastText: 'rgba(0, 0, 0, 0.87)',
                      }
                },
            }),
        [mode]
    );

    /* theme overrides */
    // theme = {
    //     ...theme,
    //     components: {
    //         MuiContainer: {
    //             styleOverrides: {
    //                 root: {
    //                     [theme.breakpoints.up("xs")]: {
    //                         paddingLeft: "8px",
    //                         paddingRight: "8px",
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container className="App">
                    <ContainerHeader/>

                    <ContainerFooter/>
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
