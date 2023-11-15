import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import MicNoneIcon from '@mui/icons-material/MicNone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ReactIcon from "../assets/svg/React"
import JavascriptIcon from "../assets/svg/Javascript"
import MuiIcon from "../assets/svg/Mui"

const Google = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container sx={{ background: "#f9f9f9" }} justifyContent="center" borderRadius={3} pb={3}>

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



                <Grid container xs={10} border={1} borderColor="#E5E4E2" display="flex" justifyContent="space-between" alignItems="center" borderRadius={3} p={1.5} mt={1}>

                    <Grid item xs={2} textAlign="center">
                        <SearchIcon />
                    </Grid>

                    <Grid item xs={8}>
                        <Typography variant="h4" >my skills</Typography>
                    </Grid>

                    <Grid item xs={1} textAlign="end">
                        <MicNoneIcon />
                    </Grid>

                    <Grid item xs={1} textAlign="center">
                        <CameraAltIcon />
                    </Grid>

                </Grid>

                <Grid container display="flex" justifyContent="center" alignItems="center"  >


                    <Grid item xs={7} p={1} mt={1} display="flex" alignItems="center">
                        <ReactIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            React
                        </Typography>
                    </Grid>

                    <Grid item xs={7} p={1} mt={1} display="flex" alignItems="center">
                        <JavascriptIcon fontSize={35} style={{backgroundColor: "#323330"}} />
                        <Typography variant="h4" ml={2}>
                            Javascript
                        </Typography>
                    </Grid>

                    <Grid item xs={7} p={1} mt={1} display="flex" alignItems="center">
                        <MuiIcon fontSize={35} />
                        <Typography variant="h4" ml={2}>
                            Material UI
                        </Typography>
                    </Grid>

                </Grid>

            </Grid>

        </ThemeProvider>
    )
}

export default Google