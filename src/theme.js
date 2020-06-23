import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        padding: 16
      }
    }
  }
})

export { theme }
