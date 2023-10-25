import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container id="about" height="98vh" >

                <Grid container>
                    <Grid item xs={12} sx={{ textAlign: { xs: "center", sm: "left" }, paddingLeft: { xs: 0, sm: 6 } }} pt={6}>
                        <Typography variant="h1" color="primary" fontWeight={800}>Self Taught</Typography>
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        <Typography varianth="h6" color="primary" sx={{ textAlign: { xs: "center", sm: "left" }, paddingLeft: { xs: 2, sm: 6 }, paddingRight: { xs: 2 } }} >
                            I'm a self-taught web developer on a relentless journey of exploration
                            and innovation in the ever-evolving digital landscape.
                            I've embarked on this incredible adventure to not only master the art of
                            web development but to harness the ability to turn ideas into functional, elegant, and impactful online experiences.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container justifyContent="end">
                    <Grid item xs={12} sx={{ textAlign: { xs: "center", sm: "right" }, paddingRight: { xs: 0, sm: 5 } }} mt={4}>
                        <Typography variant="h1" color="primary" fontWeight={800}>Web Development</Typography>
                    </Grid>

                    <Grid item xs={12} sm={5} justifySelf="flex-end">
                        <Typography varianth="h6" color="primary" sx={{ textAlign: { xs: "center", sm: "left" }, paddingRight: { xs: 2, sm: 6 }, paddingLeft: { xs: 2 } }} >
                            As a web developer, I am dedicated to turning concepts into reality, creating seamless and engaging websites
                            that leave a lasting impression. This portfolio is a showcase of my journey through the
                            intricacies of front-end and back-end development, where innovation and functionality meet to build the web of tomorrow.
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </ThemeProvider>
    )
}

export default About