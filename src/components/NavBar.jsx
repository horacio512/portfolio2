import { ThemeProvider } from '@emotion/react'
import theme from '../assets/MuiTheme'
import { Box, Button, Drawer, Grid, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
                    <Button onClick={drawerStatus} ><MenuIcon color="action" fontSize="large" /></Button>

                    <Drawer disableScrollLock={true} anchor="right" PaperProps={{
                        sx: { height: '80vh', top: "10%", right: "5%" },

                    }} open={openDrawer} onClose={() => drawerStatus(false)} >
                        {
                            names.map((data) => (
                                <Button> <HashLink smooth to={`#${data.direction}`} onClick={() => drawerStatus(false)} >
                                    <Typography variant="h5" color="primary" fontWeight={500} p={2.5} textTransform="capitalize" >{data.direction}</Typography>
                                </HashLink></Button>
                            ))
                        }

                        <Box display="flex" alignItems="center" mt={2} flexDirection="column">

                            <Box mb={2}>
                                <GitHubIcon fontSize='large' />
                            </Box>

                            <Box>
                                <LinkedInIcon fontSize='large' />
                            </Box>
                        </Box>
                    </Drawer>
                </Grid>
            </Box>

        </ThemeProvider >
    )
}

export default NavBar