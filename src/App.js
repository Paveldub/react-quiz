import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'

class App extends Component {
  render () {
    return (
      <Layout>
        <h1 style={{ color: 'red', fontSize: 25 }}>Layout Component</h1>
      </Layout>
    )
  }
}

export default App
