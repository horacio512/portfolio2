import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import Lines from "../assets/svg/Lines"
import Square from "../assets/svg/Square"
import NavBar from '../components/NavBar'

const Home = () => {
    return (
        <ThemeProvider theme={theme}>

            <NavBar />

            <Grid container id="home" alignContent="center" pt={15} pb={8}
                sx={{ justifyContent: { xs: "center", sm: "center" }, background: { xs: "linear-gradient(180deg, #4831d4 70%, #ccf381 30%)", sm: "linear-gradient(90deg, #4831d4 67%, #ccf381 33%)" } }} >

                <Grid item xs={10} sm={5} textAlign="start" pb={6}>

                    <Typography variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }} >Frontend</Typography>
                    <Typography mb={2} variant="h1" color="secondary" fontWeight={900} sx={{ lineHeight: 1.1 }}>Developer.</Typography>

                    <Grid item xs={12} sm={10} mt={4}>
                        <Typography mb={6} variant="h5" color="white" >I like to craft solid and scalable frontend products with great user experiences.</Typography>
                    </Grid>

                    <Grid item xs={5} mt={4}>
                        <Typography color="secondary" variant="h6">Highly skilled at progressive enhancement, design systems & UI Engineering.</Typography>
                    </Grid>
                    <Grid item xs={5} mt={4}>
                        <Typography color="secondary" variant="h6">Proven experience building successful products for local clients.</Typography>
                    </Grid>

                </Grid>



                <Grid item xs={6} sm={3} pb={6} mb={2} >
                    <img src="https://i.ibb.co/pLzWjhK/back.webp" width="100%" height="auto" alt="picture about me" title="me" loading="eager"/>
                </Grid>

                <Grid item xs={0} sm={1} sx={{ display: { xs: "none", sm: "flex" } }}>
                    <Lines />
                </Grid>

            </Grid>

        </ThemeProvider >
    )
}

export default Home