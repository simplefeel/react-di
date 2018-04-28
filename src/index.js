import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppModule from './AppModule'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppModule />, document.getElementById('root'))
registerServiceWorker()
