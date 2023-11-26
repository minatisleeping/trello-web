import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { cyan, deepOrange, orange, teal } from '@mui/material/colors'

// A custom theme for this app
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange
      }
    },
    dark: {
      palette: {
        palette: {
          primary: cyan,
          secondary: orange
        }
      }
    }
  }
// ...other properties
})

export default theme