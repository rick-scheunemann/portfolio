import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

import CardDeck from "./CardDeck";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const MainAccordion = (props) => {

    const { projects, layoutState, setLayoutState } = props;

    // const [expanded, setExpanded] = React.useState("About");

    const handleChange = (panel) => (event, newExpanded) => {
        setLayoutState({
            ...layoutState,
            activeSection: newExpanded ? panel : false,
            anchorElNav: null
        })

        // setActiveSection(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion
                expanded={layoutState.activeSection === "about"}
                onChange={handleChange("about")}
            >
                <AccordionSummary
                    aria-controls="about-content"
                    id="about-header"
                >
                    <Typography>ABOUT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={layoutState.activeSection === "projects"}
                onChange={handleChange("projects")}
            >
                <AccordionSummary
                    aria-controls="projects-content"
                    id="projects-header"
                >
                    <Typography>PROJECTS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CardDeck projects={projects} />
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={layoutState.activeSection === "contact"}
                onChange={handleChange("contact")}
            >
                <AccordionSummary
                    aria-controls="contact-content"
                    id="contact-header"
                >
                    <Typography>CONTACT</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Suspendisse malesuada lacus ex, sit
                        amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default MainAccordion;
