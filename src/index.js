import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import './index.scss'
import reportWebVitals from './reportWebVitals'
import { persistor, store } from './store/store'
import { stripePromise } from './utils/stripe/stripe'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
