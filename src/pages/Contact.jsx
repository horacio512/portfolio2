import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, Grid, TextField, Typography } from '@mui/material'
import emailjs from "@emailjs/browser"


const Contact = () => {

    const [status, setStatus] = useState(400)

    const sendMail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_tyf8tp9", "template_fqsovm9", e.target, "Oe7b_WInIH2SDxkwo")
            .then(response => setStatus(response))
            .catch(error => console.log(error))
            .then(e.target.reset())
            .then(setTimeout(() => { setStatus(400) }, 3000))
    }


    return (
        <ThemeProvider theme={theme} >
            <Grid container height="100vh" id="contact" justifyContent="center" alignContent="center" sx={{ backgroundColor: "#f9f9f9" }}>

                <Grid item xs={12} sm={6} textAlign="center" pb={4}>
                    <Typography variant="h2" color="primary" fontWeight={800}>Send me a message!</Typography>
                    <Typography p={2} variant="h4" fontWeight={300} color="#3d155f">Got a question or proposal, or just want
                        to say hello? Go ahead.</Typography>
                </Grid>

                <Grid item xs={12} sm={7} >
                    <form onSubmit={sendMail}>
                        <Grid item xs={12} display="flex" justifyContent="space-evenly" mb={5}>
                            <TextField name="name" placeholder="Enter your name" variant="standard" required />
                            <TextField name="email" type="email" placeholder="Enter your email" variant="standard" required />
                        </Grid>

                        <Grid item xs={12} display="flex" justifyContent="center">
                            <Grid item xs={11} sm={9}>
                                <TextField name="msg" multiline rows={4} type="text" fullWidth placeholder="Hi i would love to talk about an oportunity for you!" variant="filled" required />
                            </Grid>
                        </Grid>

                        <Grid item xs={12} justifyContent="center" display="flex" mb={6}>
                            <Grid item xs={6} sm={4} mt={4} justifyContent="center">
                                <Button type="submit" fullWidth variant="contained" ><Typography variant="h4" textTransform="capitalize">Send &#8594;</Typography></Button>
                            </Grid>
                        </Grid>
                    </form>

                    <Typography variant="h4" fontWeight={500} textAlign="center" color="primary" visibility={status.status === 200 ? ("visible") : ("hidden")}>
                        Your message has been sent!</Typography>

                </Grid>

            </Grid>
        </ThemeProvider >
    )
}

export default Contact