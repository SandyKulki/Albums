import React from 'react'
import ReactDOM from 'react-dom'
import Loader from "./views/Loader"

import registerServiceWorker from './registerServiceWorker'

import "./assets/css/index.css"

window.onload = _ => ReactDOM.render(<Loader className="loader" />, document.getElementById('root'))
registerServiceWorker()