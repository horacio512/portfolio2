import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Grid, Typography } from '@mui/material'
import Skills from '../assets/Skills'


const Studies = () => {
    return (
        <ThemeProvider theme={theme}>
            <Grid container id="studies" alignContent="center" pt={5} pb={5} 
                sx={{ justifyContent: { xs: "center", sm: "space-evenly" }, backgroundColor: "#4831d4" }} >

                <Grid item xs={11} sm={10} display="flex" flexWrap="wrap" justifyContent="space-evenly">
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h1" fontWeight={800} color="secondary">
                            Over the
                        </Typography>
                        <Typography variant="h1" fontWeight={800} color="secondary" mb={3}>
                            years,
                        </Typography>

                        <Typography variant="h6" color="white" fontWeight={400} mb={2} p={1}>
                            Hello, I'm Horacio, a passionate and dedicated web developer eager to embark on an exciting journey
                            in the world of web development.
                        </Typography>

                        <Typography variant="h6" color="white" fontWeight={400} mb={2} p={1}>
                            With a strong foundation in HTML, CSS, JavaScript, and React I am committed
                            to learning and growing my skills to create dynamic and user-friendly websites. My enthusiasm for problem-solving
                            and attention to detail drive me to craft visually appealing, responsive, and interactive web solutions.
                        </Typography>

                        <Typography variant="h6" color="white" fontWeight={400} p={1}>
                            As I continue to explore the latest web technologies and frameworks, I am excited to contribute to building engaging online experiences.
                            I'm looking forward to the opportunity to be part of a dynamic team and help transform ideas into digital reality.
                            Let's create the web of the future together!
                        </Typography>
                    </Grid>


                    <Grid item xs={10} sm={8} display="flex" sx={{marginTop: {xs: -15, sm: 0}}} >
                        <Skills />
                    </Grid>

                </Grid>


            </Grid>

        </ThemeProvider>
    )
}

export default Studies