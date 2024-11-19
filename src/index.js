import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
// import * as serviceWorker from "./serviceWorker";
import AppContextProvider from './AppContext'
import { CaptchaProvider } from './CaptchaProvider'

const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <AppContextProvider>
      <CaptchaProvider>
        <App />
      </CaptchaProvider>
    </AppContextProvider>
  </React.StrictMode>
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
