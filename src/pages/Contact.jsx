import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, Grid, TextField, Typography } from '@mui/material'

const Contact = () => {


    return (
        <ThemeProvider theme={theme} >
            <Grid container height="100vh" justifyContent="center" alignContent="center" sx={{ backgroundColor: "#f9f9f9" }}>

                <Grid item xs={12} sm={6} textAlign="center" pb={4}>
                    <Typography variant="h2" color="primary" fontWeight={800}>Send me a message!</Typography>
                    <Typography p={2} variant="h4" fontWeight={300} color="#3d155f">Got a question or proposal, or just want
                        to say hello? Go ahead.</Typography>
                </Grid>

                <Grid item xs={12} sm={7} >
                    <form>
                        <Grid item xs={12} display="flex" justifyContent="space-evenly" mb={5}>
                            <TextField name="name" placeholder="Enter your name" variant="standard" required />
                            <TextField name="email" type="email" placeholder="Enter your email" variant="standard" required />
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Grid item xs={11} sm={9}>
                                <TextField name="msg" multiline rows={4} type="text" fullWidth placeholder="Enter your message" label="Your Message" variant="filled" required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} mt={4} display="flex" justifyContent="center">
                            <Button type="submit" variant="outlined" ><Typography variant="h3" textTransform="capitalize">Send &#8594;</Typography></Button>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}

export default Contact