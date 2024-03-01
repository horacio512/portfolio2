import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, Grid, Typography } from '@mui/material'
import NavBar from '../components/NavBar'
import HG from '../assets/svg/hg.svg'
import "../assets/Text.css"

const Home = () => {
    return (
        <ThemeProvider theme={theme}>

            <NavBar />

            <Grid container id="home" alignContent="center" pt={4} pb={8} height="95vh"
                sx={{ justifyContent: { xs: "center", sm: "center" }, background: { xs: "#4831d4" } }} >

                <Grid item xs={10} md={5} display="flex" flexDirection="column">

                    <Typography variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }} >Horacio Garcia.</Typography>

                    <Grid item xs={12} sm={10} mt={3}>
                        <Grid item xs={12} sm={10}>
                            <Typography fontWeight={900} variant="h2" color="secondary">Front-end Developer</Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={8} mt={3} >
                        <Typography color="white" variant="h5">Transforming visions into reality through intuitive and responsive front-end development.</Typography>
                    </Grid>

                    <Grid item xs={12} sm={8} mt={2} mb={2}>
                        <Typography color="white" variant="h5">Proven experience building successful products for local clients.</Typography>
                    </Grid>

                </Grid>




                <Grid item xs={6} md={5} textAlign="center" display="flex" flexWrap="wrap" justifyContent="center" alignContent="center" zIndex={1}  >

                    <Grid item xs={7} justifyItems="center">
                        <img src={HG} width="100%" height="auto" alt="picture about me" title="me" loading="eager" />
                    </Grid>

                    <Grid item xs={12} textAlign="center">
                        <Button className="btncolor" color="secondary" sx={{fontSize:"calc(0.8em + 0.5vw)"}} variant="contained" size="large" >Download CV</Button>
                    </Grid>

                </Grid>


            </Grid>

        </ThemeProvider >
    )
}

export default Home