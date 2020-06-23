import { Suspense, useEffect } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FirebaseAppProvider } from 'reactfire'
import firebaseConfig from '../firebaseConfig'
import { theme } from '../src/theme'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ThemeProvider theme={theme}>
        <Suspense fallback="Loading">
          <CssBaseline />
          <Component {...pageProps} />
          <style jsx global>{`
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
        </Suspense>
      </ThemeProvider>
    </FirebaseAppProvider>
  )
}

export default MyApp
