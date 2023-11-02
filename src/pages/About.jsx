import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import SquareR from "../assets/Square"
import Lines from "../assets/Lines"

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container id="about" height="98vh" justifyContent="center" mt={4} >

                <Grid item xs={12} sm={10} >
                    <Grid container sx={{ justifyContent: { xs: "center", sm: "space-between" } }} pb={4}>
                        <Grid item xs={10} sm={6}>

                            <Typography variant="h1" mb={3} color="primary" fontWeight={800}>Self Taught</Typography>
                            <Typography varianth="h6" color="primary" sx={{ textAlign: { xs: "start" } }} >
                                I'm a self-taught web developer on a relentless journey of exploration
                                and innovation in the ever-evolving digital landscape.
                                I've embarked on this incredible adventure to not only master the art of
                                web development but to harness the ability to turn ideas into functional, elegant, and impactful online experiences.
                            </Typography>

                        </Grid>

                        <Grid item sm={4} sx={{ display: { xs: "none", sm: "flex" } }}>
                            <SquareR />
                        </Grid>
                    </Grid>

                    <Grid container alignItems="space-between" pb={4} mt={6} sx={{ justifyContent: { xs: "center", sm: "space-between" } }} >
                        <Grid item sm={2} sx={{ display: { xs: "none", sm: "flex" } }}>
                            <Lines />
                        </Grid>

                        <Grid item xs={10} sm={6} >

                            <Typography variant="h1" mb={3} sx={{ textAlign: { xs: "start", sm: "start" } }} color="primary" fontWeight={800}>Web Development</Typography>
                            <Typography varianth="h6" color="primary" sx={{ textAlign: { xs: "start", sm: "start" } }} >
                                As a web developer, I am dedicated to turning concepts into reality, creating seamless and engaging websites
                                that leave a lasting impression. This portfolio is a showcase of my journey through the
                                intricacies of front-end and back-end development, where innovation and functionality meet to build the web of tomorrow.
                            </Typography>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default About