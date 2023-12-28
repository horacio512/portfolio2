import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, CardMedia, Grid, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import logo1 from "../assets/log1.jpg"


const Mywork = () => {

    const info = [{
        name: logo1, yt: "https://www.youtube.com/embed/RUwC0CJFmJY?si=7cc88kw8nBgVLLeV", github: "https://github.com/horacio512/toque-dulce", live: "https://toquedulce.com", descr: "Responsive site for a small family business. "
    }, { name: "Velasviendo", yt: "https://www.youtube.com/embed/iXD_PF_tMQY?si=Jx2aroXQ7i0iapWB", github: "https://github.com/horacio512/velasviendo", live: "https://github.com/horacio512/velasviendo" }
    ]

    return (
        <ThemeProvider theme={theme}>
            <Grid container id="mywork" justifyContent="center" mt={4} sx={{ backgroundColor: "#f9f9f9" }} >

                <Grid container xs={11} item={true} marginTop="4%" sx={{ backgroundColor: "#ffffff" }} p={2}>

                    <Grid item xs={11} sm={12} mb={6}>
                        <Typography variant="h1" color="primary" fontWeight={800} >Some of my Projects</Typography>
                    </Grid>


                    <Grid container display="flex" justifyContent="space-evenly">
                        {
                            info.map((data, index) => (

                                <Grid container xs={12} sm={5} key={index} display="flex" flexDirection="row" justifyContent="center" alignContent="center"
                                    mt={2} p={1} mb={1} sx={{ backgroundColor: "#f9f9f9" }} borderRadius={2}>


                                    <Grid item xs={2} display="flex" alignItems="center">
                                        <Link href={data.live} target="_blank">
                                            <img src={data.name} style={{ width: "100%", height: "auto" }} />
                                        </Link>
                                    </Grid>


                                    <Grid item xs={8} display="flex" alignItems="center">
                                        <Typography variant="h5" fontWeight={500} color="primary">{data.descr}</Typography>
                                    </Grid>

                                    <Grid item xs={12} p={1}>

                                        <CardMedia allowFullScreen={true}
                                            component='iframe'
                                            title={data.name}
                                            src={data.yt}
                                        />
                                    </Grid>

                                    <Grid item xs={12} display="flex" alignItems="center" justifyContent="center" m={1}>
                                        <Link variant="text" color="#000000" href={data.github} target='_blank'>
                                            <GitHubIcon fontSize='large' />
                                        </Link>
                                    </Grid>

                                </Grid>



                            ))
                        }
                    </Grid>

                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default Mywork