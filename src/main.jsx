import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import bootswatch theme
import './bootstrap.min.css'

// font awesome

// import 'mdb-react-ui-kit/dist/css/mdb.min.css';        //mdb bootstrap wont go with bootswatch
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom'



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
        <App/>
    </BrowserRouter>

  </StrictMode>,
)
