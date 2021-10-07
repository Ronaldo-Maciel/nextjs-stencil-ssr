import 'tailwindcss/tailwind.css'
import { applyPolyfills, defineCustomElements } from 'stencil-webcomponents/loader'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    applyPolyfills().then(() => {
      defineCustomElements()
    })
  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
