import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import KeyUp from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyDown from '@mui/icons-material/KeyboardDoubleArrowDown';
import Lines from "../assets/Lines"

const Home = () => {
    return (
        <ThemeProvider theme={theme}>

            <Grid container id="home" alignContent="center" pt={8}
                sx={{ justifyContent: { xs: "center", sm: "center" }, background: { xs: "linear-gradient(180deg, #4831d4 70%, #ccf381 30%)", sm: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)" } }} >

                <Grid xs={10} pb={4} mb={4} display="flex">

                    <KeyUp fontSize="large" color="secondary" sx={{ cursor: "pointer" }} />
                    <KeyDown fontSize="large" color="secondary" sx={{ cursor: "pointer" }} />

                </Grid>


                <Grid item xs={10} sm={5} textAlign="start" pb={6} >

                    <Typography variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }} >Frontend</Typography>
                    <Typography mb={2} variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }}>Developer.</Typography>
                    <Typography mb={6} variant="h5" color="white" >I like to craft solid and scalable frontend products with great user experiences.</Typography>


                    <Grid item xs={5} mt={4}>
                        <Typography color="secondary" variant="h6">Highly skilled at progressive enhancement, design systems & UI Engineering.</Typography>
                    </Grid>
                    <Grid item xs={5} mt={4}>
                        <Typography color="secondary" variant="h6">Proven experience building successful products for local clients.</Typography>
                    </Grid>

                </Grid>



                <Grid item xs={6} sm={3} pb={6} mb={2} >
                    <img src="https://i.ibb.co/s2yngyj/IMG-20220219-WA0036.jpg" width="100%" height="auto" />
                </Grid>

                <Grid item xs={0} sm={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Lines />
                </Grid>

            </Grid>

        </ThemeProvider >
    )
}

export default Home