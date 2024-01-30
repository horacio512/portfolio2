import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'

/*Icons*/
import SearchIcon from '@mui/icons-material/Search';
import ReactIcon from "../assets/svg/React"
import JavascriptIcon from "../assets/svg/Javascript"
import MuiIcon from "../assets/svg/Mui"
import HtmlIcon from "../assets/svg/Html"
import CssIcon from "../assets/svg/Css"
import GitIcon from "../assets/svg/Git"

const Google = () => {

    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" display="flex" sx={{ background: "#f9f9f9" }} borderRadius={3} pb={5} >


                <Grid item xs={12} display="flex" justifyContent="end" mt={1}>

                    <Typography variant="h6" fontWeight={300} mr={1} >
                        Gmail
                    </Typography>
                    <Typography variant="h6" fontWeight={300} mr={2}>
                        Pictures
                    </Typography>
                </Grid>

                <Grid item xs={4} display="flex" justifyContent="center">
                    <Typography variant="h1" fontWeight={500} color="#4285f4">
                        G
                    </Typography>
                    <Typography variant="h1" fontWeight={500} color="#ea4436">
                        o
                    </Typography>
                    <Typography variant="h1" fontWeight={500} color="#fbbc05">
                        o
                    </Typography>
                    <Typography variant="h1" fontWeight={500} color="#4285f4">
                        g
                    </Typography>
                    <Typography variant="h1" fontWeight={500} color="#34a853">
                        l
                    </Typography>
                    <Typography variant="h1" fontWeight={500} color="#ea4336">
                        e
                    </Typography>
                </Grid>


                <Grid item xs={12} md={11} border={1} borderColor="#E5E4E2" borderRadius={3} display="flex" justifyContent="space-around" alignItems="center" p={1.5} mt={1}>

                    <Grid item xs={4} display="flex" justifyContent="space-evenly">
                        <SearchIcon />
                        <Typography variant='h4'>Technologies</Typography>
                    </Grid>

                    <Grid item xs={4} display="flex" justifyContent="space-evenly">
                        <SearchIcon />
                        <Typography variant='h4'>Soft Skills</Typography>
                    </Grid>

                </Grid>

                <Grid container xs={6} item={true} display="flex" justifyContent="center" alignItems="center" border={1} borderColor="#E5E4E2" borderRadius={3}  >

                    <Grid item xs={12} p={1} mt={1} display="flex" justifyContent="center" alignItems="center">
                        <ReactIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            React JS
                        </Typography>
                    </Grid>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center" justifyContent="center" >
                        <JavascriptIcon fontSize={35} style={{ backgroundColor: "#323330" }} />
                        <Typography variant="h4" ml={2}>
                            Javascript
                        </Typography>
                    </Grid>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center" justifyContent="center">
                        <MuiIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            Material UI
                        </Typography>
                    </Grid>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center" justifyContent="center">
                        <HtmlIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            HTML
                        </Typography>
                    </Grid>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center" justifyContent="center">
                        <CssIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            CSS
                        </Typography>
                    </Grid>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center" justifyContent="center">
                        <GitIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            Git
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={6} item={true} display="flex" justifyContent="center" alignItems="center" border={1} borderColor="#E5E4E2" borderRadius={3}>

                    <Grid item xs={12} p={1} mt={1} display="flex" alignItems="center">

                        <Typography variant="h4" ml={2}>
                            Team Work
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>

        </ThemeProvider>
    )
}

export default Google