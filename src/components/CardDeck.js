import Grid from "@mui/material/Grid";

import CardItem from "./CardItem";

const titles = ["one", "two", "three", "four"];

const CardDeck = (props) => {
    return (
        <Grid
            container
            className="cardDeck"
            spacing={3}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {titles.map((t) => (
                <CardItem title={t} />
            ))}
        </Grid>
    );
};

export default CardDeck;
