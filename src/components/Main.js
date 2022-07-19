import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import CardDeck from './CardDeck';

const Main = (props) => {
    return (
        <Container>
        <Grid
            container
            spacing={3}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={12} md={10}>
                <div>About dfl;gkajga;lkjasd;lsakdjfsa;ldkfjsdl;fkjsdal;kfjsadl;kvmsv;lk sflas ;lkj ;alskdvj as;lk</div>
            </Grid>
            <Grid item>
                <CardDeck />
                {/* <Item>Projects</Item> */}
            </Grid>
            <Grid item>
                <div>Contact About dfl;gkajga;lkjasd;lsakdjfsa;ldkfjsdl;fkjsdal;kfjsadl;kvmsv;lk sflas ;lkj ;alskdvj as;lk</div>
            </Grid>
        </Grid>
        </Container>
    );
};

export default Main;
