import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Button, CardMedia, Grid, Typography } from '@mui/material'

const Mywork = () => {


    return (
        <ThemeProvider theme={theme}>
            <Grid container id="mywork" justifyContent="center" mt={4} sx={{ backgroundColor: "#f9f9f9" }} >

                <Grid container xs={11} item={true} sm={10} marginTop="4%" sx={{ backgroundColor: "#ffffff" }} p={3}>

                    <Grid item xs={11} sm={10} pb={4}>
                        <Typography variant="h1" color="primary" fontWeight={800} >Some of my Projects</Typography>
                    </Grid>

                    <Grid item xs={11} sm={5} justifyContent="center" mt={2}>
                        <Typography variant="h3" color="primary">
                            Toque Dulce
                        </Typography>

                        <Typography mt={2} variant="h5" color="primary" mb={4}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque provident quasi error quidem sunt ullam debitis asperiores minus mollitia, et dicta quae similique accusamus expedita, omnis quos, quaerat distinctio enim.
                        </Typography>

                        <Button>
                            Github
                        </Button>

                        <Button>
                            Live Web    
                        </Button>
                    </Grid>

                    <Grid item xs={11} sm={5} display="flex" justifyContent="center">

                        <CardMedia
                            component='iframe'
                            title='toquedulce'
                            src="https://www.youtube.com/embed/RUwC0CJFmJY?si=7cc88kw8nBgVLLeV"
                        />

                    </Grid>
                </Grid>
            </Grid>

        </ThemeProvider>
    )
}

export default Mywork