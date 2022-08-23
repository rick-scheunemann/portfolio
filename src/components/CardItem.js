import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import ExLinkIcon from "@mui/icons-material/OpenInNew";

const CardItem = (props) => {
    const { title, description, image, imageAlt, link } = props;

    return (
        <Grid item>
            <Card
                sx={{
                    maxWidth: 350,
                }}
            >
                <CardActionArea 
                    rel="noopener noreferrer" 
                    href="https://www.google.com" 
                    target="_blank"
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt={imageAlt}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            noWrap
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            height="100px"
                            sx={{ overflow: "hidden" }}
                        >
                            {description}
                        </Typography>
                    </CardContent>

                    <div className="hidden-button">
                        <ExLinkIcon />
                    </div>

                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary"
                        rel="noopener noreferrer" 
                        href="https://www.google.com" 
                        target="_blank"
                    >
                        <ExLinkIcon sx={{marginRight:"5px"}}/> {link}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default CardItem;