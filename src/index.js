import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'; 

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
        main: "#b81a9a"
    },
    secondary: {
        main: "#f50057"
    },
    background: {
        default: "#FFECD1",
        paper: "#212121"
    }
},

components: {
    MuiCssBaseline: {
        styleOverrides: {
            '::-webkit-scrollbar': {
                width: '0.6em'
            },
            '::-webkit-scrollbar-track': {
                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: "#3e3e3e",
                borderRadius: '4px'
            }
        }

    },
    MuiListItem: {
        styleOverrides: {
            root: {
                "&$selected": {
                    backgroundColor: '#c01291',
                },
            },
        }

    },
    MuiInput: {
        styleOverrides: {
            input: {
                "&::placeholder": {
                    color: "gray"
                },
                color: "white",
            }
        }

    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: "#1f1f1f",
            }
        }

    },
    MuiCard: {
        styleOverrides: {
            root: {
                backgroundColor: "#1f1f1f"
            }
        }

    }
}



})

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>
  </BrowserRouter>
  
);

