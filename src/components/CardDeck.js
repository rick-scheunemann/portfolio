import Grid from "@mui/material/Grid";

import CardItem from "./CardItem";

const CardDeck = (props) => {
    const { projects } = props;

    return (
        <Grid
            container
            className="cardDeck"
            spacing={3}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
        >
            {projects.map((p) => (
                <CardItem
                    key={p.id}
                    title={p.title}
                    description={p.body}
                    image="placeholder"
                    imageAlt="placeholder"
                    link="www.google.com"
                />
            ))}
        </Grid>
    );
};

export default CardDeck;
