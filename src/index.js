import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

const appNode = document.createElement('div')
document.body.appendChild(appNode)

ReactDOM.render(<App />, appNode)
