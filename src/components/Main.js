import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import CardDeck from "./CardDeck";

const Main = (props) => {
    const { projects } = props;

    return (
        <Box>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={10}>
                    <div>
                        About
                        dfl;gkajga;lkjasd;lsakdjfsa;ldkfjsdl;fkjsdal;kfjsadl;kvmsv;lk
                        sflas ;lkj ;alskdvj as;lk
                    </div>
                </Grid>
                <Grid item>
                    <CardDeck projects={projects} />
                    {/* <Item>Projects</Item> */}
                </Grid>
                <Grid item>
                    <div>
                        Contact About
                        dfl;gkajga;lkjasd;lsakdjfsa;ldkfjsdl;fkjsdal;kfjsadl;kvmsv;lk
                        sflas ;lkj ;alskdvj as;lk
                    </div>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Main;
