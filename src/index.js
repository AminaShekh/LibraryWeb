import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Desktop6 from './views/desktop6'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Desktop6} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
