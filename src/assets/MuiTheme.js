import { createTheme } from "@mui/material"

const theme = createTheme({

    palette: {
        primary: {
            main: "#4831d4"
        },
        secondary: {
            main: "#ccf381 "
        }
    },


    typography: {
        h1: {
            fontSize: "calc(1.9em + 1.9vw)",
        },
        h2: {
            fontSize: "calc(1.3em + 1.3vw)",
        },
        h3: {
            fontSize: "calc(1em + 1vw)",
        },
        h4: {
            fontSize: "calc(0.9em + 0.8vw)",
        },
        h5: {
            fontSize: "calc(0.7em + 0.6vw)"
        },
        h6: {
            fontSize: "calc(0.5em + 0.5vw)",
        },
        p: {
            fontSize: "calc(0.5em + 0.5vw)",
        }
    }
})


export default theme