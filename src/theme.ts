import { createTheme, Theme} from "@mui/material/styles";
import { PaletteOptions, Palette } from "@mui/material/styles/createPalette";

interface CustomPaletteOptions extends PaletteOptions {
   custom?: {
     light: string;
     main: string;
     dark: string;
     contrastText: string;
   };
 }

 interface CustomTheme extends Theme {
   palette: Palette & CustomPaletteOptions;
 }


const theme=createTheme({
    palette:{
        primary:{
           main:'#9C87F4',
           light:'#FFFFFF',
           dark:'#5F36FF',
        },
        secondary:{
          main: '#CC0E10',
          light:'#EC4C57',
       },
        info: {
         light:'#CED4DA',
         main: '#6C757D',
         dark:'#222030',
      },
      custom: {
         light: '#ffa726',
         main: '#f57c00',
         dark: '#11101A',
         contrastText: 'rgba(0, 0, 0, 0.87)',
       },
   },
      components: {
        // Name of the component
        MuiButtonBase: {
          defaultProps: {
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
      },
   typography:{
    
      h1: {
         fontSize:'60px',
         fontWeight:700,
         color: '#11101A'
      },
      h2:{
       fontSize:'49px',
       fontWeight:400,
       color:'#11101A'
      },
      h3:{
         fontSize:'39px',
         fontWeight:400,
         color:'#11101A'
      },
      h4: {
         fontSize: "31px",
         fontWeight: 400,
         color:'#11101A'
       },
      h5: {
         fontSize: "25px",
         fontWeight: 400,
         color:'#11101A'
       },
      h6:{
         fontSize:'18px',
         fontWeight:400,
         color:'#11101A'
       },
      body1:{
         fontSize:'16px',
         fontWeight:400,
         color:'#11101A'
      },
      body2:{
         fontSize:'12px',
         fontWeight:400,
         color:'#11101A'
      }
   }
} as CustomTheme);

export default theme;