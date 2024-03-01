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
            fontSize: "calc(2em + 2vw)",
        },
        h2: {
            fontSize: "calc(1.4em + 1.4vw)",
        },
        h3: {
            fontSize: "calc(1em + 1vw)",
        },
        h4: {
            fontSize: "calc(0.9em + 0.8vw)",
        },
        h5: {
            fontSize: "calc(0.8em + 0.8vw)"
        },
        h6: {
            fontSize: "calc(0.6em + 0.5vw)",
        },
        p: {
            fontSize: "calc(0.5em + 0.5vw)",
        }
    }
})


export default theme