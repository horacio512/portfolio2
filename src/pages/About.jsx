import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import SquareR from "../assets/svg/Square"
import Lines from "../assets/svg/Lines"

const About = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container id="about" height="90vh" justifyContent="center" mt={4} sx={{ backgroundColor: "#f9f9f9" }} >

                <Grid item xs={12} sm={10} pt={4} display="flex" flexDirection="column" justifyContent="space-around">
                    <Grid container sx={{ justifyContent: { xs: "center", sm: "space-between" } }} pb={4}>

                        <Grid item xs={10} sm={6}>
                            <Typography variant="h1" color="primary" fontWeight={800}>Self Taught</Typography>
                            <Typography variant="h5" color="primary" sx={{ textAlign: { xs: "start" } }} >
                                I&apos;m a self-taught web developer on a relentless journey of exploration
                                and innovation in the ever-evolving digital landscape.
                            </Typography>
                        </Grid>

                        <Grid item sm={4} xs={8} display="flex">
                            <SquareR />
                        </Grid>
                    </Grid>

                    <Grid container sx={{ justifyContent: { xs: "center", sm: "space-between" } }} >
                        <Grid item sm={2} sx={{ display: { xs: "none", sm: "flex" } }}>
                            <Lines />
                        </Grid>

                        <Grid item xs={10} sm={6} >

                            <Typography variant="h1" sx={{ textAlign: { xs: "start", sm: "start" } }} color="primary" fontWeight={800}>Web Development</Typography>
                            <Typography variant="h5" color="primary" sx={{ textAlign: { xs: "start", sm: "start" } }} >
                                I am dedicated to turning concepts into reality, creating seamless and engaging websites
                                that leave a lasting impression. This portfolio is a showcase of my journey through the
                                intricacies of front-end development.
                            </Typography>

                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default About