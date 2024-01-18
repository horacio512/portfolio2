import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import Pic from "../assets/back.png"
import Google from "../components/Google"


const Studies = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container id="studies" alignContent="space-evenly" pt={10} sx={{ justifyContent: { xs: "center", sm: "space-evenly" }, backgroundColor: "#4831d4" }} >

                <Grid item xs={11} sm={10} display="flex" flexWrap="wrap" justifyContent="space-evenly" mt={5} mb={5}>
                    <Grid item xs={12} sm={5}>
                        <Typography variant="h1" fontWeight={800} mb={3} color="secondary">
                            Over the years,
                        </Typography>


                        <Typography variant="h5" color="white" fontWeight={400} p={1}>
                            My enthusiasm for problem-solving
                            and attention to detail drive me to craft visually appealing, responsive, and interactive web solutions.
                        </Typography>

                        <Typography variant="h5" color="white" fontWeight={400} p={1}>
                            As I continue to explore the latest web technologies and frameworks, I am excited to contribute to building engaging online experiences.
                        </Typography>

                        <Typography variant="h5" color="white" fontWeight={400} mb={2} p={1}>
                            I'm looking forward to the opportunity to be part of a dynamic team and help transform ideas into digital reality.
                            Let's create the web of the future together!
                        </Typography>


                        <img src={Pic} style={{ width: "100%", height: "auto" }} loading='lazy' title="computer guy" alt="some dude in a desk" />
                    </Grid>


                    <Grid item xs={12} sm={7} >
                        <Google />
                    </Grid>

                </Grid>


            </Grid>

        </ThemeProvider>
    )
}

export default Studies