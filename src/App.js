import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
});

function App() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

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
                        main: "#ffffee",
                        // dark: '#ef6c00',
                        // contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                    dim: {
                        // light: '#ffa726',
                        main: "#202020",
                        // dark: '#ef6c00',
                        // contrastText: 'rgba(0, 0, 0, 0.87)',
                    },
                },
            }),
        [mode]
    );

    /* theme overrides */
    theme = {
        ...theme,
        components: {
            MuiCardActionArea: {
                styleOverrides: {
                    root: {
                    "& .hidden-button": {
                        display: "none"
                    },
                    "&:hover .hidden-button": {
                        display: "flex",
                        position: "absolute",
                        top: "10px",
                        right: "10px"
                    }
                    }
                }
            },
        },
    }

    const siteTitle = "TEST";

    // media size
    const isDesktop = useMediaQuery("(min-width:600px)");

    // content
    // https://www.freecodecamp.org/news/how-to-consume-rest-apis-in-react/
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=15"
                );
                const data = await response.json();
                console.log(data);
                setProjects(data);
            } catch (e) {
                console.log(e);
            }
        };
        fetchProject();
    }, []);

    // const [activeSection, setActiveSection] = React.useState("about");
    const [layoutState, setLayoutState] = React.useState({
        activeSection: "about",
        anchorElNav: null,
    })

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container className="App" maxWidth="xl">
                    <Header
                        isDesktop={isDesktop}
                        siteTitle={siteTitle}
                        layoutState={layoutState}
                        setLayoutState={setLayoutState}
                    />
                    <Main
                        isDesktop={isDesktop}
                        projects={projects}
                        layoutState={layoutState}
                        setLayoutState={setLayoutState}
                    />
                    <Footer />
                </Container>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
