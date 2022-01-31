import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import "./Home.css"

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AutoGrid() {    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3} xs>
                <Grid item xs={12} sm={12} md={3} >
                    <Item className="item">
                        <img className='imgl' src={`https://github.com/sabrina.png`} style={{ borderRadius: "8px" }} />
                        <hr />
                        <a className='nome'>
                            Nome mina
                        </a>
                        <hr />
                        <nav>
                            <a className='dadosperfil'>
                                <img className="icone" src="https://i.pinimg.com/originals/7c/16/0a/7c160a901ee2a0cfd521a15b84115cdb.png" />
                                Perfil
                            </a>
                        </nav>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  

                        <TextareaAutosize
                            minRows={5}
                            aria-label="maximum height"
                            placeholder=" Digite sua postagem..."
                            className='post'
                            defaultValue=""
                            
                        />


                    
                    <Item className="item">
                        <Card sx={{ maxWidth: 500 }}  style={{marginLeft: '50px'}} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="auto"
                                image="https://cdn.discordapp.com/attachments/903614501960691713/937740579528405012/PqB1DlB_2.png"
                                
                            />
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <Item className="item">
                        <p>
                            Patrocinado:
                        </p>
                        <img className='imgl' src="https://i.pinimg.com/originals/27/28/d9/2728d98ff83ab793d078265288379104.gif" />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}
