import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, CardMedia, Grid, Typography } from '@mui/material'

const Mywork = () => {

    const info = [{
        name: "Toque Dulce", about: "This project came to me from a friend who was in need of a simple website for her business.",
        yt: "https://www.youtube.com/embed/RUwC0CJFmJY?si=7cc88kw8nBgVLLeV", github: "https://github.com/horacio512/toque-dulce", live: "https://toquedulce.com"
    }, { name: "Velasviendo", about: "think mark think", yt: "https://www.youtube.com/embed/iXD_PF_tMQY?si=Jx2aroXQ7i0iapWB", github: "https://github.com/horacio512/velasviendo", live: "https://github.com/horacio512/velasviendo" }
    ]

    return (
        <ThemeProvider theme={theme}>
            <Grid container id="mywork" justifyContent="center" mt={4} sx={{ backgroundColor: "#f9f9f9" }} >

                <Grid container xs={11} item={true} sm={10} marginTop="4%" sx={{ backgroundColor: "#ffffff" }} p={3}>

                    <Grid item xs={11} sm={10} mb={6}>
                        <Typography variant="h1" color="primary" fontWeight={800} >Some of my Projects</Typography>
                    </Grid>


                    {
                        info.map((data, index) => (

                            <Grid item key={index} display="flex" flexWrap="wrap" xs={12} justifyContent="space-evenly" mt={4} >
                                <Grid item xs={11} sm={5} mt={2} sx={{ backgroundColor: "#4831d4" }} p={1} mb={1} borderRadius={2}>

                                    <Typography variant="h3" color="secondary" textAlign="center">
                                        {data.name}
                                    </Typography>

                                    <Typography mt={2} variant="h5" color="white" mb={4} textAlign="center">
                                        {data.about}
                                    </Typography>

                                    <Grid item xs={12} display="flex" justifyContent="space-around" pb={4}>
                                        <Button variant="contained" color="secondary" href={data.github} target='_blank'>
                                            Github
                                        </Button>

                                        <Button variant="contained" color="secondary" href={data.live} target='_blank'>
                                            Live Web
                                        </Button>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} sm={6} display="flex" justifyContent="center" p={1}>

                                    <CardMedia height="auto" width="100%"
                                        component='iframe'
                                        title={data.name}
                                        src={data.yt}
                                    />

                                </Grid>

                            </Grid>

                        ))
                    }

                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default Mywork