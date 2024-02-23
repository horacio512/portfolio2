import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, Grid, Typography } from '@mui/material'
import NavBar from '../components/NavBar'
import HG from '../assets/images/hg.png'
import "../assets/Text.css"

const Home = () => {
    return (
        <ThemeProvider theme={theme}>

            <NavBar />

            <Grid container id="home" alignContent="center" pt={4} pb={8}
                sx={{ justifyContent: { xs: "center", sm: "center" }, background: { xs: "#4831d4" } }} >

                <Grid item xs={10} sm={6} mt={9} textAlign="start" pb={6}>

                    <Typography variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }} >Horacio Garcia.</Typography>


                    <Grid item xs={12} sm={10} mt={4}>
                        <Typography mb={6} variant="h5" color="white" >
                            <Grid item xs={12} sm={10}>
                                <Typography fontWeight={900} variant="h3" color="secondary" >Front-end Developer</Typography>
                            </Grid>
                        </Typography>
                    </Grid>

                    <Grid item xs={5} mt={4}>
                        <Typography color="white" variant="h6">Transforming visions into reality through intuitive and responsive front-end development.</Typography>
                    </Grid>
                    <Grid item xs={5} mt={4}>
                        <Typography color="white" variant="h6">Proven experience building successful products for local clients.</Typography>
                    </Grid>

                </Grid>



                <Grid item xs={6} sm={4} mb={6} p={8}  textAlign="center" zIndex={1}  >
                    <img src={HG} width="100%" height="auto" alt="picture about me" title="me" loading="eager" />

                    <Grid item xs={12} textAlign="center">
                        <Button className="btncolor" color="secondary" variant="contained" size="large" >Download CV</Button>
                    </Grid>

                </Grid>


            </Grid>

        </ThemeProvider >
    )
}

export default Home