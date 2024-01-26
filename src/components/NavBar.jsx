import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Box, Button, Drawer, Grid, Link, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';


const NavBar = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const drawerStatus = (data) => {
        setOpenDrawer(data)
    }

    const names = [{ direction: "home" }, { direction: "about" }, { direction: "studies" }, { direction: "mywork" },
    { direction: "contact" },]

    return (
        <ThemeProvider theme={theme}>
            <Box position="fixed" top={0} right={0}>

                <Grid container display="flex" justifyContent="end">
                    <Button onClick={() => drawerStatus(true)} ><MenuIcon color="action" fontSize="large" /></Button>

                    <Drawer disableScrollLock={true} anchor="right" PaperProps={{
                        sx: { height: '80vh', top: "10%", right: "5%" },

                    }} open={openDrawer} onClose={() => drawerStatus(false)} >
                        {
                            names.map((data, index) => (
                                <Button key={index}> <HashLink smooth to={`#${data.direction}`} onClick={() => drawerStatus(false)} >
                                    <Typography variant="h5" color="primary" fontWeight={500} p={2} textTransform="capitalize" >{data.direction}</Typography>
                                </HashLink></Button>
                            ))
                        }

                        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} flexDirection="column">

                            <Box mb={3}>
                                <Link href="https://www.linkedin.com/in/horaciogarcia/" target="_blank" color="#000000" ><GitHubIcon fontSize='large' /></Link>
                            </Box>

                            <Box mb={3}>
                                <Link href="https://github.com/horacio512" target="_blank" color="#000000" ><LinkedInIcon fontSize='large' /> </Link>
                            </Box>

                            <Box>
                                <Link color="#000000" href="mailto: horaciioo512@gmail.com"><MailIcon fontSize='large' /> </Link>
                            </Box>
                        </Box>
                    </Drawer>
                </Grid>
            </Box>

        </ThemeProvider >
    )
}

export default NavBar