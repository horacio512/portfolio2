import React, { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Link, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import logo1 from "../assets/images/log11.png"
import logo2 from "../assets/images/log12.png"
import logo3 from "../assets/images/log13.png"


const Mywork = () => {

    const info = [{
        name: logo1, yt: "https://www.youtube.com/embed/RUwC0CJFmJY?si=7cc88kw8nBgVLLeV", github: "https://github.com/horacio512/toque-dulce", live: "https://toquedulce.com",
        descr: "Responsive site for a small family business. ", tech: "React- Vite - MaterialUI - ReactRouter - EmailJS - Hostinger"
    }, {
        name: logo2, yt: "https://www.youtube.com/embed/iXD_PF_tMQY?si=Jx2aroXQ7i0iapWB",github: "https://github.com/horacio512/velasviendo", live: "https://github.com/horacio512/velasviendo", descr: "Shopping web for candles, with fully functional cart.",
        tech: "React - MaterialUI - ReactRouter - ReactHelmet - Firebase"
    }
        , {
        name: logo3, yt: "empty", github: "https://github.com/horacio512/meal-app", live: "https://horacio512.github.io/meal-app/",
        descr: "App to make your own daily diet, conntected to the Spoonacular API", tech: "React - Vite - MaterialUI - ReactRouter - EmailJS"
    }
    ]

    const [show, setShow] = useState(null)

    const over = (i) => {
        setShow(i)
    }

    const leave = () => {
        setShow(null)
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid container id="my work" justifyContent="center" mt={4} sx={{ backgroundColor: "#f9f9f9" }} mb={3} >

                <Grid container xs={11} sm={10} item={true} marginTop="4%">

                    <Grid item xs={11} sm={12} mb={6}>
                        <Typography variant="h1" color="primary" fontWeight={800} >Some of my Projects</Typography>
                    </Grid>


                    <Grid container display="flex" justifyContent="space-evenly" >
                        {
                            info.map((data, index) => (

                                < Grid container item={true} xs={12} sm={5} key={index} onMouseEnter={() => { over(index) }} onMouseLeave={() => { leave() }}
                                    display="flex" justifyContent="space-evenly" alignContent="center"
                                    mt={2} mb={1} border={1} borderRadius="2%" borderColor="#4831d4">


                                    <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" mb={2}>
                                        <Link href={data.live} target="_blank" sx={{ opacity: show === index ? ("0.8") : ("1") }}>
                                            <img src={data.name} style={{ width: "100%", height: "auto", borderRadius: "2%" }} loading='lazy' alt="sample" title={data.descr} />
                                        </Link>
                                    </Grid>

                                    <Grid item xs={11}>
                                        <Typography variant="h5">{data.tech}</Typography>
                                    </Grid>
                                    <Grid item xs={5} display="flex" alignItems="center" justifyContent="end" >
                                        <Link variant='text' color="#cd201f" href={data.yt} target="_blank" fontSize="6vh">
                                            <YouTubeIcon fontSize='inherit' />
                                        </Link>
                                    </Grid>

                                    <Grid item xs={5} display="flex" alignItems="center" justifyContent="start" >
                                        <Link variant="text" color="#000000" href={data.github} target='_blank' fontSize="6vh">
                                            <GitHubIcon fontSize='inherit' />
                                        </Link>
                                    </Grid>


                                    <Grid item xs={8} display="flex" alignItems="center" mt={2} mb={1} textAlign="center">
                                        <Typography variant="h5" fontWeight={500} color="primary">{data.descr}</Typography>
                                    </Grid>
                                </Grid>



                            ))
                        }
                    </Grid>

                </Grid>
            </Grid>

        </ThemeProvider >
    )
}

export default Mywork