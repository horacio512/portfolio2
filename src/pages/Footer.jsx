import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, Grid, Typography } from '@mui/material'

const Footer = () => {


  return (
    <ThemeProvider theme={theme} >
      <Grid container height="100vh" id="footer" sx={{ background: "#ccf381" }} justifyContent="center" >

        <Grid item xs={11} sm={10}>
          <Typography variant="h4" mt="18%" letterSpacing={2} color="white" fontWeight={400}>SAY HELLO</Typography>

          <Grid item xs={10} sm={9} mt={4} >
            <Typography variant="h5">
              <a style={{ color: "#4831d4", fontSize: "calc(0.7em + 0.7vw)", fontWeight: 400 }} href="mailto: horaciioo512@gmail.com">Contact me at my @email</a>
            </Typography>
          </Grid>

        </Grid>

        <Grid item xs={11} sm={10} borderTop={1} borderColor="#4831d4" display="flex" justifyContent="space-evenly" alignItems="start" pt={4}>

          <Button href="https://www.linkedin.com/in/horaciogarcia/" target="_blank" ><Typography variant="h4" color="primary" fontWeight={300}>LinkedIn</Typography></Button>
          <Button href="https://github.com/horacio512" target="_blank"><Typography variant="h4" color="primary" fontWeight={300}>Github</Typography></Button>
          <Button href="https://www.youtube.com/channel/UChZil2lXphSE02LR67HwF0g" target="_blank"><Typography variant="h4" color="primary" fontWeight={300}>Youtube</Typography></Button>


        </Grid>

        <Grid item xs={11} sm={10}>
          <Typography variant="h4" textAlign="end" color="primary" fontWeight={300}>© Horacio Garcia 2024</Typography>
        </Grid>

      </Grid>
    </ThemeProvider >
  )
}

export default Footer