import { createTheme } from '@mui/material/styles';

const Theme = (mode: 'light' | 'dark') => createTheme({
    palette: {
        mode: mode,
    },
});

export default Theme;